import React, { useEffect } from 'react';
import { View } from 'react-native';

import { Header, ActivityIndicator, MovieList } from '../../components';

import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { fetchWatchlist, removeWatchlist } from '../../redux/movies/actions';
import { watchlistSelector } from '../../redux/movies/selectors';

import styles from '../MoviesScreen/styles';

function WatchlistScreen() {
  const dispatch = useAppDispatch();
  const watchlist = useAppSelector(watchlistSelector);

  useEffect(() => {
    dispatch(fetchWatchlist());
    return () => {
      dispatch(removeWatchlist());
    };
  }, [dispatch]);

  return (
    <View style={styles.container}>
      {!Object.keys(watchlist).length ? (
        <ActivityIndicator />
      ) : (
        <>
          <Header />
          <MovieList data={watchlist} />
        </>
      )}
    </View>
  );
}

export default WatchlistScreen;
