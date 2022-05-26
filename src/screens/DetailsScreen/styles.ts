import { StyleSheet } from 'react-native';
import theme from '../../theme';

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.GRAY,
    height: '100%',
    flex: 1,
  },
  poster: {
    height: 380,
    width: 250,
    borderRadius: 10,
    alignSelf: 'flex-end',
    right: 20,
    top: 10,
  },
  sectionTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 10,
  },
  labelsContainer: { width: 90 },
  labelItem: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginBottom: 30,
    backgroundColor: theme.colors.DARK_BLUE,
    borderRadius: 15,
    height: 25,
    alignItems: 'center',
  },
  labelText: { color: theme.colors.WHITE, fontWeight: 'bold' },
  descriptionContainer: {
    backgroundColor: theme.colors.WHITE,
    width: '90%',
    alignSelf: 'center',
    top: 50,
    borderRadius: 10,
    padding: 10,
    marginBottom: 40,
    paddingBottom: 80,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: theme.colors.ORANGE,
    bottom: 20,
  },
  plot: { textAlign: 'justify', marginBottom: 10 },
  additionalInfoContainer: {
    flexDirection: 'row',
    width: 200,
    marginBottom: 10,
  },
  additionalInfoText: {
    fontWeight: 'bold',
    color: theme.colors.ORANGE,
    marginRight: 5,
  },
  loadingText: {
    fontSize: 30,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  goBackButton: {
    marginBottom: 50,
    backgroundColor: theme.colors.DARK_BLUE,
  },
  likeButton: {
    backgroundColor: theme.colors.DARK_BLUE,
    alignSelf: 'center',
    bottom: 40,
  },
  backgroundImage: StyleSheet.absoluteFillObject,
});

export default styles;
