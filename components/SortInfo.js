import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';

export default ({ items }) => (
  <View style={styles.container}>
    {items.map((item, index) => (
      <View style={index === items.length - 1 ? [styles.item, styles.lastItem] : styles.item} key={item.info}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.info}>{item.info}</Text>
      </View>
    ))}
  </View>
);

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get('window').width - 20,
    backgroundColor: '#ffffff',
    padding: 20,
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 20,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    borderRadius: 3,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 2,
  },
  item: {
    width: Dimensions.get('window').width - 60,
    borderBottomWidth: 1,
    borderBottomColor: '#e7e7e7',
    marginBottom: 15,
    paddingBottom: 15,
  },
  lastItem: {
    borderBottomWidth: 0,
    marginBottom: 0,
    paddingBottom: 0,
  },
  title: {
    fontFamily: 'Roboto-500',
    marginBottom: 10,
    fontSize: 16,
  },
  info: {
    fontFamily: 'Roboto-300',
    fontSize: 18,
  },
});
