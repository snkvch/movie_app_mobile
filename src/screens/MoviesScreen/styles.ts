import { Dimensions, StyleSheet } from 'react-native';
import theme from '../../theme';

const { height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: theme.colors.GRAY, height },
});

export default styles;
