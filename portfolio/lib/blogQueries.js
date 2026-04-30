import { client } from './sanityClient'

export const getPosts = async () => {
  return client.fetch(`*[_type == "post"] | order(publishedAt desc) {
    title,
    "slug": slug.current,
    excerpt,
    publishedAt,
    body
  }`)
}

export const getPostBySlug = async (slug) => {
  return client.fetch(
    `*[_type == "post" && slug.current == $slug][0] {
      title,
      "slug": slug.current,
      excerpt,
      publishedAt,
      body
    }`,
    { slug }
  )
}