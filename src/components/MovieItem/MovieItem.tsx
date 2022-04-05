import React from 'react';
import { View, Text } from 'react-native';
import { IMovies } from '../../redux/movies/types';

function MovieItem(props: IMovies): JSX.Element {
  const { data } = props;
  return (
    <View>
      <Text>Movie Item</Text>
      <Text>{data.Title}</Text>
    </View>
  );
}

export default MovieItem;
