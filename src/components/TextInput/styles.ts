import { Dimensions, StyleSheet } from 'react-native';

const { height, width } = Dimensions.get('window');
const actualDimensions = {
  height: height / 20,
  width: width / 1.2,
};

const styles = StyleSheet.create({
  textInput: {
    width: actualDimensions.width,
    height: actualDimensions.height,
    marginTop: '7%',
  },
  container: {
    flex: 1,
  },
});

export default styles;
