import { ChangeEvent } from 'react';
import { TextInputProps as RNTextInputProps } from 'react-native';

export interface TextInputProps extends RNTextInputProps {
  label: string;
  value: string;
  icon: string;
  mode: string;
  onChangeText: (event: string | ChangeEvent<unknown>) => void;
  onBlur: (event: string | ChangeEvent<unknown>) => void;
}
