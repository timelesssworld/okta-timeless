import React from 'react'
import PropTypes from 'prop-types'
import { graphql, StaticQuery } from 'gatsby'
import '../styles/index.css'
import Layout from '../components/Layout'
import Post from '../components/Post'
export function SavoirVivreNigdyBiznesowo({data}){
  const posts = data.allMarkdownRemark.edges
  const newPosts = posts.map(({node:post})=>{
    if(checkPath(`${post.frontmatter.path}`))
    return post
    else return ''
  })
  console.log(newPosts)
  return(
  <Layout>
    {
      newPosts.map((post,id)=>(
        <Post post={post} id={id}/>
      ))
    }
  </Layout>)
}
function checkPath(pathToCheck){
  const properPath = new RegExp('/blog/savoir-vivre/biznesowo')
  return properPath.test(pathToCheck)
}
SavoirVivreNigdyBiznesowo.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
};
const query = () => (
  <StaticQuery
    query={graphql`
      query SavoirVivreNigdyBiznesowo {
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
    render={(data) => <SavoirVivreNigdyBiznesowo data={data}/>}
  />
)

export default query