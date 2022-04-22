import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import AuthorizedNavigator from './Authorized/AuthorizedNavigator';
import UnauthorizedNavigator from './UnauthorizedNavigator';
import useNavigator from './useNavigator';

function AppNavigator() {
  const { isAuthenticated } = useNavigator();
  return (
    <NavigationContainer>
      {isAuthenticated ? <AuthorizedNavigator /> : <UnauthorizedNavigator />}
    </NavigationContainer>
  );
}

export default AppNavigator;
