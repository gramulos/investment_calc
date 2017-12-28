import { StyleSheet } from 'react-native';
import colors from './colors';

export default StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: colors.background,
    paddingTop: 20,
    paddingRight: 10,
    paddingLeft: 10,
  },
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  settingsIcon: {
    marginRight: 15,
    fontSize: 26,
    color: colors.white,
  },
});
