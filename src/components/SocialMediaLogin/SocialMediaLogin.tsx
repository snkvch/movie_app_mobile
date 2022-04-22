import React from 'react';
import { TouchableOpacity } from 'react-native';
import { useDispatch } from 'react-redux';

import Google from '../../assets/google';
import { RequestOnGoogleSignIn } from '../../redux/user/actions';

import styles from './styles';

function SocialMediaLogin(): JSX.Element {
  const dispatch = useDispatch();

  const handleSignIn = () => {
    dispatch(RequestOnGoogleSignIn());
  };

  return (
    <TouchableOpacity style={styles.container} onPress={handleSignIn}>
      <Google />
    </TouchableOpacity>
  );
}

export default SocialMediaLogin;
