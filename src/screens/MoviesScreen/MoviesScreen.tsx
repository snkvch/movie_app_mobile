import React from 'react';
import { Alert, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { IconButton } from 'react-native-paper';
import { firebase } from '@react-native-firebase/auth';

import { ScreenList, ScreenProps } from '../../utils/types/navigation';

function MoviesScreen({ navigation }: ScreenProps) {
  const handleSignOut = () => {
    firebase
      .auth()
      .signOut()
      .then(() => navigation.navigate(ScreenList.WelcomeScreen))
      .catch(() => Alert.alert('Something went wrong'));
  };

  return (
    <SafeAreaView>
      <IconButton icon="arrow-collapse-left" onPress={handleSignOut} />
      <Text>Welcome to Movies Page</Text>
      <Text>{firebase.auth().currentUser?.displayName}</Text>
    </SafeAreaView>
  );
}

export default MoviesScreen;
