import React, { useState } from 'react';
import { View } from 'react-native';
import { Searchbar as RNSearchBar } from 'react-native-paper';

import theme from '../../theme';
import styles from './styles';

function SearchBar(): JSX.Element {
  const [textInput, setTextInput] = useState('');
  const handlerChange = (e: string) => {
    setTextInput(e);
  };
  return (
    <View>
      <RNSearchBar
        placeholder="Search..."
        onChangeText={handlerChange}
        value={textInput}
        iconColor={theme.colors.WHITE}
        placeholderTextColor={theme.colors.WHITE}
        inputStyle={{ color: theme.colors.WHITE }}
        style={styles.searchBar}
        clearIcon="close"
      />
    </View>
  );
}

export default SearchBar;
