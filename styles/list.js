import { StyleSheet, Dimensions } from 'react-native';
import colors from './colors';

export default StyleSheet.create({
  icon: {
    position: 'absolute',
    width: 70,
    height: 70,
    top: 0,
    right: 0,
  },
  title: {
    fontSize: 18,
    lineHeight: 22,
    fontWeight: '100',
    marginBottom: 12,
  },
  subtitle: {
    fontSize: 14,
    lineHeight: 18,
    color: colors.subtitle,
  },
  listItem: {
    width: Dimensions.get('window').width - 20,
    height: 110,
    backgroundColor: colors.white,
    marginBottom: 20,
    borderLeftWidth: 3,
    borderLeftColor: colors.blue,
    borderBottomWidth: 0,
    borderTopWidth: 0,
    padding: 20,
  },
});
