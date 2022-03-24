import React from 'react';
import { SafeAreaView, Text } from 'react-native';
import { Button } from 'react-native-paper';

import { ScreenProps } from '../../utils/types/navigation';

function SignUpScreen({ navigation }: ScreenProps) {
  return (
    <SafeAreaView>
      <Text>Sign Up Page</Text>
      <Button onPress={() => navigation.goBack()}>Go back</Button>
    </SafeAreaView>
  );
}

export default SignUpScreen;
