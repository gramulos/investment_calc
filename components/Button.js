import React, { Component } from 'react';
import { Text, View, TouchableHighlight, StyleSheet, Dimensions } from 'react-native';
import * as Progress from 'react-native-progress';
import PropTypes from 'prop-types';
import { LinearGradient } from 'expo';

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
      return ['#1070d7', '#0d79d9'];
  }
};

export default class Button extends Component {
  static propTypes = {
    type: PropTypes.string,
    text: PropTypes.string,
    onPress: PropTypes.func,
    gradientColors: PropTypes.array,
    isLoading: PropTypes.bool,
  };

  static defaultProps = {
    type: '',
    text: null,
    onPress: () => null,
    gradientColors: getGradient(),
    isLoading: false,
  };

  render() {
    const { onPress, text, gradientColors, type, isLoading } = this.props;
    const gradient = type.length === 0 ? gradientColors : getGradient(type);

    return (
      <TouchableHighlight
        style={styles.container}
        onPress={onPress}
        underlayColor={'transparent'}
        disabled={isLoading}
      >
        <View>
          <LinearGradient
            colors={gradient}
            start={[0, 0]}
            end={[1, 1]}
            style={styles.button}
          >
            {isLoading ? <Progress.CircleSnail size={24} indeterminate thickness={1} duration={600} color='#ffffff' /> : <Text style={styles.buttonText}>{text}</Text>}
          </LinearGradient>
        </View>
      </TouchableHighlight>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get('window').width - 20,
    marginLeft: 5,
    marginRight: 5,
    marginBottom: 20,
  },
  button: {
    width: Dimensions.get('window').width - 20,
    alignItems: 'center',
    padding: 15,
    borderRadius: 3,
  },
  buttonText: {
    color: '#ffffff',
    backgroundColor: 'transparent',
    fontSize: 20,
    fontFamily: 'Roboto-300',
  },
});
