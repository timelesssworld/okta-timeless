import { Link } from 'gatsby'
import React from 'react'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import '../styles/index.css'
const Post = ({post,id})=> {
  return (
    <div key={id}> 
      <p className='icon-image'>
        <p>{post.frontmatter.title}</p>
        <GatsbyImage image={
          getImage(post.frontmatter.mainImage)} alt='mainimage'
        />
        <p><Link to={post.frontmatter.path}>Kliknij tu</Link></p>  
      </p>
    </div>
  )
}
export default Post