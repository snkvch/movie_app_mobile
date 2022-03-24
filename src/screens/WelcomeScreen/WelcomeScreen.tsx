import React from 'react';
import { Image, StyleSheet, View } from 'react-native';

import image from '../../assets/bg.jpg';
import styles from './styles';
import { CustomButton } from '../../components';
import { ScreenProps, ScreenList } from '../../utils/types/navigation';
import { AuthButtonProps } from '../../utils/types/customButton';

const AuthButtons: Array<AuthButtonProps> = [
  { text: 'Sign Up', route: ScreenList.SignUpScreen },
  { text: 'Login', route: ScreenList.LoginScreen },
];

function WelcomeScreen({ navigation }: ScreenProps): JSX.Element {
  return (
    <View style={styles.container}>
      <View style={{ ...StyleSheet.absoluteFillObject }}>
        <Image source={image} />
      </View>

      <View style={styles.buttonContainer}>
        {AuthButtons.map((button) => (
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
