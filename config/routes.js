import React from 'react';
import { Platform, StatusBar } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { StackNavigator } from 'react-navigation';

import Calculator from '../screens/Calculator';
import Shares from '../screens/Shares';
import Add from '../screens/Add';
import Edit from '../screens/Edit';

import { layoutStyles } from '../styles';

const topNavigationBaseStyle = {
  headerTintColor: '#ffffff',
  headerStyle: { backgroundColor: '#27224d', borderWidth: 0 },
};

export const Routes = StackNavigator({
  Calculator: {
    screen: Calculator,
    navigationOptions: ({ navigation }) => Object.assign({}, {
      title: navigation.state.params.ticker,
      headerRight: (
        <MaterialIcons
          name='settings'
          style={layoutStyles.settingsIcon}
          onPress={() => navigation.navigate('Edit', { ...navigation.state.params })}
        />)
    }, topNavigationBaseStyle),
  },
  Add: {
    screen: Add,
    navigationOptions: Object.assign({}, {
      title: 'Add new',
    }, topNavigationBaseStyle),
  },
  Edit: {
    screen: Edit,
    navigationOptions: Object.assign({}, {
      title: 'Edit details',
    }, topNavigationBaseStyle),
  },
  Shares: {
    screen: Shares,
    navigationOptions: ({ navigation }) => Object.assign({}, {
      title: 'Shares',
      headerRight: (
        <MaterialIcons
          name='add'
          style={layoutStyles.settingsIcon}
          onPress={() => navigation.navigate('Add')}
        />)
    }, topNavigationBaseStyle),
  }
}, {
  cardStyle: {
    paddingTop: Platform.OS === 'ios' ? 0 : StatusBar.currentHeight
  },
  initialRouteName: 'Shares',
});
