import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { LabelIconProps } from '../../utils/types/labelIcon';

import theme from '../../theme';

function LabelIcon({ name }: LabelIconProps) {
  return <Icon name={name} size={20} color={theme.colors.ORANGE} />;
}

export default LabelIcon;
