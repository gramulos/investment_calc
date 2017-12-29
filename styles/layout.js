import { StyleSheet } from 'react-native';
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
});
