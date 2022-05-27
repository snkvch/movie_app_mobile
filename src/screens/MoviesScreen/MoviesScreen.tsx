import React, { useEffect } from 'react';
import { View } from 'react-native';

import { Header, SearchBar, MovieList } from '../../components';

import { fetchMovies } from '../../redux/movies/actions';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { getAllMovies } from '../../redux/movies/selectors';

import styles from './styles';

function MoviesScreen(): JSX.Element {
  const dispatch = useAppDispatch();
  const moviesList = useAppSelector(getAllMovies);

  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);

  return (
    <View style={styles.container}>
      <Header />
      <SearchBar />
      <MovieList data={moviesList} />
    </View>
  );
}

export default MoviesScreen;
