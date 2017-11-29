/* global graphql */
import React, { PureComponent } from 'react';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import ArticleMeta from '../components/ArticleMeta.jsx';
import { articlePropTypes as propTypes } from '../propTypes';
import './article.less';

import { trackResourceView } from '../redux';

function mapStateToProps() {
  return {};
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      trackResourceView
    },
    dispatch
  );
}

class Article extends PureComponent {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { id } = this.props.data.markdownRemark.frontmatter;
    const { trackResourceView } = this.props;
    trackResourceView(id);
  }
  componentDidUpdate() {
    const { id } = this.props.data.markdownRemark.frontmatter;
    const { trackResourceView } = this.props;
    trackResourceView(id);
  }
  render() {
    const {
      frontmatter,
      fields: { viewCount },
      html,
      timeToRead
    } = this.props.data.markdownRemark;
    const { author, authorTwitter, authorFacebook, date, title } = frontmatter;
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
