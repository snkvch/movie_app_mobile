import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { MovieCard } from '../../utils/types/movieItem';
import { NavProp, ScreenList } from '../../utils/types/navigation';

import styles from './styles';

function MovieItem({ movie }: MovieCard): JSX.Element {
  const { Title, Year, Poster, imdbID } = movie;
  const navigation = useNavigation<NavProp>();

  return (
    <TouchableOpacity
      onPress={
        () => navigation.navigate(ScreenList.DetailsScreen, { id: imdbID })
        // eslint-disable-next-line react/jsx-curly-newline
      }
    >
      <View style={styles.container}>
        <View style={styles.wrapper}>
          <Image style={styles.image} source={{ uri: Poster }} />
          <View style={styles.textContainer}>
            <Text style={styles.title}>{Title}</Text>
            <Text>{Year}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}

export default MovieItem;
