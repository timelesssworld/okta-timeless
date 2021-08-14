// import React from 'react'
// import Layout from '../components/Layout'

// function index() {
//     return (
//         <Layout>
//             kjasdjisji
//         </Layout>
//     )
// }

// export default index




import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'
import '../styles/index.css'
import Layout from '../components/Layout'
export function SavoirVivre({data}){
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
SavoirVivre.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
};
const query = () => (
  <StaticQuery
    query={graphql`
      query BlogRoll {
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
    render={(data) => <SavoirVivre data={data}/>}
  />
)

export default query