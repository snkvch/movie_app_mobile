import React from 'react';
import { TextInput as RNTextInput } from 'react-native-paper';

import { TextInputProps } from '../../utils/types/textInput';

import styles from './styles';
import theme from '../../theme';

function TextInput({ label, icon, onChangeText, onBlur }: TextInputProps) {
  const isSecure = label === 'Password' || label === 'Confirm password';
  return (
    <RNTextInput
      style={styles.textInput}
      mode="outlined"
      label={label}
      onChangeText={onChangeText}
      onBlur={onBlur}
      secureTextEntry={isSecure}
      autoCapitalize="none"
      activeOutlineColor={theme.colors.ORANGE}
      left={<RNTextInput.Icon name={icon} style={{ top: 5 }} />}
    />
  );
}

export default TextInput;
