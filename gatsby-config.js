
 module.exports = {
  siteMetadata: {
    title: "My Gatsby Site",
  },
  plugins: [
    'gatsby-transformer-remark',
    `gatsby-plugin-netlify-cms`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`, // Needed for dynamic images
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          `gatsby-remark-relative-images`,
          {
            resolve: `gatsby-remark-images`,
            options: {
              linkImagesToOriginal: false,
              withWebp: true,
              quality: 50
            }
          }
        ]
      }
    },
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