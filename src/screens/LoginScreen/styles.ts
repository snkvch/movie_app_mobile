import { StyleSheet } from 'react-native';
import theme from '../../theme';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    bottom: '13%',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 23,
    marginBottom: 15,
  },
  instruction: {
    color: theme.colors.GRAY,
  },
  formContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    alignItems: 'flex-start',
    bottom: 20,
  },
  error: {
    color: theme.colors.ORANGE,
  },
  footerText: {
    color: theme.colors.WHITE,
  },
  customButtonContainer: {
    top: 35,
  },
});
export default styles;
