import React, { useEffect } from 'react';
import { Image, ScrollView, Text, View } from 'react-native';
import { IconButton } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';

import {
  fetchMovieDetails,
  removeMovieDetails,
} from '../../redux/details/actions';
import getMovieDetails from '../../redux/details/selectors';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import LabelIcon from '../../components/LabelIcon/LabelIcon';
import ActivityIndicator from '../../components/ActivityIndicator/ActivityIndicator';
import { DetailsScreenProps } from '../../utils/types/navigation';
import {
  addToWatchlist,
  removeFromWatchlist,
} from '../../redux/movies/actions';

import theme from '../../theme';
import styles from './styles';
import { watchlistSelector } from '../../redux/movies/selectors';

function DetailsScreen({ route, navigation }: DetailsScreenProps) {
  const imdbID = route.params.id;
  const dispatch = useAppDispatch();
  const detailsSelector = useAppSelector(getMovieDetails);
  const getMovieCheck = useAppSelector(watchlistSelector);

  useEffect(() => {
    dispatch(fetchMovieDetails(route.params.id));
    return () => {
      dispatch(removeMovieDetails());
    };
  }, [dispatch, route.params.id]);

  const navigateToBack = () => {
    navigation.goBack();
  };

  const {
    Title,
    imdbRating,
    imdbVotes,
    Runtime,
    Year,
    Plot,
    Director,
    Actors,
    Genre,
    Awards,
    Poster,
  } = detailsSelector;

  const labelIcons = [
    { name: 'star', movieDetail: imdbRating },
    { name: 'calendar', movieDetail: Year },
    { name: 'clock', movieDetail: Runtime },
    { name: 'heart', movieDetail: imdbVotes },
  ];
  const additionalInfo = [
    { name: 'Director:', movieDetail: Director },
    { name: 'Actors:', movieDetail: Actors },
    { name: 'Awards:', movieDetail: Awards },
    { name: 'Genre:', movieDetail: Genre },
  ];

  const displayLabelIcons = labelIcons.map((icon) => (
    <View style={styles.labelItem} key={icon.name}>
      <LabelIcon name={icon.name} />
      <Text style={styles.labelText}>{icon.movieDetail}</Text>
    </View>
  ));
  const displayAdditionalInfo = additionalInfo.map((info) => (
    <View style={styles.additionalInfoContainer} key={info.name}>
      <Text style={styles.additionalInfoText}>{info.name}</Text>
      <Text>{info.movieDetail}</Text>
    </View>
  ));

  const saveMovie = () => {
    dispatch(addToWatchlist(detailsSelector));
  };
  const removeMovie = () => {
    dispatch(removeFromWatchlist(detailsSelector));
  };

  return (
    <ScrollView>
      {!Object.keys(detailsSelector).length ? (
        <ActivityIndicator />
      ) : (
        <>
          <Image
            source={{ uri: Poster }}
            style={styles.backgroundImage}
            blurRadius={3}
          />
          <SafeAreaView>
            <View style={styles.sectionTop}>
              <View style={styles.labelsContainer}>
                <IconButton
                  icon="arrow-left"
                  color={theme.colors.WHITE}
                  onPress={navigateToBack}
                  style={styles.goBackButton}
                />

                {displayLabelIcons}
              </View>
              <Image source={{ uri: Poster }} style={styles.poster} />
            </View>

            <View style={styles.descriptionContainer}>
              {!getMovieCheck.some((movie) => movie.imdbID === imdbID) ? (
                <IconButton
                  style={styles.likeButton}
                  size={35}
                  icon="heart"
                  onPress={saveMovie}
                  color={theme.colors.WHITE}
                />
              ) : (
                <IconButton
                  style={styles.likeButton}
                  size={35}
                  icon="heart"
                  onPress={removeMovie}
                  color={theme.colors.ORANGE}
                />
              )}

              <Text style={styles.title}>{Title}</Text>
              <Text style={styles.plot}>{Plot}</Text>

              {displayAdditionalInfo}
            </View>
          </SafeAreaView>
        </>
      )}
    </ScrollView>
  );
}

export default DetailsScreen;
