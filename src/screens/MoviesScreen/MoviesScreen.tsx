import React from 'react';
import { View, Dimensions } from 'react-native';

import { ScreenProps } from '../../utils/types/navigation';
import { Header, SearchBar } from '../../components';

import styles from './styles';

function MoviesScreen({ navigation }: ScreenProps) {
  return (
    <View style={styles.container}>
      <Header navigation={navigation} />
      <SearchBar />
    </View>
  );
}

export default MoviesScreen;
