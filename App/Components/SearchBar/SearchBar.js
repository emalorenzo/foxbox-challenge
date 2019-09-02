import React, { useState } from 'react';
import { SearchBar as SearchBarElements } from 'react-native-elements';
import PropTypes from 'prop-types';
import styles from './styles';

const SearchBar = ({ fetchDrinks, clearDrinks, loading }) => {
  const [search, setSearch] = useState('');
  const handleSearchChange = text => {
    setSearch(text);
    if (text.length >= 3) {
      fetchDrinks(text);
    }
  };
  return (
    <SearchBarElements
      platform="ios"
      placeholder="Search"
      showLoading={loading}
      onChangeText={handleSearchChange}
      onCancel={clearDrinks}
      value={search}
      lightTheme
      inputContainerStyle={styles.inputContainer}
      containerStyle={styles.container}
    />
  );
};

SearchBar.propTypes = {
  fetchDrinks: PropTypes.func.isRequired,
  clearDrinks: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
};

export default SearchBar;
