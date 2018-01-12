import React from 'react';
import FontAwesome from 'react-fontawesome';

import TimeAfterPublish from './TimeAfterPublish';
import { articlePropTypes as propTypes } from '../propTypes';

import './article-meta.less';

function Social({ twitter, facebook }) {
  const twit =
    twitter !== 'none' ? (
      <a href={twitter} title='Visit the author on twitter. '>
        <FontAwesome name={'twitter'} />
      </a>
    ) : null;
  const face =
    facebook !== 'none' ? (
      <a href={facebook} title='Visit the author on facebook. '>
        <FontAwesome name={'facebook'} />
      </a>
    ) : null;
  return twit || face ? (
    <span className='author-social'>
      {twit}
      {face}
    </span>
  ) : null;
}

Social.displayName = 'AuthorSocial';
Social.propTypes = {
  ...propTypes.data.frontmatter
};

function ArticleMeta(props) {
  const {
    author,
    authorFacebook,
    authorTwitter,
    date,
    showSocial,
    time,
    views
  } = props;
  return (
    <div className='author-block'>
      <span className='author-name'>
        <strong>
          {author}
          {showSocial ? (
            <Social facebook={authorFacebook} twitter={authorTwitter} />
          ) : null}
        </strong>
      </span>
      <span className='article-meta'>
        <TimeAfterPublish date={date} /> -{' '}
        <span title='Time to read'>{time} min</span>
        <span className='fire' title='views'>
          <FontAwesome name={'free-code-camp'} /> {views}
        </span>
      </span>
    </div>
  );
}

ArticleMeta.displayName = 'ArticleMeta';
ArticleMeta.propTypes = propTypes;

export default ArticleMeta;
