import { StyleSheet, Dimensions } from 'react-native';
import colors from './colors';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingLeft: 10,
    paddingRight: 10,
    marginTop: 20,
  },
  formInput: {
    width: ((Dimensions.get('window').width - 20) / 2) - 10,
    marginBottom: 10,
    marginLeft: 5,
    marginRight: 5,
  },
  formLabel: {
    color: colors.white,
    fontSize: 16,
    fontWeight: '100',
    marginBottom: 7,
  },
  textbox: {
    color: colors.white,
    fontSize: 26,
    fontWeight: '100',
    borderBottomColor: colors.red,
    borderBottomWidth: 1,
    paddingBottom: 10,
    marginBottom: 16,
  },
  result: {
    width: Dimensions.get('window').width - 20,
    textAlign: 'center',
    fontWeight: '700',
    fontSize: 64,
    color: colors.gold,
  },
});
