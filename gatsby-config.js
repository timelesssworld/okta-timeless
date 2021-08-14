
 module.exports = {
  siteMetadata: {
    title: "My Gatsby Site",
  },
  plugins: [
    'gatsby-transformer-remark',
    `gatsby-plugin-netlify-cms`,
    {
      resolve:
        `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/blog`,
        name: `markdown-pages`,
        },
    },
    `gatsby-transformer-remark`
  ]
}