import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { DetailsScreen, WatchlistScreen } from '../screens';
import { RootStackParamList, ScreenList } from '../utils/types/navigation';

const { Navigator, Screen } = createNativeStackNavigator<RootStackParamList>();

function WatchlistNavigator() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name={ScreenList.WatchlistScreen} component={WatchlistScreen} />
      <Screen name={ScreenList.DetailsScreen} component={DetailsScreen} />
    </Navigator>
  );
}

export default WatchlistNavigator;
