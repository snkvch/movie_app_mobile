import React from 'react';
import { TouchableOpacity } from 'react-native';

import Google from '../../assets/google';
import styles from './styles';

function SocialMediaLogin(): JSX.Element {
  return (
    <TouchableOpacity style={styles.container}>
      <Google />
    </TouchableOpacity>
  );
}

export default SocialMediaLogin;
