import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { formatMoney } from '../helpers/helpers';

export default ({ difference, current, currencySymbol }) => (
  <View style={styles.container}>
    <View style={styles.main}>
      <Text style={styles.mainNumber}>{formatMoney(current, currencySymbol)}</Text>
    </View>
    <View style={styles.main}>
      <Text style={[styles.number, difference > 0 ? styles.green : styles.red]}>{`${difference > 0 ? '+' : '-'}${formatMoney(difference, currencySymbol)}`}</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get('window').width,
    backgroundColor: '#ffffff',
    height: 100,
    marginBottom: 15,
    justifyContent: 'center',
  },
  main: {
    width: Dimensions.get('window').width,
    alignItems: 'center',
  },
  mainNumber: {
    fontFamily: 'Roboto-500',
    fontSize: 30,
    lineHeight: 35,
    marginBottom: 5,
  },
  number: {
    fontFamily: 'Roboto-300',
    fontSize: 16,
    lineHeight: 18,
  },
  green: {
    color: '#24cc97',
  },
  red: {
    color: '#ff4277',
  },
});
