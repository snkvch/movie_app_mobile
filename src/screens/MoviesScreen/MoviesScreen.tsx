import React, { useEffect } from 'react';
import { View } from 'react-native';

import { ScreenProps } from '../../utils/types/navigation';
import { Header, SearchBar } from '../../components';

import { getMovie } from '../../redux/movies/actions';
import useAppDispatch from '../../redux/hooks';

import styles from './styles';

function MoviesScreen({ navigation }: ScreenProps): JSX.Element {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getMovie());
  }, [dispatch]);

  return (
    <View style={styles.container}>
      <Header navigation={navigation} />
      <SearchBar />
    </View>
  );
}

export default MoviesScreen;
