import { Link } from 'gatsby'
import React from 'react'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import '../styles/index.css'
const Post = ({post,id})=> {
  return (
    <div key={id}> 
      <p className='icon-image'><GatsbyImage image={getImage(post.frontmatter.mainImage)} alt='mainimage'/></p>
      <p>{post.excerpt}</p>
      <p><Link to={post.excerpt?post.frontmatter.path:'/'}>{post.excerpt?'Kliknij tu!':''}</Link></p>  
    </div>
  )
}
export default Post