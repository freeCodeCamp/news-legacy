/* global graphql */
import React, { PureComponent } from 'react';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import openSocket from 'socket.io-client';

import ArticleMeta from '../components/ArticleMeta.jsx';
import { articlePropTypes as propTypes } from '../propTypes';
import './article.less';

import {
  trackResourceView,
  getCurrentLiveViews,
  setCurrentLiveViews } from '../redux';

const socket = openSocket('https://freecodecamp-realtime.herokuapp.com');

function mapStateToProps(state) {
  const currentLiveViews = state.app.currentLiveViews;
  return { currentLiveViews };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      trackResourceView,
      getCurrentLiveViews,
      setCurrentLiveViews
    },
    dispatch
  );
}

class Article extends PureComponent {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { id, title } = this.props.data.markdownRemark.frontmatter;
    const { trackResourceView, getCurrentLiveViews, setCurrentLiveViews } = this.props;
    // trackResourceView(id);
    getCurrentLiveViews(title);
    socket.emit('addViewer', id);
    socket.on('addViewer', (newCount) => {
      setCurrentLiveViews(newCount);
    });
    socket.on('removeViewer', (newCount) => {
      setCurrentLiveViews(newCount);
    });
  }

  componentDidUpdate() {
    const { id } = this.props.data.markdownRemark.frontmatter;
    const { trackResourceView } = this.props;
    // trackResourceView(id);
  }

  componentWillUnmount() {
    const { id } = this.props.data.markdownRemark.frontmatter;
    socket.emit('removeViewer', id);
    socket.off('addViewer');
    socket.off('removeViewer');
  }

  render() {
    const {
      frontmatter,
      fields: { viewCount },
      html,
      timeToRead
    } = this.props.data.markdownRemark;
    const { author, authorTwitter, authorFacebook, date, title } = frontmatter;
    const { currentLiveViews = 0 } = this.props;

    return (
      <article>
        <Helmet>
          <title>{title} | freeCodeCamp News</title>
        </Helmet>
        <header>
          <ArticleMeta
            author={author}
            authorFacebook={authorFacebook}
            authorTwitter={authorTwitter}
            date={date}
            liveViews={currentLiveViews}
            showSocial={true}
            time={timeToRead}
            views={viewCount}
          />
        </header>
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </article>
    );
  }
}

Article.displayName = 'Article';
Article.propTypes = propTypes;

export default connect(mapStateToProps, mapDispatchToProps)(Article);

export const query = graphql`
  query StoryQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      timeToRead
      fields {
        slug
        viewCount
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
