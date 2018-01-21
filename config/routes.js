import React from 'react';
import { Platform, StatusBar, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { StackNavigator } from 'react-navigation';

import Shares from '../screens/Shares';
import Add from '../screens/Add';
import Edit from '../screens/Edit';
import SearchInMarket from '../screens/Add/SearchInMarket';
import SearchInCrypto from '../screens/Add/SearchInCrypto';
import ChooseItemType from '../screens/Add/ChooseItemType';
import ItemDetails from '../screens/Add/ItemDetails';

const styles = StyleSheet.create({
  icon: {
    marginRight: 15,
    fontSize: 26,
    color: '#ffffff',
  }
});

const topNavigationBaseStyle = {
  headerTintColor: '#ffffff',
  headerStyle: {
    backgroundColor: '#0667d0',
    borderBottomWidth: 0,
    borderColor: '#0667d0',
    elevation: 0,
    shadowOpacity: 0,
  },
  headerTitleStyle: {
    fontFamily: 'Roboto-300',
    fontWeight: '300',
    position: 'absolute',
    justifyContent: 'center'
  },
};

export const Routes = StackNavigator({
  ChooseItemType: {
    screen: ChooseItemType,
    navigationOptions: ({
      title: 'Type',
    ...topNavigationBaseStyle }),
  },
  SearchInCrypto: {
    screen: SearchInCrypto,
    navigationOptions: ({
      title: 'Search',
    ...topNavigationBaseStyle }),
  },
  SearchInMarket: {
    screen: SearchInMarket,
    navigationOptions: ({
      title: 'Search',
    ...topNavigationBaseStyle }),
  },
  Add: {
    screen: Add,
    navigationOptions: ({
      title: 'Add new',
    ...topNavigationBaseStyle }),
  },
  Edit: {
    screen: Edit,
    navigationOptions: ({
      title: 'Edit details',
    ...topNavigationBaseStyle }),
  },
  ItemDetails: {
    screen: ItemDetails,
    navigationOptions: ({ navigation }) => ({
      title: 'Details',
      headerRight: navigation.state.params.isEditing ? (
        <MaterialIcons
          name='delete'
          style={styles.icon}
          onPress={navigation.state.params.onPress}
        />) : null,
    ...topNavigationBaseStyle }),
  },
  Shares: {
    screen: Shares,
    navigationOptions: ({ navigation }) => ({
      title: 'Wallet',
      headerRight: (
        <MaterialIcons
          name='add'
          style={styles.icon}
          onPress={() => navigation.navigate('ChooseItemType')}
        />),
      ...topNavigationBaseStyle }),
  }
}, {
  cardStyle: {
    paddingTop: Platform.OS === 'ios' ? 0 : StatusBar.currentHeight
  },
  initialRouteName: 'Shares',
});
