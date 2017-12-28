import React, { Component } from 'react';
import { ScrollView, View, Text } from 'react-native';
import { layoutStyles } from '../styles';

export default class Settings extends Component {
  render() {
    return (
      <ScrollView style={layoutStyles.mainContainer}>
        <View style={layoutStyles.container}>
          <Text>Settings</Text>
        </View>
      </ScrollView>
    );
  }
}
