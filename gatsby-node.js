const { createFilePath } = require('gatsby-source-filesystem');

const createPageHelper = require('./utils/createPageHelper');

exports.onCreateNode = ({ node, getNode, boundActionCreators }) => {
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
  return new Promise(async resolve => {
    createPageHelper(graphql, createPage, resolve);
  });
};
