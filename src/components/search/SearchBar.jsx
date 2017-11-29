import React from 'react';
import Navbar from 'react-bootstrap/lib/Navbar';
import FormControl from 'react-bootstrap/lib/FormControl';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';

import { SearchBarPropTypes as propTypes } from '../../propTypes';
import './search-bar.less';

function SearchBar(props) {
  const { handleChange, handleSubmit, value } = props;
  return (
    <div>
      <form id='searchForm' onSubmit={handleSubmit}>
        <Navbar.Form className='formContainer'>
          <ControlLabel htmlFor='searchInput' srOnly={true}>
            Search
          </ControlLabel>
          <FormControl
            className='input'
            id='searchInput'
            onChange={handleChange}
            placeholder='&#xf002; What would you like to know?'
            type='text'
            value={value}
          />
        </Navbar.Form>
      </form>
    </div>
  );
}

SearchBar.displayName = 'SearchBar';
SearchBar.propTypes = propTypes;

export default SearchBar;
