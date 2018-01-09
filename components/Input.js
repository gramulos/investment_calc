import React, { Component } from 'react';
import { View, Text, TextInput, StyleSheet, Dimensions } from 'react-native';

export default class Input extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(value) {
    this.props.onChangeText(value);
  }

  render() {
    const { value, keyboardType, isLast, label } = this.props;

    return (
      <View style={isLast ? [styles.formContainer, styles.formContainerLast] : styles.formContainer}>
        <Text style={styles.formLabel}>{label}</Text>
        <TextInput
          underlineColorAndroid='transparent'
          style={styles.formInput}
          keyboardType={keyboardType}
          placeholderTextColor='#909090'
          placeholder='0'
          value={value}
          onChangeText={this.handleChange}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  formContainer: {
    width: ((Dimensions.get('window').width - 20) / 3) - 6,
    marginBottom: 15,
    marginRight: 10,
  },
  formContainerLast: {
    marginRight: 0,
  },
  formInput: {
    color: '#2d2d2d',
    fontFamily: 'Roboto-500',
    borderRadius: 3,
    height: 45,
    lineHeight: 27,
    paddingLeft: 15,
    paddingRight: 15,
    paddingBottom: 3,
    fontSize: 18,
    backgroundColor: '#ffffff',
  },
  formLabel: {
    color: '#2d2d2d',
    fontSize: 14,
    lineHeight: 21,
    fontFamily: 'Roboto-500',
    marginBottom: 7,
  },
});
