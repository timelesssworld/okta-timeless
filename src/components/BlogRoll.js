import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'
import LeftFooter from './LeftFooter'
import '../styles/index.css'
function BlogRoll({data}){
  const posts = data.allMarkdownRemark.edges
  console.log(posts)
  return(
  <div className='blog-post__container'>
    <LeftFooter/>
    <div className="blog-post">
    {
      posts.map(({node:post})=>(
        <div key={post.id}>
          <p>{post.excerpt}</p>
          <Link to={post.frontmatter.path}>kliknij tu !</Link>
        </div>
      ))
    }
    </div>
  </div>)
}
BlogRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
};

const query = () => (
  <StaticQuery
    query={graphql`
      query BlogRollQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
        ) {
          edges {
            node {
              excerpt(pruneLength: 400)
              id
              frontmatter {
                path
                title
                date(formatString: "MMMM DD, YYYY")
              }
            }
          }
        }
      }
    `}
    render={(data) => <BlogRoll data={data}/>}
  />
)

export default query