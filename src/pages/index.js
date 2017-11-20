import React from 'react';
import Link from 'gatsby-link';
import format from 'date-fns/format';
import '../css/index-page.css';

const IndexPage = ({ data: { allMarkdownRemark: { edges: articles } } }) => {
  return (
    <div>
      <h2>Latest news...</h2>
      <div className='article-container'>
        <ul>
          {articles
            .map(article => {
              const {
                excerpt,
                timeToRead,
                fields: { slug },
                frontmatter: { title, author, date, coverSrc }
              } = article.node;
              return (
                <li key={slug} title={title}>
                  <Link className='tile' to={slug}>
                    <div>
                      <h4>{title}</h4>
                      <p className='article-meta'>
                        By {author} -{' '}
                        <span>
                          Published: {format(new Date(date), 'MM-DD-YYYY')} -{' '}
                          {timeToRead} min read
                        </span>
                      </p>
                      <p>{excerpt}</p>
                    </div>
                    <div className='img-wrapper'>
                      <img alt='' src={coverSrc} />
                    </div>
                  </Link>
                  <hr />
                </li>
              );
            })}
        </ul>
      </div>
    </div>
  );
};

export const query = graphql`
  query IndexQuery {
    allMarkdownRemark(sort:{ fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          excerpt
          timeToRead
          frontmatter {
            title
            author
            date
            coverSrc
          }
          fields {
            slug
          }
        }
      }
    }
  }
`;

export default IndexPage;
