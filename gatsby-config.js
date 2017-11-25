module.exports = {
  siteMetadata: {
    title: 'freeCodeCamp News'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'posts',
        path: `${__dirname}/src/pages`
      }
    },
    {
      resolve: 'gatsby-transformer-remark'
    },
    {
      resolve: 'fcc-no-sourcemaps'
    }
  ]
};
