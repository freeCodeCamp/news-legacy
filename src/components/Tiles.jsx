import React from 'react';
import Link from 'gatsby-link';

import TimeAfterPublish from '../components/TimeAfterPublish.jsx';
import placeHolder from '../../static/placeholder.png';
import { TilesPropTypes as propTypes } from '../propTypes';

import './tiles.css';

function Tiles({ articles }) {
  return (
    <ul>
      {articles.map(article => {
        const {
          excerpt,
          timeToRead,
          fields: { slug },
          frontmatter: { title, author, date, coverSrc }
        } = article.node;
        return (
          <li key={slug} title={title}>
            <Link className='tile' to={slug}>
              <div className='center-wrap'>
                <div className='article-details'>
                  <h4>{title}</h4>
                  <p className='article-meta'>
                    By {author} - <TimeAfterPublish date={date} /> -{' '}
                    {timeToRead} min read
                  </p>
                  <div className='center-wrap excerpt-wrap'>
                    <p className='excerpt'>{excerpt}</p>
                  </div>
                </div>
                <div className='center-wrap img-wrap'>
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
