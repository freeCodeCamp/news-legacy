import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';

import logo from '../../static/FCC-logo-white.png';
import './index.css';

const propTypes = {
  children: PropTypes.func
};

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

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' }
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

TemplateWrapper.propTypes = propTypes;

export default TemplateWrapper;
