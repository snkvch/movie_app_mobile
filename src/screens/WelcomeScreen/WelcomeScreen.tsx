import React from 'react';
import { Image, StyleSheet, View } from 'react-native';

import image from '../../assets/bg.jpg';
import styles from './styles';
import CustomButton from '../../components/CustomButton/CustomButton';
import { ScreenProps } from '../../utils/types/navigation';
import BUTTONS_TEXT from '../../utils/constants/buttonsText';

function WelcomeScreen({ navigation }: ScreenProps): JSX.Element {
  return (
    <View style={styles.container}>
      <View style={{ ...StyleSheet.absoluteFillObject }}>
        <Image source={image} />
      </View>

      <View style={styles.buttonContainer}>
        {BUTTONS_TEXT.map((button) => (
          <CustomButton
            text={button.text}
            key={button.text}
            onPress={() => navigation.navigate(button.route)}
          />
        ))}
      </View>
    </View>
  );
}

export default WelcomeScreen;
