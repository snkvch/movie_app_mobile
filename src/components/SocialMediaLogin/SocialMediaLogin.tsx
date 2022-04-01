import React from 'react';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';
import { Alert, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Google from '../../assets/google';
import { ScreenList, NavProp } from '../../utils/types/navigation';
import { FirebaseError } from '../../utils/types/authentication';
import WEB_CLIENT_ID from '../../utils/constants/webClientId';

import styles from './styles';

function SocialMediaLogin(): JSX.Element {
  const navigation = useNavigation<NavProp>();
  const navigateToMovies = () => {
    navigation.navigate(ScreenList.MoviesScreen);
  };

  GoogleSignin.configure({
    webClientId: WEB_CLIENT_ID,
  });

  const onGoogleButtonPress = async () => {
    try {
      const { idToken } = await GoogleSignin.signIn();
      const googleCredential = auth.GoogleAuthProvider.credential(idToken);
      const user = auth().signInWithCredential(googleCredential);
      if (await user) {
        navigateToMovies();
      }
    } catch (err) {
      const error = err as FirebaseError;
      Alert.alert(error.message);
    }
  };

  return (
    <TouchableOpacity style={styles.container} onPress={onGoogleButtonPress}>
      <Google />
    </TouchableOpacity>
  );
}

export default SocialMediaLogin;