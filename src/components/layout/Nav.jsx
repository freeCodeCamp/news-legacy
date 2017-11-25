import React, { PureComponent } from 'react';
import Link from 'gatsby-link';

import { NavPropTypes as propTypes } from '../../propTypes';
import logo from '../../../static/FCC-logo-white.png';

class Nav extends PureComponent {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <nav>
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
    </nav>
    );
  }
}

Nav.displayName = 'Nav';
Nav.propTypes = propTypes;

export default Nav;
