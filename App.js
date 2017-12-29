import React from 'react';
import { View, StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { Routes } from './config/routes';
import reducer from './reducers';

const middlwares = [thunk];
if (__DEV__) {
  middlwares.push(logger);
}

const configureStore = (initialState) => {
  const enhancer = compose(
    applyMiddleware(...middlwares),
  );

  return createStore(reducer, initialState, enhancer);
};

const store = configureStore({});

export default () => (
  <Provider store={store}>
    <View style={{ flex: 1 }}>
      <StatusBar barStyle='light-content' />
      <Routes />
    </View>
  </Provider>
);
