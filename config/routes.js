import React from 'react';
import { Platform, StatusBar } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { StackNavigator } from 'react-navigation';

import Calculator from '../screens/Calculator';
import EditDetails from '../screens/EditDetails';
import Shares from '../screens/Shares';

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
          onPress={() => navigation.navigate('EditDetails', { ...navigation.state.params })}
        />)
    }, topNavigationBaseStyle),
  },
  EditDetails: {
    screen: EditDetails,
    navigationOptions: ({ navigation }) => Object.assign({}, {
      title: navigation.state.params ? 'Edit details' : 'Add new',
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
          onPress={() => navigation.navigate('EditDetails')}
        />)
    }, topNavigationBaseStyle),
  }
}, {
  cardStyle: {
    paddingTop: Platform.OS === 'ios' ? 0 : StatusBar.currentHeight
  },
  initialRouteName: 'Shares',
});
