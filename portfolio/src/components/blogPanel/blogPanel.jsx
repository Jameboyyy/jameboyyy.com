import { PortableText } from '@portabletext/react'
import { urlFor } from '../../lib/sanityImage'
import './blogPanel.css'

const components = {
  types: {
    image: ({ value }) => (
      <img
        className="blogImage"
        src={urlFor(value).width(900).auto('format').url()}
        alt={value.alt || 'Blog image'}
      />
    ),
  },
}

const BlogPanel = ({ post }) => {
  return (
    <article className="blogReader">
      <p className="blogLabel">BLOG POST</p>

      <h3>{post.title}</h3>

      {post.publishedAt && (
        <p className="blogDate">
          {new Date(post.publishedAt).toLocaleDateString()}
        </p>
      )}

      {post.excerpt && <p className="blogExcerpt">{post.excerpt}</p>}

      {post.body && (
        <div className="blogBody">
          <PortableText value={post.body} components={components} />
        </div>
      )}
    </article>
  )
}

export default BlogPanel