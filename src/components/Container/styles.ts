import { StyleSheet, Dimensions } from 'react-native';
import theme from '../../theme';

const { width } = Dimensions.get('window');
const aspectRatio = 2 / 6;
const height = width * aspectRatio;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: theme.colors.DARK_BLUE,
    overflow: 'scroll',
    height: 850,
  },
  inputFiled: {
    flex: 1,
    borderRadius: 80,
    borderTopLeftRadius: 0,
    backgroundColor: theme.colors.WHITE,
  },
  footerField: {
    backgroundColor: theme.colors.DARK_BLUE,
  },
  firstImage: {
    width,
    height,
    borderBottomLeftRadius: 80,
  },
  secondImage: {
    ...StyleSheet.absoluteFillObject,
    width,
    height,
    left: 15,
  },
});

export default styles;
