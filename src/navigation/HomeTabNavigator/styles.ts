import { Platform, StyleSheet } from 'react-native';
import theme from '../../theme';

const styles = StyleSheet.create({
  iconView: {
    alignItems: 'center',
    justifyContent: 'center',
    top: Platform.OS === 'ios' ? 10 : 0,
  },
  tabBar: {
    position: 'absolute',
    height: '9%',
    backgroundColor: theme.colors.DARK_BLUE,
    borderRadius: 20,
    bottom: 17,
    left: 15,
    right: 15,
    alignSelf: 'center',
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
  },
});

export default styles;
