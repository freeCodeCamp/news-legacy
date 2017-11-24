/* global graphql */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';
import unique from 'lodash/uniq';

import { layoutPropTypes } from '../propTypes';
import logo from '../../static/FCC-logo-white.png';
import './index.css';

const Header = () => (
  <div
    style={{
      background: '#006400',
      marginBottom: '1.45rem'
    }}
    >
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem',
        paddingBottom: '0'
      }}
      >
      <Link
        style={{
          color: 'white',
          textDecoration: 'none'
        }}
        to='/'
        >
        <img
          alt='freeCodeCamp logo'
          className='logo'
          src={logo}
          style={{ width: '28%', marginBottom: '14px' }}
          title='freeCodeCamp'
        />
      </Link>
    </div>
  </div>
);

const TemplateWrapper = ({ children, keywords }) => {
  return (
    <div>
      <Helmet
        meta={[
          { name: 'description', content: 'Sample' },
          { name: 'keywords', content: keywords.join(', ') }
        ]}
        title='Gatsby Default Starter'
      />
      <Header />
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

class Layout extends PureComponent {
  constructor(props) {
    super(props);
    const { edges } = props.data.allMarkdownRemark;
    const uniqueTags = unique(
      edges.reduce(
        (accu, current) => [...accu, ...current.node.frontmatter.tags],
        []
      )
    );
    this.state = {
      pages: edges.map(page => page.node),
      keywords: uniqueTags
    };
  }

  render() {
    const { children } = this.props;
    const { keywords } = this.state;
    return (
      <main>
        <TemplateWrapper children={children} keywords={keywords} />
      </main>
    );
  }
}

Layout.displayName = 'Layout';
Layout.propTypes = layoutPropTypes;

export default Layout;

export const query = graphql`
fragment singleStory_frag on MarkdownRemark {
  fields {
    slug
  }
  frontmatter {
    title
    author
    subTitle
    tags
    date
  }
  html
}

fragment all_articles on RootQueryType{
  allMarkdownRemark {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            author
            subTitle
            tags
          }
          html
        }
      }
    }
}

fragment first_48_articles on RootQueryType{
  allMarkdownRemark(
    limit: 48
    sort: { fields: [frontmatter___date], order: DESC }
  ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            author
            subTitle
            tags
          }
          html
        }
      }
    }
}

query LayoutQuery {
  ...all_articles
}`;
