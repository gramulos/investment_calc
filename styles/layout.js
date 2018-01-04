import { StyleSheet, Dimensions } from 'react-native';
import colors from './colors';

export default StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: colors.background,
  },
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  settingsIcon: {
    marginRight: 15,
    fontSize: 26,
    color: colors.white,
  },
  titleContainer: {
    width: Dimensions.get('window').width,
    marginTop: 30,
    marginBottom: 30,
  },
  title: {
    fontSize: 16,
    lineHeight: 24,
    textAlign: 'center',
    color: '#797979',
    fontFamily: 'Roboto-500',
  },
  subtitle: {
    fontSize: 14,
    lineHeight: 18,
    textAlign: 'center',
    color: '#797979',
    fontFamily: 'Roboto-500i',
  },
  center: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
});
