import React from 'react';
import { View, Text } from 'react-native';

import styles from './styles';

const TITLE = 'Sorry, movie was not found :(';

function EmptyList() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{TITLE}</Text>
    </View>
  );
}

export default EmptyList;
