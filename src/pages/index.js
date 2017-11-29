/* global graphql */
import React, { PureComponent } from 'react';
import Helmet from 'react-helmet';
import Tiles from '../components/Tiles.jsx';
import { indexPropTypes as propTypes } from '../propTypes';
import '../css/index-page.less';

class IndexPage extends PureComponent {
  constructor(props) {
    super(props);
    const { edges } = props.data.allMarkdownRemark;
    this.state = {
      allArticles: edges,
      articlesToRender: edges.slice(0, 8),
      buttonActive: true,
      increment: 8
    };
    this.loadMoreArticles = this.loadMoreArticles.bind(this);
    this.handleLoadClick = this.handleLoadClick.bind(this);
  }

  loadMoreArticles() {
    this.setState(prevState => {
      const { allArticles, increment, articlesToRender } = prevState;
      const incPlus8 = increment + 8;
      const additionalArticles = allArticles.slice(increment, incPlus8);
      return {
        articlesToRender: articlesToRender.concat(additionalArticles),
        increment: incPlus8,
        buttonActive: true
      };
    });
  }

  handleLoadClick(e) {
    e.preventDefault();
    this.setState(() => ({ buttonActive: false }));
    this.loadMoreArticles();
  }

  render() {
    const { allArticles, articlesToRender } = this.state;
    const showLoadMore = allArticles.length > articlesToRender.length;
    return (
      <div>
        <Helmet>
          <title>freeCodeCamp News | What do you like to know today?</title>
        </Helmet>
        <h2>Latest news...</h2>
        <div className='article-container'>
          <Tiles articles={articlesToRender} />
          <div className='load-wrapper'>
            <button
              className='load-more'
              disabled={!showLoadMore}
              onClick={this.handleLoadClick}
              >
              Load More
            </button>
          </div>
        </div>
      </div>
    );
  }
}

IndexPage.displayName = 'IndexPage';
IndexPage.propTypes = propTypes;

export default IndexPage;

export const query = graphql`
  query IndexPageQuery {
    allMarkdownRemark(
      filter: { fields: { slug: { ne: "/LICENSE/" } } }
      limit: 48
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          fields {
            slug
            viewCount
          }
          frontmatter {
            author
            coverSrc
            date
            id
            subTitle
            tags
            title
          }
          html
          excerpt(pruneLength: 250)
          timeToRead
        }
      }
    }
  }
`;
