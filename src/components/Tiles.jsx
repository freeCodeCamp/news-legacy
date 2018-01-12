import React from 'react';
import Link from 'gatsby-link';

import ArticleMeta from '../components/ArticleMeta.jsx';
import placeHolder from '../../static/placeholder.png';
import { TilesPropTypes as propTypes } from '../propTypes';

import './tiles.less';

function Tiles({ articles }) {
  return (
    <div>
      {articles.map(article => {
        const {
          timeToRead,
          fields: { slug, viewCount },
          frontmatter: { title, author, date, coverSrc }
        } = article.node;
        return (
          <div key={slug} title={title}>
            <Link className='tile' to={slug}>
              <div className='center-wrap'>
                <div className='article-details'>
                  <h2>{title}</h2>
                  <div className='center-wrap img-wrap direction-row'>
                    <img
                      alt={`${title} cover image. `}
                      src={coverSrc || placeHolder}
                    />
                  </div>
                  <ArticleMeta
                    author={author}
                    date={date}
                    showSocial={false}
                    time={timeToRead}
                    views={viewCount}
                  />
                </div>
              </div>
            </Link>
            <hr />
          </div>
        );
      })}
    </div>
  );
}

Tiles.displayName = 'Tiles';
Tiles.propTypes = propTypes;

export default Tiles;
