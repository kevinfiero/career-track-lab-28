import React from 'react';
import PropTypes from 'prop-types';

const SearchBar = ({ search, onChange }) => (
  <>
    <label htmlFor="search">Search Here:</label>
    <input 
      id="search" 
      type="text" 
      name="search" 
      value={search}
      onChange={onChange}>
    </input>
  </>
);

SearchBar.propTypes = {
  search: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default SearchBar;
