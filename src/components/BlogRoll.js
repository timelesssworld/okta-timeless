import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'
import '../styles/index.css'
import Layout from './Layout.js'
import { getImage, GatsbyImage } from 'gatsby-plugin-image'
import '../styles/index.css'
function BlogRoll({data}){
  const posts = data.allMarkdownRemark.edges
  console.log(posts)
  return(
  <Layout>
    {
    posts.map(({node:post})=>(
      <div className='icon-image' key={post.id}>
          <p>{post.frontmatter.title}</p>
          <GatsbyImage image={
            getImage(post.frontmatter.mainImage?post.frontmatter.mainImage:'')} alt='mainimage'
          />
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
                mainImage {
                  childImageSharp {
                    gatsbyImageData(
                      width: 200
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