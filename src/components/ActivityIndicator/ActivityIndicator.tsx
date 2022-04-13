import React from 'react';
import { View } from 'react-native';
import { ActivityIndicator as RNActivityIndicator } from 'react-native-paper';

import { ActivityIndicatorProps } from '../../utils/types/activityIndicator';

import theme from '../../theme';
import styles from './styles';

function ActivityIndicator({ isLoading }: ActivityIndicatorProps) {
  return (
    <View style={styles.container}>
      <RNActivityIndicator
        animating={isLoading}
        color={theme.colors.ORANGE}
        size={50}
      />
    </View>
  );
}

export default ActivityIndicator;
