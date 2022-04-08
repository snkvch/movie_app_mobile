import React, { useEffect } from 'react';
import { View } from 'react-native';

import { ScreenProps } from '../../utils/types/navigation';
import { Header, SearchBar } from '../../components';
import MovieList from '../../components/MovieList/MovieList';
import { fetchMovies } from '../../redux/movies/actions';
import { useAppDispatch } from '../../redux/hooks';

import styles from './styles';

function MoviesScreen({ navigation }: ScreenProps): JSX.Element {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);

  return (
    <View style={styles.container}>
      <Header navigation={navigation} />
      <SearchBar />
      <MovieList />
    </View>
  );
}

export default MoviesScreen;
