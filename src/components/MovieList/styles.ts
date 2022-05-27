import { StyleSheet, Platform } from 'react-native';

const styles = StyleSheet.create({
  contentContainerStyle: {
    paddingBottom: Platform.OS === 'ios' ? '50%' : '40%',
  },
});

export default styles;
