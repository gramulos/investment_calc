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
    padding: 10,
  },
  wrapper: {
    width: Dimensions.get('window').width - 20,
    height: 30,
  },
  input: {
    color: colors.black,
    backgroundColor: colors.white,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    borderBottomRightRadius: 15,
    borderBottomLeftRadius: 15,
    height: 30,
    lineHeight: 24,
    paddingLeft: 15,
    paddingRight: 100,
    paddingBottom: 3,
    fontSize: 16,
  },
  btnWrapper: {
    position: 'absolute',
    right: 10,
    top: 9.5,
  },
  searchBtn: {
    backgroundColor: '#0867dd',
    height: 31,
    width: 80,
    borderRadius: 15.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    color: '#fff',
    fontSize: 20,
  },
});
