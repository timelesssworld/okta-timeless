import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'
import '../styles/index.css'
import Layout from './Layout.js'
function BlogRoll({data}){
  const posts = data.allMarkdownRemark.edges
  console.log(posts)
  return(
  <Layout>
    {
    posts.map(({node:post})=>(
      <div key={post.id}>
        <p>{post.excerpt}</p>
        <Link to={post.frontmatter.path}>kliknij tu !</Link>
      </div>
    ))
    }
  </Layout>)
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
                image {
                  childImageSharp {
                    gatsbyImageData(
                      width: 500
                      blurredOptions: {width: 100}
                      placeholder: BLURRED
                      transformOptions: {cropFocus: CENTER}
                      aspectRatio: 0.7
                    )
                  }
                }
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