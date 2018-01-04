import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';

export const Summary = ({ children, title }) => (
  <View style={styles.container}>
    {title && <Text style={styles.title}>{title}</Text>}
    {children}
  </View>
);

export const Row = ({ header, value, valueColor }) => (
  <View style={styles.row}>
    <Text style={styles.header}>{header}</Text>
    <Text style={[styles.value, { color: valueColor }]}>{value}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get('window').width,
    backgroundColor: '#ffffff',
    paddingTop: 15,
    paddingBottom: 15,
    marginBottom: 20,
  },
  title: {
    fontFamily: 'Roboto-600',
    fontSize: 14,
    lineHeight: 21,
    paddingBottom: 5,
    paddingLeft: 10,
    paddingRight: 10,
  },
  row: {
    width: Dimensions.get('window').width,
    paddingLeft: 10,
    paddingRight: 10,
    flexDirection: 'row',
  },
  header: {
    width: (Dimensions.get('window').width - 20) / 2,
    fontFamily: 'Roboto-500',
    fontSize: 14,
    lineHeight: 21,
    color: '#4a4a49',
  },
  value: {
    fontFamily: 'Roboto-600',
    fontSize: 14,
    lineHeight: 21,
    color: '#4a4a49',
  },
});
