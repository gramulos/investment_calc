import React from 'react';
import { Platform, StatusBar } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { StackNavigator } from 'react-navigation';

import Calculator from '../views/Calculator';
import Settings from '../views/Settings';
import Shares from '../views/Shares';

import { layoutStyles } from '../styles';

const topNavigationBaseStyle = {
  headerTintColor: '#ffffff',
  headerStyle: { backgroundColor: '#27224d', borderWidth: 0 },
};

export const Routes = StackNavigator({
  Home: {
    screen: Calculator,
    navigationOptions: ({ navigation }) => Object.assign({}, {
      title: navigation.state.params.code,
      headerRight: (
        <MaterialIcons
          name='settings'
          style={layoutStyles.settingsIcon}
          onPress={() => navigation.navigate('Settings')}
        />)
    }, topNavigationBaseStyle),
  },
  Settings: {
    screen: Settings,
    navigationOptions: Object.assign({}, {
      title: 'Settings',
    }, topNavigationBaseStyle),
  },
  Shares: {
    screen: Shares,
    navigationOptions: Object.assign({}, {
      title: 'Shares',
    }, topNavigationBaseStyle),
  }
}, {
  cardStyle: {
    paddingTop: Platform.OS === 'ios' ? 0 : StatusBar.currentHeight
  },
  initialRouteName: 'Shares',
});
