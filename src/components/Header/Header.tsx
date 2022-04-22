import React from 'react';
import { View } from 'react-native';
import { IconButton, Text } from 'react-native-paper';
import { useDispatch } from 'react-redux';
import { RequestLogout } from '../../redux/user/actions';

import styles from './styles';

const TITLE = 'Your Movie App';

function Header() {
  const dispatch = useDispatch();

  const handleSignOut = () => {
    dispatch(RequestLogout());
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
