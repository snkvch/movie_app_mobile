import React from 'react';
import { View } from 'react-native';
import { ActivityIndicator as RNActivityIndicator } from 'react-native-paper';

import theme from '../../theme';
import styles from './styles';

function ActivityIndicator() {
  return (
    <View style={styles.container}>
      <RNActivityIndicator animating color={theme.colors.ORANGE} size={50} />
    </View>
  );
}

export default ActivityIndicator;
