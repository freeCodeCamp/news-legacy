/* global graphql */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import unique from 'lodash/uniq';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { getStoredViews, updateOnlineStatus } from '../redux';
import { updateLastPage } from '../components/search/redux';

import Nav from '../components/layout/Nav/Nav.jsx';
import { layoutPropTypes } from '../propTypes';

import './index.css';

const TemplateWrapper = ({ children, keywords }) => {
  return (
    <div>
      <Helmet
        meta={[
          { name: 'description', content: 'Sample' },
          { name: 'keywords', content: keywords.join(', ') }
        ]}
      />
      <Nav />
      <div
        style={{
          padding: '1em'
        }}
        >
        {children()}
      </div>
    </div>
  );
};

TemplateWrapper.propTypes = {
  children: PropTypes.func,
  keywords: PropTypes.arrayOf(PropTypes.string)
};

function mapStateToProps() {
  return {};
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      getStoredViews,
      updateLastPage,
      updateOnlineStatus
    },
    dispatch
  );
}

class Layout extends PureComponent {
  constructor(props) {
    super(props);

    this.handleOnlineStatus = this.handleOnlineStatus.bind(this);
  }

  componentDidMount() {
    this.props.getStoredViews();
    window.addEventListener('online', this.handleOnlineStatus);
    window.addEventListener('offline', this.handleOnlineStatus);
  }

  componentWillReceiveProps(nextProps) {
    const { pathname: currentPath } = this.props.location;
    const { pathname: nextPath } = nextProps.location;
    if (nextPath !== currentPath) {
      this.props.updateLastPage(nextPath);
    }
  }

  componentWillUnmount() {
    window.removeEventListener('online', this.handleOnlineStatus);
    window.removeEventListener('offline', this.handleOnlineStatus);
  }

  handleOnlineStatus() {
    this.props.updateOnlineStatus(navigator.onLine);
  }

  render() {
    const { children } = this.props;
    const { edges } = this.props.data.allMarkdownRemark;
    const keywords = unique(
      edges.reduce(
        (accu, current) => [...accu, ...current.node.frontmatter.tags],
        []
      )
    );
    return (
      <main>
        <TemplateWrapper children={children} keywords={keywords} />
      </main>
    );
  }
}

Layout.displayName = 'Layout';
Layout.propTypes = layoutPropTypes;

export default connect(mapStateToProps, mapDispatchToProps)(Layout);

export const query = graphql`
  query LayoutQuery {
    allMarkdownRemark(
      limit: 48
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { fields: { slug: { ne: "/LICENSE/" } } }
    ) {
      edges {
        node {
          frontmatter {
            tags
          }
        }
      }
    }
  }
`;
