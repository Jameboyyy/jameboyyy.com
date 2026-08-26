const { randomUUID } = require('node:crypto')
const { app } = require('@azure/functions')
const { createClient } = require('@sanity/client')

const PROJECT_ID = 'lflzrf9y'
const DATASET = 'production'
const API_VERSION = '2024-01-01'
const MAX_CONTENT_LENGTH = 100_000

const json = (status, jsonBody) => ({ status, jsonBody })

const getClientPrincipal = (request) => {
  const header = request.headers.get('x-ms-client-principal')

  if (!header) return null

  try {
    return JSON.parse(Buffer.from(header, 'base64').toString('utf8'))
  } catch {
    return null
  }
}

const parseBlogPath = (path) => {
  if (typeof path !== 'string' || path.length > 240) return null

  const normalized = path.trim().replaceAll('\\', '/')
  const parts = normalized.split('/')

  if (
    parts.length < 1 ||
    parts.length > 3 ||
    parts.some((part) => !part || part === '.' || part === '..') ||
    parts.slice(0, -1).some((part) => !/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(part))
  ) {
    return null
  }

  const filename = parts.at(-1)

  if (!filename.endsWith('.md')) return null

  const slug = filename.slice(0, -3)

  if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug)) return null

  return {
    category: parts.length === 1 ? '' : parts[0],
    subcategory: parts.length === 3 ? parts[1] : '',
    slug,
  }
}

const textToPortableText = (content) =>
  content
    .split(/\r?\n\s*\r?\n/)
    .filter((text) => text.length > 0)
    .map((text) => ({
      _key: randomUUID().replaceAll('-', '').slice(0, 12),
      _type: 'block',
      style: 'normal',
      markDefs: [],
      children: [
        {
          _key: randomUUID().replaceAll('-', '').slice(0, 12),
          _type: 'span',
          marks: [],
          text,
        },
      ],
    }))

const titleFromSlug = (slug) =>
  slug.replaceAll('-', ' ').replace(/\b\w/g, (letter) => letter.toUpperCase())

const hasRichContent = (body) =>
  Array.isArray(body) &&
  body.some(
    (block) =>
      block?._type !== 'block' ||
      (block.markDefs || []).length > 0 ||
      (block.children || []).some((child) => (child.marks || []).length > 0)
  )

const savePost = async (request, context) => {
  const principal = getClientPrincipal(request)
  const roles = Array.isArray(principal?.userRoles) ? principal.userRoles : []

  if (!roles.includes('authenticated')) {
    return json(401, { error: 'authentication required' })
  }

  if (!roles.includes('portfolio_admin')) {
    return json(403, { error: 'permission denied' })
  }

  const token = process.env.SANITY_API_WRITE_TOKEN

  if (!token) {
    context.error('SANITY_API_WRITE_TOKEN is not configured')
    return json(503, { error: 'blog persistence is not configured' })
  }

  let payload

  try {
    payload = await request.json()
  } catch {
    return json(400, { error: 'invalid JSON body' })
  }

  const path = parseBlogPath(payload?.path)
  const content = payload?.content

  if (!path) {
    return json(400, {
      error: 'path must end in a lowercase, URL-safe .md filename inside ~/blogs',
    })
  }

  if (typeof content !== 'string' || content.length > MAX_CONTENT_LENGTH) {
    return json(400, { error: 'content must be text no longer than 100,000 characters' })
  }

  const sanity = createClient({
    projectId: PROJECT_ID,
    dataset: DATASET,
    apiVersion: API_VERSION,
    useCdn: false,
    token,
  })

  try {
    const existing = await sanity.fetch(
      `*[
        _type == "post" &&
        slug.current == $slug &&
        category == $category &&
        coalesce(subcategory, "") == $subcategory
      ][0]`,
      path
    )

    const body = textToPortableText(content)
    const title =
      typeof payload.title === 'string' && payload.title.trim()
        ? payload.title.trim().slice(0, 200)
        : titleFromSlug(path.slug)

    let saved

    if (existing?._id) {
      if (hasRichContent(existing.body)) {
        return json(409, {
          error: 'this post contains rich content and must be edited in Sanity Studio',
        })
      }

      let patch = sanity.patch(existing._id)

      if (typeof payload.revision === 'string' && payload.revision) {
        patch = patch.ifRevisionId(payload.revision)
      }

      saved = await patch
        .set({ body, title })
        .commit({ visibility: 'sync' })
    } else {
      saved = await sanity.create(
        {
          _type: 'post',
          title,
          slug: { _type: 'slug', current: path.slug },
          ...(path.category ? { category: path.category } : {}),
          ...(path.subcategory ? { subcategory: path.subcategory } : {}),
          excerpt: content.trim().slice(0, 180),
          publishedAt: new Date().toISOString(),
          body,
        },
        { visibility: 'sync' }
      )
    }

    return json(200, {
      post: {
        _id: saved._id,
        _rev: saved._rev,
        title: saved.title,
        slug: saved.slug.current,
        category: saved.category,
        subcategory: saved.subcategory,
        excerpt: saved.excerpt,
        publishedAt: saved.publishedAt,
        body: saved.body,
      },
    })
  } catch (error) {
    context.error('Failed to save Sanity post', error)
    return json(500, { error: 'failed to save blog post' })
  }
}

app.http('savePost', {
  route: 'posts',
  methods: ['POST'],
  authLevel: 'anonymous',
  handler: savePost,
})
