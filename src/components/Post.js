import { Link } from 'gatsby'
import React from 'react'

const Post = ({post,id})=> {
    return (
        <div key={id}>
          {post.excerpt}
          <Link to={post.excerpt?post.frontmatter.path:'/'}>{post.excerpt?'Kliknij tu!':''}</Link>
        </div>
    )
}
export default Post