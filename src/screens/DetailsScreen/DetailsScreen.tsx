import React, { useEffect, useState } from 'react';
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

import theme from '../../theme';
import styles from './styles';

function DetailsScreen({ route, navigation }: DetailsScreenProps) {
  const dispatch = useAppDispatch();
  const detailsSelector = useAppSelector(getMovieDetails);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(false);
    dispatch(fetchMovieDetails(route.params.id));
    return () => {
      dispatch(removeMovieDetails());
    };
  }, [dispatch, route.params.id, setIsLoading]);

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

  return (
    <ScrollView>
      {isLoading ? (
        <SafeAreaView>
          <ActivityIndicator isLoading={isLoading} />
        </SafeAreaView>
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
              <IconButton
                style={styles.likeButton}
                size={35}
                icon="heart"
                color={theme.colors.WHITE}
              />
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
