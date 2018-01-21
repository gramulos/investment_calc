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
    fontSize: 16,
    lineHeight: 24,
    color: '#2d2d2d',
    fontFamily: 'Roboto-600',
    marginBottom: 12,
  },
  subtitle: {
    fontSize: 12,
    lineHeight: 18,
    color: '#9a9a9a',
    fontFamily: 'Roboto-500',
  },
  listItem: {
    width: Dimensions.get('window').width - 20,
    height: 110,
    backgroundColor: colors.white,
    padding: 20,
    borderRadius: 3,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 1,
    marginBottom: 10,
  },
});
