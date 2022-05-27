import React from 'react';
import { View, FlatList } from 'react-native';

import { EmptyList, MovieItem } from '..';
import { MovieListProps } from '../../utils/types/movieList';

import styles from './styles';

function MovieList({ data }: MovieListProps): JSX.Element {
  return (
    <View>
      <FlatList
        data={data}
        contentContainerStyle={styles.contentContainerStyle}
        keyExtractor={(item) => item.imdbID}
        renderItem={({ item }) => <MovieItem movie={item} />}
        ListEmptyComponent={EmptyList}
      />
    </View>
  );
}

export default MovieList;
