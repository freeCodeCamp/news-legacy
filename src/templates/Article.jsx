/* global graphql */
import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import differenceInMinutes from 'date-fns/difference_in_minutes';

const propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      html: PropTypes.string,
      fields: PropTypes.shape({
        slug: PropTypes.string
      }),
      frontmatter: PropTypes.shape({
        id: PropTypes.string,
        subTitle: PropTypes.string,
        title: PropTypes.string,
        author: PropTypes.string,
        authorTwitter: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
        date: PropTypes.date,
        tags: PropTypes.arrayOf(PropTypes.string)
      })
    })
  })
};

const TimeAfterPublish = ({ date }) => {
  const difference = differenceInMinutes(Date.now(), date);
  // TODO: Allow for days, weeks, months, years
  return difference < 60 ? (
    <span className='since-pub'>{difference}m</span>
  ) : (
    <span className='since-pub'>{Math.floor(difference / 60)}h</span>
  );
};

TimeAfterPublish.displayName = 'TimeAfterPublish';
TimeAfterPublish.propTypes = {
  date: PropTypes.date
};

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
