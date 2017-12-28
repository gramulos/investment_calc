import React, { Component } from 'react';
import { ScrollView, View, TouchableHighlight, Text, Image } from 'react-native';
import { shares } from '../config/data';
import { listStyles, layoutStyles } from '../styles';
import imgCrypto from '../assets/cryptoCurrency.png';
import imgUsual from '../assets/usualCurrency.png';

export default class Shares extends Component {
  onLearnMore = (share) => {
    this.props.navigation.navigate('Home', { ...share });
  }
  renderItems() {
    return shares.map((share) => {
      const icon = share.cryptoCurrency ? <Image source={imgCrypto} style={listStyles.icon} /> : <Image source={imgUsual} style={listStyles.icon} />;

      return (
        <TouchableHighlight key={share.id} style={listStyles.listItem} onPress={() => this.onLearnMore(share)} underlayColor='#ffffff'>
          <View>
            <Text style={listStyles.title}>{`${share.title} (${share.code})`}</Text>
            <Text style={listStyles.subtitle}>Invested: {Math.round(share.buyPrice * share.count * 100) / 100} EUR</Text>
            <Text style={listStyles.subtitle}>Shares count: {share.count}</Text>
            {icon}
          </View>
        </TouchableHighlight>
      );
    });
  }
  render() {
    return (
      <ScrollView style={layoutStyles.mainContainer}>
        <View style={layoutStyles.container}>
          {this.renderItems()}
        </View>
      </ScrollView>
    );
  }
}
