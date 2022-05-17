import React, { useEffect } from 'react';
import { FlatList, View } from 'react-native';
import { EmptyList, Header } from '../../components';
import MovieItem from '../../components/MovieItem/MovieItem';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { fetchWatchlist } from '../../redux/movies/actions';
import { watchlistSelector } from '../../redux/movies/selectors';

import styles from '../MoviesScreen/styles';

function WatchlistScreen() {
  const dispatch = useAppDispatch();
  const watchlist = useAppSelector(watchlistSelector);

  useEffect(() => {
    dispatch(fetchWatchlist());
  }, [dispatch]);

  return (
    <View style={styles.container}>
      <Header />
      <FlatList
        data={watchlist}
        keyExtractor={(item) => item.imdbID}
        renderItem={({ item }) => <MovieItem movie={item} />}
        ListEmptyComponent={EmptyList}
      />
    </View>
  );
}

export default WatchlistScreen;
