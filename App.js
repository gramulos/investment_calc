import React, { Component } from 'react';
import { View, StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { Routes } from './config/routes';
import loadFonts from './config/fonts';
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

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fontLoaded: false,
    };
  }
  async componentDidMount() {
    await loadFonts();
    this.setState({ fontLoaded: true });
  }
  render() {
    return (
      <Provider store={store}>
        <View style={{ flex: 1 }}>
          <StatusBar barStyle='light-content' />
          {this.state.fontLoaded ? <Routes /> : null}
        </View>
      </Provider>
    );
  }
}
