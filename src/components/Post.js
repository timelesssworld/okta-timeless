import { Link } from 'gatsby'
import React from 'react'

const Post = ({post,id})=> {
    return (
        <p key={id}>
          {post.excerpt}
          <Link to={post.excerpt?post.frontmatter.path:'/'}>{post.excerpt?'Kliknij tu!':''}</Link>
        </p>
    )
}
export default Post