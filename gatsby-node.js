const path = require('path');
const { createFilePath } = require('gatsby-source-filesystem');
const getViewCount = require('./utils/getViewCount');

exports.onCreateNode = async({ node, getNode, boundActionCreators }) => {
  const { createNodeField } = boundActionCreators;
  if (node.internal.type === 'MarkdownRemark') {
    const slug = createFilePath({ node, getNode });
    createNodeField({
      node,
      name: 'slug',
      value: slug
    });
  }
};

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators;
  return new Promise(resolve => {
    graphql(`
      {
        allMarkdownRemark {
          edges {
            node {
              fields {
                slug
              }
            }
          }
        }
      }
    `).then(result => {
      result.data.allMarkdownRemark.edges.slice(0,2).map(({ node }) => {
        createPage({
          path: node.fields.slug,
          component: path.resolve('./src/templates/Article.jsx'),
          context: {
            // Data passed to context is available in page queries as
            // GraphQL variables.
            slug: node.fields.slug
          }
        });
      });
      resolve();
    });
  });
};
