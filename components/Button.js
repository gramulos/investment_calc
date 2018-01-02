import React, { Component } from 'react';
import { Text, View, TouchableHighlight, StyleSheet, Dimensions } from 'react-native';
import PropTypes from 'prop-types';
import { LinearGradient } from 'expo';
import { colors } from '../styles';

export default class Button extends Component {
  static propTypes = {
    type: PropTypes.string,
    text: PropTypes.string,
    onPress: PropTypes.func,
    gradientColors: PropTypes.array,
  };

  static defaultProps = {
    type: '',
    text: null,
    onPress: () => null,
    gradientColors: ['#288fa4', '#00ffa1'],
  };

  render() {
    const { onPress, text, gradientColors, type } = this.props;
    const gradient = type.length === 0 ? gradientColors : getGradient(type);
    return (
      <TouchableHighlight onPress={onPress} underlayColor={'transparent'}>
        <View>
          <LinearGradient
            colors={gradient}
            start={[0, 0]}
            end={[1, 1]}
            style={styles.button}
          >
            <Text style={styles.buttonText}>{text}</Text>
          </LinearGradient>
        </View>
      </TouchableHighlight>
    );
  }
}

const getGradient = (type) => {
  switch (type) {
    case 'green':
      return ['#0bc27e', '#16c987'];
    case 'red':
      return ['#cb4646', '#e94164'];
    case 'blue':
      return ['#1070d7', '#0d79d9'];
    case 'yellow':
      return ['#d17337', '#f9e42c'];
    default:
      return ['#288fa4', '#00ffa1'];
  }
};

const styles = StyleSheet.create({
  button: {
    width: Dimensions.get('window').width - 20,
    alignItems: 'center',
    padding: 15,
    borderRadius: 3,
    marginLeft: 5,
    marginRight: 5,
    marginBottom: 20,
  },
  buttonText: {
    color: colors.white,
    backgroundColor: 'transparent',
    fontSize: 20,
    fontFamily: 'Roboto-300',
  },
});
