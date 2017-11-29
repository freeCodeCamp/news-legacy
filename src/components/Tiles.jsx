import React from 'react';
import Link from 'gatsby-link';

import ArticleMeta from '../components/ArticleMeta.jsx';
import placeHolder from '../../static/placeholder.png';
import { TilesPropTypes as propTypes } from '../propTypes';

import './tiles.less';

function Tiles({ articles }) {
  return (
    <ul>
      {articles.map(article => {
        const {
          excerpt,
          timeToRead,
          fields: { slug, viewCount },
          frontmatter: { title, author, date, coverSrc }
        } = article.node;
        return (
          <li key={slug} title={title}>
            <Link className='tile' to={slug}>
              <div className='center-wrap'>
                <div className='article-details'>
                  <h4>{title}</h4>
                  <ArticleMeta
                    author={author}
                    date={date}
                    showSocial={false}
                    time={timeToRead}
                    views={viewCount}
                  />
                  <div className='center-wrap direction-row'>
                    <p className='excerpt'>{excerpt}</p>
                  </div>
                </div>
                <div className='center-wrap img-wrap direction-row'>
                  <img
                    alt={`${title} cover image. `}
                    src={coverSrc || placeHolder}
                  />
                </div>
              </div>
            </Link>
            <hr />
          </li>
        );
      })}
    </ul>
  );
}

Tiles.displayName = 'Tiles';
Tiles.propTypes = propTypes;

export default Tiles;
