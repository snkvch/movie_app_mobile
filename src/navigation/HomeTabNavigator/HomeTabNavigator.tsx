import React from 'react';
import { ColorValue, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { RouteProp, ParamListBase } from '@react-navigation/native';

import { MoviesScreen, WatchlistScreen } from '../../screens';
import theme from '../../theme';
import styles from './styles';

const Tab = createBottomTabNavigator();

const ROUTE_NAMES = {
  MOVIES: 'Movies',
  WATCHLIST: 'Watchlist',
};

const TAB_ICONS: Record<string, string> = {
  [ROUTE_NAMES.MOVIES]: 'movie-open',
  [ROUTE_NAMES.WATCHLIST]: 'heart',
};

const screenOptions = (
  route: RouteProp<ParamListBase, string>,
  color: number | ColorValue,
  size: number,
) => {
  let iconName!: string;

  switch (route.name) {
    case ROUTE_NAMES.MOVIES:
      iconName = TAB_ICONS[ROUTE_NAMES.MOVIES];
      break;
    case ROUTE_NAMES.WATCHLIST:
      iconName = TAB_ICONS[ROUTE_NAMES.WATCHLIST];
      break;
    default:
      break;
  }

  return (
    <View style={styles.iconView}>
      <Icon name={iconName} size={size} color={color} />
    </View>
  );
};

function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => screenOptions(route, color, size),
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: theme.colors.ORANGE,
        tabBarInactiveTintColor: theme.colors.WHITE,
        tabBarStyle: styles.tabBar,
      })}
    >
      <Tab.Screen name="Movies" component={MoviesScreen} />
      <Tab.Screen name="Watchlist" component={WatchlistScreen} />
    </Tab.Navigator>
  );
}

export default TabNavigator;
