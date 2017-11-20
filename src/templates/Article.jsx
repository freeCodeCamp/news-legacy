/* global graphql */
import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      html: PropTypes.string.isRequired,
      fields: PropTypes.shape({
        slug: PropTypes.string
      }),
      frontmatter: PropTypes.shape({
        id: PropTypes.string,
        subTitle: PropTypes.string,
        title: PropTypes.string.isRequired,
        author: PropTypes.string,
        date: PropTypes.date,
        tags: PropTypes.arrayOf(PropTypes.string)
      })
    })
  })
};

function Article({ data }) {
  return <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />;
}

Article.displayName = 'Article';
Article.propTypes = propTypes;

export const query = graphql`
  query BlogPostQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      fields {
        slug
      }
      frontmatter {
        id
        title
        author
        date
      }
    }
  }
`;

export default Article;
