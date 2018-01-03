import React, { Component } from 'react';
import { View, TextInput, StyleSheet, Dimensions, TouchableHighlight } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import * as Progress from 'react-native-progress';
import PropTypes from 'prop-types';

export default class InlineSearch extends Component {
  static propTypes = {
    value: PropTypes.string,
    onChangeValue: PropTypes.func,
    onSearch: PropTypes.func,
    keyboardType: PropTypes.string,
    placeholder: PropTypes.string,
    isLoading: PropTypes.bool,
  };

  static defaultProps = {
    value: null,
    onChangeValue: () => null,
    onSearch: () => null,
    keyboardType: 'default',
    placeholder: 'Search',
    isLoading: false,
  };

  render() {
    const {
      value,
      onChangeText,
      keyboardType,
      placeholder,
      onSearch,
      isLoading,
    } = this.props;

    return (
      <View style={styles.container}>
        <TextInput
          underlineColorAndroid='transparent'
          value={value}
          onChangeText={onChangeText}
          keyboardType={keyboardType}
          placeholder={placeholder}
          style={styles.input}
          onSubmitEditing={onSearch}
        />
        <TouchableHighlight style={isLoading ? [styles.searchBtn, styles.searchBtnDisabled] : styles.searchBtn} onPress={!isLoading ? onSearch : () => null} underlayColor={'#0667d0'}>
          <View>
            {isLoading ? <Progress.CircleSnail size={24} indeterminate thickness={1} duration={600} color='#0667d0' /> : <Ionicons name='ios-search' style={styles.icon} />}
          </View>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get('window').width,
    height: 65,
    padding: 10,
    flexDirection: 'row',
  },
  input: {
    width: Dimensions.get('window').width - 70,
    color: '#000000',
    backgroundColor: '#ffffff',
    height: 45,
    lineHeight: 24,
    paddingLeft: 15,
    paddingRight: 15,
    paddingBottom: 3,
    fontSize: 16,
    fontFamily: 'Roboto-300',
    borderTopLeftRadius: 3,
    borderBottomLeftRadius: 3,
  },
  searchBtn: {
    backgroundColor: '#0667d0',
    height: 45,
    width: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderTopRightRadius: 3,
    borderBottomRightRadius: 3,
  },
  searchBtnDisabled: {
    backgroundColor: '#ffffff',
  },
  icon: {
    color: '#ffffff',
    fontSize: 24,
  },
});
