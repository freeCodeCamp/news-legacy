/* global graphql */
import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import unique from 'lodash/uniq';

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
          margin: '0 auto',
          maxWidth: 960,
          padding: '0px 1.0875rem 1.45rem',
          paddingTop: 0
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

function Layout(props) {
  const { children } = props;
  const { edges } = props.data.allMarkdownRemark;
  const keywords = unique(
    edges.reduce((accu, current) => [ ...accu, ...current.node.frontmatter.tags ], [])
  );
  return (
    <main>
      <TemplateWrapper children={children} keywords={keywords} />
    </main>
  );
}

Layout.displayName = 'Layout';
Layout.propTypes = layoutPropTypes;

export default Layout;

export const query = graphql`
query LayoutQuery {
  allMarkdownRemark(
    limit: 48
    sort: {fields: [frontmatter___date], order: DESC}
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
