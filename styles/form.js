import { StyleSheet, Dimensions } from 'react-native';
import colors from './colors';

export default StyleSheet.create({
  formInput: {
    width: ((Dimensions.get('window').width - 20) / 2) - 10,
    marginBottom: 10,
    marginLeft: 5,
    marginRight: 5,
  },
  formInputLong: {
    width: Dimensions.get('window').width - 30,
  },
  formLabel: {
    color: '#2d2d2d',
    fontSize: 16,
    fontFamily: 'Roboto-300',
    marginBottom: 7,
  },
  textbox: {
    color: '#2d2d2d',
    fontFamily: 'Roboto-300',
    borderRadius: 3,
    height: 45,
    lineHeight: 24,
    paddingLeft: 15,
    paddingRight: 15,
    paddingBottom: 3,
    fontSize: 16,
    marginBottom: 20,
    backgroundColor: '#ffffff',
  },
  result: {
    width: Dimensions.get('window').width - 30,
    textAlign: 'center',
    fontFamily: 'Roboto-900',
    fontSize: 64,
    color: colors.gold,
  },
  title: {
    fontFamily: 'Roboto-300',
    fontSize: 20,
    color: '#2d2d2d',
  },
  titleContainer: {
    width: Dimensions.get('window').width - 30,
    marginLeft: 5,
    marginRight: 5,
    marginBottom: 20,
    marginTop: 20,
  },
});
