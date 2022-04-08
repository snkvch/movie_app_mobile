import React, { useState } from 'react';
import { View } from 'react-native';
import { Searchbar as RNSearchBar } from 'react-native-paper';
import { useAppDispatch } from '../../redux/hooks';
import { fetchMovies } from '../../redux/movies/actions';

import theme from '../../theme';
import styles from './styles';

function SearchBar(): JSX.Element {
  const [textInput, setTextInput] = useState<string>('');
  const dispatch = useAppDispatch();

  const searchFilter = () => {
    dispatch(fetchMovies(textInput));
  };
  const handlerChange = (text: string) => {
    setTextInput(text);
  };
  return (
    <RNSearchBar
      placeholder="Search..."
      onChangeText={handlerChange}
      onSubmitEditing={searchFilter}
      value={textInput}
      iconColor={theme.colors.WHITE}
      placeholderTextColor={theme.colors.WHITE}
      inputStyle={{ color: theme.colors.WHITE }}
      style={styles.searchBar}
      clearIcon="close"
    />
  );
}

export default SearchBar;
