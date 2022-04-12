import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useEffect } from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import { IconButton } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';

import {
  fetchMovieDetails,
  removeMovieDetails,
} from '../../redux/details/actions';
import getMovieDetails from '../../redux/details/selectors';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import LabelIcon from '../../components/LabelIcon/LabelIcon';
import { RootStackParamList, ScreenList } from '../../utils/types/navigation';

import theme from '../../theme';
import styles from './styles';

type Props = NativeStackScreenProps<
  RootStackParamList,
  ScreenList.DetailsScreen
>;

function DetailsScreen({ route, navigation }: Props) {
  const dispatch = useAppDispatch();
  const detailsSelector = useAppSelector(getMovieDetails);

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

  return (
    <ScrollView>
      {Object.values(detailsSelector).length === 0 ? (
        <SafeAreaView>
          <Text style={styles.loadingText}>Loading...</Text>
        </SafeAreaView>
      ) : (
        <>
          <Image
            source={{ uri: Poster }}
            style={StyleSheet.absoluteFillObject}
            blurRadius={3}
          />
          <SafeAreaView>
            <View style={styles.sectionTop}>
              <View style={styles.labelsContainer}>
                <IconButton
                  icon="arrow-left"
                  color="white"
                  onPress={navigateToBack}
                  style={{
                    marginBottom: 50,
                    backgroundColor: theme.colors.DARK_BLUE,
                  }}
                />
                <View style={styles.labelItem}>
                  <LabelIcon name="star" />
                  <Text style={styles.labelText}>{imdbRating}</Text>
                </View>
                <View style={styles.labelItem}>
                  <LabelIcon name="calendar" />
                  <Text style={styles.labelText}>{Year}</Text>
                </View>
                <View style={styles.labelItem}>
                  <LabelIcon name="clock" />
                  <Text style={styles.labelText}>{Runtime}</Text>
                </View>
                <View style={styles.labelItem}>
                  <LabelIcon name="heart" />
                  <Text style={styles.labelText}>{imdbVotes}</Text>
                </View>
              </View>
              <Image source={{ uri: Poster }} style={styles.poster} />
            </View>
            <View style={styles.descriptionContainer}>
              <IconButton
                style={{
                  backgroundColor: theme.colors.DARK_BLUE,
                  alignSelf: 'center',
                  bottom: 40,
                }}
                size={35}
                icon="heart"
                color={theme.colors.WHITE}
              />
              <Text style={styles.title}>{Title}</Text>
              <Text style={styles.plot}>{Plot}</Text>
              <View style={styles.additionalInfoContainer}>
                <Text style={styles.additionalInfoText}>Director:</Text>
                <Text>{Director}</Text>
              </View>
              <View style={styles.additionalInfoContainer}>
                <Text style={styles.additionalInfoText}>Actors:</Text>
                <Text>{Actors}</Text>
              </View>
              <View style={styles.additionalInfoContainer}>
                <Text style={styles.additionalInfoText}>Awards:</Text>
                <Text>{Awards}</Text>
              </View>
              <View style={styles.additionalInfoContainer}>
                <Text style={styles.additionalInfoText}>Genre:</Text>
                <Text>{Genre}</Text>
              </View>
            </View>
          </SafeAreaView>
        </>
      )}
    </ScrollView>
  );
}

export default DetailsScreen;
