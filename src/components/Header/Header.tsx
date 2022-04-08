import React from 'react';
import { View, Alert } from 'react-native';
import { IconButton, Text } from 'react-native-paper';
import { firebase } from '@react-native-firebase/auth';

import { ScreenList, ScreenProps } from '../../utils/types/navigation';
import styles from './styles';

const TITLE = 'Your Movie App';
const ERROR = 'Something went wrong';

function Header({ navigation }: ScreenProps) {
  const navigateToWelcomeScreen = () => {
    navigation.navigate(ScreenList.WelcomeScreen);
  };
  const onErrorAlert = () => {
    Alert.alert(ERROR);
  };
  const handleSignOut = () => {
    firebase.auth().signOut().then(navigateToWelcomeScreen).catch(onErrorAlert);
  };

  return (
    <View style={styles.container}>
      <IconButton
        color="white"
        style={styles.icon}
        icon="arrow-collapse-left"
        onPress={handleSignOut}
      />
      <Text style={styles.text}>{TITLE}</Text>
    </View>
  );
}

export default Header;
