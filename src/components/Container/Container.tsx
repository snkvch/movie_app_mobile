import React from 'react';
import { View, Image } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import { ContainerProps } from '../../utils/types/container';
import image from '../../assets/pattern.jpg';
import styles from './styles';
import theme from '../../theme';

function Container({ children, footer }: ContainerProps) {
  return (
    <KeyboardAwareScrollView scrollEnabled={false}>
      <View style={styles.wrapper}>
        <View style={{ backgroundColor: theme.colors.WHITE }}>
          <Image source={image} style={styles.firstImage} />
        </View>

        <View style={{ flex: 1 }}>
          <Image source={image} style={styles.secondImage} />
          <View style={styles.inputFiled}>{children}</View>
        </View>

        <View style={styles.footerField}>{footer}</View>
      </View>
    </KeyboardAwareScrollView>
  );
}

export default Container;
