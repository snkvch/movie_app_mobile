import React from 'react';
import { Text, View } from 'react-native';

import CustomButton from '../CustomButton/CustomButton';
import SocialMediaLogin from '../SocialMediaLogin/SocialMediaLogin';
import { FooterProps } from '../../utils/types/footer';

import styles from './styles';

function Footer({ onPress, title, action }: FooterProps) {
  return (
    <>
      <SocialMediaLogin />
      <View style={styles.container}>
        <Text style={styles.footerText}>{title}</Text>
        <CustomButton text={action} mode="text" onPress={onPress} />
      </View>
    </>
  );
}

export default Footer;
