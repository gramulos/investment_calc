import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default class Settings extends Component {
  static navigationOptions = {
    title: 'Settings',
    headerTintColor: '#fff',
    headerStyle: { backgroundColor: '#27224d' },
  };
  render() {
    return (
      <View style={styles.container}>
        <Text>Settings 2</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#383365',
  },
});
