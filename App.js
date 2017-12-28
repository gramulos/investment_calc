import React from 'react';
import { View, StatusBar } from 'react-native';
import { Routes } from './config/routes';

export default () => (
  <View style={{ flex: 1 }}>
    <StatusBar barStyle='light-content' />
    <Routes />
  </View>
);
