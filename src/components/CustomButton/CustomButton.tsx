import React from 'react';
import { Button } from 'react-native-paper';

import { ButtonProps } from '../../utils/types/button';
import theme from '../../theme';
import styles from './styles';

function CustomButton({ text, onPress, mode, btnColor }: ButtonProps) {
  const spacing = mode === 'contained' ? 5 : 0;
  const content = mode === 'contained' ? { height: '100%' } : null;

  let btnTextColor;
  if (mode === 'contained') {
    if (btnColor === 'orange') {
      btnTextColor = theme.colors.ORANGE;
    } else {
      btnTextColor = theme.colors.WHITE;
    }
  } else {
    btnTextColor = theme.colors.ORANGE;
  }

  return (
    <Button
      color={btnTextColor}
      mode={mode}
      style={styles.button}
      labelStyle={(styles.label, { letterSpacing: spacing })}
      contentStyle={content}
      onPress={onPress}
    >
      {text}
    </Button>
  );
}

export default CustomButton;
