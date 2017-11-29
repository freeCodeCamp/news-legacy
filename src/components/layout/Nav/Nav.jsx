import React, { Component } from 'react';
import Link from 'gatsby-link';
import Navbar from 'react-bootstrap/lib/Navbar';
import NavDropdown from 'react-bootstrap/lib/NavDropdown';
import NavItem from 'react-bootstrap/lib/NavItem';
import MenuItem from 'react-bootstrap/lib/MenuItem';
import Nav from 'react-bootstrap/lib/Nav';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { fetchSearchResults, updateSearchTerm } from '../../search/redux';
import SearchBar from '../../search/SearchBar.jsx';
import navLinks from './links.json';
import { NavPropTypes as propTypes, NavContextTypes } from '../../../propTypes';
import fCClogo from '../../../../static/FCC-logo-white.png';
import './nav.less';

function mapStateToProps(state) {
  return {
    searchTerm: state.search.searchTerm
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    fetchSearchResults,
    updateSearchTerm
  }, dispatch);
}

class NewsNav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isDropdownOpen: false
    };
    this.openDropdown = this.openDropdown.bind(this);
    this.closeDropdown = this.closeDropdown.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    e.persist();
    e.preventDefault();
    const { push } = this.context.router.history;
    this.props.updateSearchTerm(e.target.value);
    push('/search');
  }
  handleSubmit(e) {
    e.preventDefault();
    this.props.fetchSearchResults();
  }
  openDropdown() {
    this.setState(() => ({ isDropdownOpen: true }));
  }
  closeDropdown() {
    this.setState(() => ({ isDropdownOpen: false }));
  }

  renderLink(
    isNavItem,
    { isReact, isDropdown, content, link, links, target, rel }
  ) {
    const Component = isNavItem ? NavItem : MenuItem;
    const { isDropdownOpen } = this.state;
    const { openDropdown, closeDropdown } = this;
    if (isDropdown) {
      // adding a noop to NavDropdown to disable false warning
      // about controlled component
      return (
        <NavDropdown
          id={`nav-${content}-dropdown`}
          key={content}
          noCaret={true}
          onClick={openDropdown}
          onMouseEnter={openDropdown}
          onMouseLeave={closeDropdown}
          onToggle={isDropdownOpen ? closeDropdown : openDropdown}
          open={isDropdownOpen}
          title={content}
          >
          {links.map(this.renderLink.bind(this, false))}
        </NavDropdown>
      );
    }
    if (isReact) {
      return (
        <Link key={content} to={link}>
          <Component rel={rel || null} target={target || null}>
            {content}
          </Component>
        </Link>
      );
    }
    return (
      <Component
        href={link}
        key={content}
        rel={rel || null}
        target={target || null}
        >
        {content}
      </Component>
    );
  }

  render() {
    const { searchTerm } = this.props;
    return (
      <div>
        <Navbar className='nav-height' id='navbar' staticTop={true}>
          <Navbar.Header className='brand-header'>
            <Navbar.Toggle children={'Menu'} />
            <Link className='brand-logo-wrap' to='/'>
              <img
                alt='learn to code javascript at freeCodeCamp logo'
                className='img-responsive nav-logo'
                src={fCClogo}
              />
            </Link>
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav navbar={true} pullRight={true}>
              {navLinks.map(this.renderLink.bind(this, true))}
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <Navbar id='searchNav'>
          <div className='row'>
            <div className='col-xs-12'>
              <SearchBar
                handleChange={this.handleChange}
                handleSubmit={this.handleSubmit}
                value={searchTerm}
              />
            </div>
          </div>
        </Navbar>
      </div>
    );
  }
}

NewsNav.contextTypes = NavContextTypes;
NewsNav.displayName = 'Nav';
NewsNav.propTypes = propTypes;

export default connect(mapStateToProps, mapDispatchToProps)(NewsNav);
