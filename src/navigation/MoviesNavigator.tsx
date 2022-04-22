import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { DetailsScreen, MoviesScreen } from '../screens';
import { RootStackParamList, ScreenList } from '../utils/types/navigation';

const { Navigator, Screen } = createNativeStackNavigator<RootStackParamList>();

function MoviesNavigator() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name={ScreenList.MoviesScreen} component={MoviesScreen} />
      <Screen name={ScreenList.DetailsScreen} component={DetailsScreen} />
    </Navigator>
  );
}

export default MoviesNavigator;
