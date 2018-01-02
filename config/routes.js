import React from 'react';
import { Platform, StatusBar } from 'react-native';
import { MaterialIcons, Ionicons } from '@expo/vector-icons';
import { StackNavigator } from 'react-navigation';

import Calculator from '../screens/Calculator';
import Shares from '../screens/Shares';
import Add from '../screens/Add';
import Edit from '../screens/Edit';
import SearchInMarket from '../screens/Add/SearchInMarket';
import ChooseItemType from '../screens/Add/ChooseItemType';
import ItemDetails from '../screens/Add/ItemDetails';

import { layoutStyles } from '../styles';

const topNavigationBaseStyle = {
  headerTintColor: '#ffffff',
  headerStyle: {
    backgroundColor: '#0667d0',
    borderBottomWidth: 0,
    borderColor: '#0667d0',
    elevation: 0,
    shadowOpacity: 0,
  },
  labelStyle: {
    fontFamily: 'Roboto-300',
  },
};

export const Routes = StackNavigator({
  Calculator: {
    screen: Calculator,
    navigationOptions: ({ navigation }) => Object.assign({}, {
      title: navigation.state.params.ticker,
      headerRight: (
        <Ionicons
          name='ios-settings'
          style={layoutStyles.settingsIcon}
          onPress={() => navigation.navigate('Edit', { ...navigation.state.params })}
        />)
    }, topNavigationBaseStyle),
  },
  ChooseItemType: {
    screen: ChooseItemType,
    navigationOptions: Object.assign({}, {
      title: 'Type',
    }, topNavigationBaseStyle),
  },
  SearchInMarket: {
    screen: SearchInMarket,
    navigationOptions: Object.assign({}, {
      title: 'Search',
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
  ItemDetails: {
    screen: ItemDetails,
    navigationOptions: Object.assign({}, {
      title: 'Details',
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
          onPress={() => navigation.navigate('ChooseItemType')}
        />)
    }, topNavigationBaseStyle),
  }
}, {
  cardStyle: {
    paddingTop: Platform.OS === 'ios' ? 0 : StatusBar.currentHeight
  },
  initialRouteName: 'Shares',
});
