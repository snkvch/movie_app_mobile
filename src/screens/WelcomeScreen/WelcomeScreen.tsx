import React, { useEffect } from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { firebase } from '@react-native-firebase/auth';
import { useNavigation } from '@react-navigation/native';

import { CustomButton } from '../../components';
import { ScreenList, Nav } from '../../utils/types/navigation';
import { AuthButtonProps } from '../../utils/types/button';

import image from '../../assets/bg.jpg';
import styles from './styles';

const AuthButtons: Array<AuthButtonProps> = [
  { text: 'Sign Up', route: ScreenList.SignUpScreen },
  { text: 'Login', route: ScreenList.LoginScreen },
];

function WelcomeScreen(): JSX.Element {
  const { navigate } = useNavigation<Nav>();

  const navigateToHomeTab = () => {
    navigate(ScreenList.HomeTabNavigator);
  };

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        navigateToHomeTab();
      }
    });
    return unsubscribe;
  }, []);

  return (
    <View style={styles.container}>
      <View style={{ ...StyleSheet.absoluteFillObject }}>
        <Image source={image} />
      </View>

      <View style={styles.buttonContainer}>
        {AuthButtons.map((button) => (
          <CustomButton
            mode="contained"
            text={button.text}
            key={button.text}
            onPress={() => navigate(button.route)}
          />
        ))}
      </View>
    </View>
  );
}

export default WelcomeScreen;
