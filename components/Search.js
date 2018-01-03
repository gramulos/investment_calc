import React, { Component } from 'react';
import { View, TextInput, StyleSheet, Dimensions, TouchableHighlight } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import PropTypes from 'prop-types';
import { colors } from '../styles';

export default class Search extends Component {
  static propTypes = {
    value: PropTypes.string,
    onChangeValue: PropTypes.func,
    onSearch: PropTypes.func,
    keyboardType: PropTypes.string,
  };

  static defaultProps = {
    value: null,
    onChangeValue: () => null,
    onSearch: () => null,
    keyboardType: 'default',
    placeholder: 'Search',
  };

  render() {
    const {
      value,
      onChangeText,
      keyboardType,
      placeholder,
      onSearch,
    } = this.props;

    return (
      <View style={styles.container}>
        <View style={styles.wrapper}>
          <TextInput
            underlineColorAndroid='transparent'
            value={value}
            onChangeText={onChangeText}
            keyboardType={keyboardType}
            placeholder={placeholder}
            style={styles.input}
          />
        </View>
        <TouchableHighlight style={styles.btnWrapper} onPress={onSearch} underlayColor={'transparent'}>
          <View style={styles.searchBtn}>
            <Ionicons name='ios-search' style={styles.icon} />
          </View>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.titleBackground,
    flexDirection: 'row',
  },
  wrapper: {
    width: Dimensions.get('window').width,
    height: 45,
  },
  input: {
    color: colors.black,
    backgroundColor: colors.white,
    height: 45,
    lineHeight: 24,
    paddingLeft: 15,
    paddingRight: 100,
    paddingBottom: 3,
    fontSize: 16,
  },
  btnWrapper: {
    position: 'absolute',
    right: 0,
    top: 0,
  },
  searchBtn: {
    backgroundColor: '#013cbf',
    height: 45,
    width: 45,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    color: '#ffffff',
    fontSize: 20,
  },
});
