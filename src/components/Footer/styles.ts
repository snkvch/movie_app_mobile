import { StyleSheet } from 'react-native';
import theme from '../../theme';

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    justifyContent: 'center',
  },
  footerText: {
    color: theme.colors.WHITE,
  },
  footerTextContainer: {
    flexDirection: 'row',
    bottom: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default styles;
