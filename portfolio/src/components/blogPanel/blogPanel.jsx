import { PortableText } from '@portabletext/react'
import './blogPanel.css'

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
          <PortableText value={post.body} />
        </div>
      )}
    </article>
  )
}

export default BlogPanel