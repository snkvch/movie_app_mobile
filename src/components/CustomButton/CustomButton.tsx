import React from 'react';
import { Button } from 'react-native-paper';

import styles from './styles';
import { buttonProps } from '../../utils/types/customButton';
import theme from '../../theme';

function CustomButton({ text, onPress }: buttonProps) {
  return (
    <Button
      color={theme.colors.WHITE}
      mode="contained"
      style={styles.button}
      labelStyle={{ fontSize: 15, fontWeight: 'bold', letterSpacing: 5 }}
      contentStyle={{ height: '100%' }}
      onPress={onPress}
    >
      {text}
    </Button>
  );
}

export default CustomButton;
