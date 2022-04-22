import React, { useEffect } from 'react';
import { View } from 'react-native';

import { Header, SearchBar } from '../../components';
import MovieList from '../../components/MovieList/MovieList';
import { fetchMovies } from '../../redux/movies/actions';
import { useAppDispatch } from '../../redux/hooks';

import styles from './styles';

function MoviesScreen(): JSX.Element {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);

  return (
    <View style={styles.container}>
      <Header />
      <SearchBar />
      <MovieList />
    </View>
  );
}

export default MoviesScreen;
