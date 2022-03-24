import React from 'react';
import { Text } from 'react-native';
import { Button } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';

import { ScreenProps } from '../../utils/types/navigation';

function LoginScreen({ navigation }: ScreenProps) {
  return (
    <SafeAreaView>
      <Text>Login Page</Text>
      <Button onPress={() => navigation.goBack()}>Go back</Button>
    </SafeAreaView>
  );
}

export default LoginScreen;
