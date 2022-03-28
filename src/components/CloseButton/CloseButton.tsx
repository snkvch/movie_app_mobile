import React from 'react';
import { IconButton } from 'react-native-paper';
import { CloseButtonProps } from '../../utils/types/button';

import theme from '../../theme';
import styles from './styles';

function CloseButton({ onPress }: CloseButtonProps) {
  return (
    <IconButton
      icon="close"
      onPress={onPress}
      color={theme.colors.ORANGE}
      style={styles.button}
      size={50}
      underlayColor="none"
    />
  );
}

export default CloseButton;
