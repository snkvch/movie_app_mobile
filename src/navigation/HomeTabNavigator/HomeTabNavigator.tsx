/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import { View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

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

function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          const iconName = focused
            ? TAB_ICONS[route.name]
            : `${TAB_ICONS[route.name]}-outline`;
          return (
            <View style={styles.iconView}>
              <Icon name={iconName} size={size} color={color} />
            </View>
          );
        },
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
