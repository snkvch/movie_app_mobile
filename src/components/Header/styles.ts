import { Platform, StyleSheet } from 'react-native';

import theme from '../../theme';

const styles = StyleSheet.create({
  container: {
    height: '11%',
    backgroundColor: theme.colors.GRAY,
    justifyContent: 'center',
  },
  icon: {
    justifyContent: 'center',
    top: Platform.OS === 'ios' ? 20 : 5,
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    alignSelf: 'center',
    bottom: Platform.OS === 'android' ? 30 : 0,
  },
});

export default styles;
