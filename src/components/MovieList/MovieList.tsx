import React from 'react';
import { View, FlatList } from 'react-native';

import MovieItem from '../MovieItem/MovieItem';
import EmptyList from '../EmptyList/EmptyList';
import getAllMovies from '../../redux/movies/selectors';
import { useAppSelector } from '../../redux/hooks';

import styles from './styles';

function MovieList(): JSX.Element {
  const moviesList = useAppSelector(getAllMovies);
  return (
    <View>
      <FlatList
        data={moviesList}
        contentContainerStyle={styles.contentContainerStyle}
        keyExtractor={(item) => item.imdbID}
        renderItem={({ item }) => <MovieItem movie={item} />}
        ListEmptyComponent={EmptyList}
      />
    </View>
  );
}

export default MovieList;
