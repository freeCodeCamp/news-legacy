const path = require('path');
const { Observable } = require('rx');

let limitCount = 100;
let skipCount = 0;
function runQuery(gql, query) {
  return new Promise((resolve, reject) => {
    gql(query)
      .then(result => {
        resolve(result);
      })
      .catch(err => {
        reject(err);
      });
  });
}

function processBatch(gql, limit, skip) {
  const query = `
{
  allMarkdownRemark(
    limit: ${limit}
    sort: { fields: [frontmatter___date], order: DESC }
    skip: ${skip}
  ) {
    pageInfo {
      hasNextPage
    }
    edges {
      node {
        fields {
          slug
        }
      }
    }
  }
}
`;
  return Observable.fromPromise(runQuery(gql, query)).flatMap(
    ({ data: { allMarkdownRemark: { pageInfo, edges } } }) => {
      return Observable.of({ edges, pageInfo });
    }
  );
}

function createPageHelper(gql, createPage, done) {
  processBatch(gql, limitCount, skipCount).subscribe(({ edges, pageInfo }) => {
    edges.forEach(nodeObj => {
      const { node } = nodeObj;
      createPage({
        path: node.fields.slug,
        component: path.resolve(__dirname, '../src/templates/Article.jsx'),
        context: {
          // Data passed to context is available in page queries as
          // GraphQL variables.
          slug: node.fields.slug
        }
      });
    });
    if (pageInfo.hasNextPage) {
      limitCount += 100;
      skipCount += 100;
      createPageHelper(gql, createPage, done);
    } else {
      done();
    }
  });
  return;
}

module.exports = createPageHelper;
