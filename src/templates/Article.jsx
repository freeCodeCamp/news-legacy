/* global graphql */
import React from 'react';
import Helmet from 'react-helmet';
import TimeAfterPublish from '../components/TimeAfterPublish.jsx';
import { articlePropTypes as propTypes } from '../propTypes';

const Author = ({ author, authorTwitter, date }) => (
  <header className='author-block'>
    <div className='author-img'>
      <img src='https://placehold.it/100x100' />
    </div>
    <div className='author-name'>
      <h4>{author}</h4>
      <span className='author-social'>
        <a href={authorTwitter}>Twitter</a>
      </span>
    </div>
    <TimeAfterPublish date={date} />
  </header>
);

Author.displayName = 'Author';
Author.propTypes = {
  ...propTypes.data.frontmatter
};

function Article({ data }) {
  const {
    author,
    authorTwitter,
    date,
    title
  } = data.markdownRemark.frontmatter;
  return (
    <article>
      <Helmet>
        <title>{title} | freeCodeCamp News</title>
      </Helmet>
      <Author author={author} authorTwitter={authorTwitter} date={date} />
      <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
    </article>
  );
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
