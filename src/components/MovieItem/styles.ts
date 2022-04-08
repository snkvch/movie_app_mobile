import { StyleSheet } from 'react-native';
import theme from '../../theme';

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.WHITE,
    padding: 10,
    borderRadius: 10,
    marginVertical: 8,
    marginHorizontal: 16,
    display: 'flex',
    flex: 1,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
  },
  wrapper: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
  },
  image: { width: 100, height: 150, borderRadius: 5 },
  textContainer: {
    width: 150,
    alignSelf: 'center',
  },
  title: {
    fontSize: 19,
    color: theme.colors.ORANGE,
    fontWeight: 'bold',
    paddingBottom: 10,
  },
});

export default styles;
