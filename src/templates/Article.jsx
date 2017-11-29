/* global graphql */
import React from 'react';
import Helmet from 'react-helmet';
import TimeAfterPublish from '../components/TimeAfterPublish.jsx';
import { articlePropTypes as propTypes } from '../propTypes';
import FontAwesome from 'react-fontawesome';

import './article.less';

function Social({ twitter, facebook}) {
  const twit = twitter !== 'none' ?
    (
    <a href={twitter} title='Visit the author on twitter. '>
      <FontAwesome name={'twitter'} />
    </a>
    ) :
    null;
  const face = facebook !== 'none' ?
  (
    <a href={facebook} title='Visit the author on facebook. '>
      <FontAwesome name={'facebook'} />
    </a>
  ) :
  null;
  return twit || face ?
    (
      <span className='author-social'>
        { twit }
        { face }
      </span>
    ) :
    null;
}

Social.displayName = 'AuthorSocial';
Social.propTypes = {
  ...propTypes.data.frontmatter
};

const Author = ({
  author,
  authorTwitter,
  authorFacebook,
  date,
  timeToRead
}) => (
  <header className='author-block'>
    <div className='author-name'>
      <h4>
        {author}
        <Social facebook={authorFacebook} twitter={authorTwitter} />
      </h4>
    </div>
    <p><TimeAfterPublish date={date} /> - {timeToRead}min</p>
  </header>
);

Author.displayName = 'Author';
Author.propTypes = {
  ...propTypes.data.frontmatter
};

function Article({ data }) {
  const {
    frontmatter,
    html,
    timeToRead
  } = data.markdownRemark;
  const {
    author,
    authorTwitter,
    authorFacebook,
    date,
    title
  } = frontmatter;
  return (
    <article>
      <Helmet>
        <title>{title} | freeCodeCamp News</title>
      </Helmet>
      <Author
        author={author}
        authorFacebook={authorFacebook}
        authorTwitter={authorTwitter}
        date={date}
        timeToRead={timeToRead}
      />
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </article>
  );
}

Article.displayName = 'Article';
Article.propTypes = propTypes;

export const query = graphql`
  query StoryQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      timeToRead
      fields {
        slug
      }
      frontmatter {
        id
        title
        author
        date
        authorTwitter
        authorFacebook
      }
    }
  }
`;

export default Article;
