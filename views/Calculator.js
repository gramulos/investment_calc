import React, { Component } from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import CalcForm from '../components/CalcForm';
import { layoutStyles, topNavigationStyles } from '../styles';

export default class Calculator extends Component {
  static navigationOptions = ({ navigation }) =>
    Object.assign({}, {
      title: 'Calculator',
      headerRight: (
        <MaterialIcons
          name='settings'
          size={26}
          style={layoutStyles.settingsIcon}
          color='#fff'
          onPress={() => navigation.navigate('Settings')}
        />),
      }, topNavigationStyles);
  render() {
    return <CalcForm style={layoutStyles.container} />;
  }
}
