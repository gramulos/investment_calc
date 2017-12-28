import { StyleSheet, Dimensions } from 'react-native';
import colors from './colors';

export default StyleSheet.create({
  icon: {
    position: 'absolute',
    width: 65,
    height: 80,
    top: 0,
    right: 0,
  },
  title: {
    fontSize: 18,
    fontWeight: '100',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 14,
    color: colors.subtitle,
  },
  listItem: {
    width: Dimensions.get('window').width - 20,
    height: 120,
    backgroundColor: colors.white,
    marginBottom: 20,
    borderLeftWidth: 3,
    borderLeftColor: colors.blue,
    padding: 20,
  },
});
