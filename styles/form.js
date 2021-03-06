import { StyleSheet, Dimensions } from 'react-native';
import colors from './colors';

export default StyleSheet.create({
  formInput: {
    width: ((Dimensions.get('window').width - 20) / 2) - 10,
    marginBottom: 10,
    marginLeft: 5,
    marginRight: 5,
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
    fontFamily: 'Roboto-600',
    fontSize: 16,
    color: '#2d2d2d',
    textAlign: 'center',
  },
  titleContainer: {
    width: Dimensions.get('window').width - 20,
    marginLeft: 5,
    marginRight: 5,
    marginBottom: 25,
    marginTop: 25,
  },
  newTitle: {
    fontFamily: 'Roboto-500',
    fontSize: 16,
    color: '#ffffff',
    textAlign: 'center',
  },
  newTitleContainer: {
    width: Dimensions.get('window').width,
    backgroundColor: '#2f92fe',
    marginBottom: 25,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  newFormContainer: {
    width: ((Dimensions.get('window').width - 20) / 3) - 6,
    marginBottom: 15,
    marginRight: 10,
  },
  newLastFormContainer: {
    marginRight: 0,
  },
  newFormInput: {
    color: '#2d2d2d',
    fontFamily: 'Roboto-500',
    borderRadius: 3,
    height: 45,
    lineHeight: 27,
    paddingLeft: 15,
    paddingRight: 15,
    paddingBottom: 3,
    fontSize: 18,
    backgroundColor: '#ffffff',
  },
  newFormLabel: {
    color: '#2d2d2d',
    fontSize: 14,
    lineHeight: 21,
    fontFamily: 'Roboto-500',
    marginBottom: 7,
  },
});
