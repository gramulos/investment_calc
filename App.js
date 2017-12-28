import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import { Platform, StatusBar } from 'react-native';
import Calculator from './views/Calculator';
import Settings from './views/Settings';

const SimpleApp = StackNavigator({
  Home: { screen: Calculator },
  Settings: { screen: Settings },
}, {
  cardStyle: {
    paddingTop: Platform.OS === 'ios' ? 0 : StatusBar.currentHeight
  }
});

export default class App extends Component {
  render() {
    return <SimpleApp />;
  }
}
