module.exports = {
  siteMetadata: {
    title: `Social Graph Project Website`,
    description: `Project from Social Graph course in DTU 2020`,
    author: `Adrien COCHARD`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-typescript`,
    `gatsby-plugin-material-ui`,
    `gatsby-transformer-typescript-css-modules`,
  ],
}
