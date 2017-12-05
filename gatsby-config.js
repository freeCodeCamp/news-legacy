module.exports = {
  siteMetadata: {
    title: 'freeCodeCamp News'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'jsPages',
        path: `${__dirname}/src/pages`
      }
    },
    // {
    //   resolve: 'gatsby-source-filesystem',
    //   options: {
    //     name: 'audio',
    //     path: `${__dirname}/src/resource/audio`
    //   }
    // },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'text',
        path: `${__dirname}/src/resource/text`
      }
    },
    // {
    //   resolve: 'gatsby-source-filesystem',
    //   options: {
    //     name: 'video',
    //     path: `${__dirname}/src/resource/video`
    //   }
    // },
    {
      resolve: 'gatsby-transformer-remark'
    },
    {
      resolve: 'gatsby-plugin-less'
    },
    {
      resolve: 'fcc-no-sourcemaps'
    }
  ]
};
