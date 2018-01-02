import React, { Component } from 'react';
import { View, ScrollView, Text } from 'react-native';
import { layoutStyles } from '../../styles';
import ItemType from '../../components/ItemType';
import crypto from '../../assets/CryptoCurrency1.png';
import stockMarket from '../../assets/StockMarket.png';

class ChooseItemType extends Component {
  constructor(props) {
    super(props);
    this.state = {
      types: [
        {
          title: 'Stock market',
          subtitle: `Apple, Google, Microsoft,${'\n'}Intel, etc.`,
          icon: stockMarket,
          onPress: () => this.props.navigation.navigate('SearchInMarket', { cryptoCurrency: false }),
        }, {
          title: 'Cryptocurrency',
          subtitle: `Bitcoin, Etherium, Litecoin,${'\n'}Dash, etc.`,
          icon: crypto,
          onPress: () => this.props.navigation.navigate('SearchInMarket', { cryptoCurrency: true }),
        }
      ]
    };
  }
  render() {
    return (
      <ScrollView style={layoutStyles.mainContainer}>
        <View style={layoutStyles.container}>
          <View style={layoutStyles.titleContainer}>
            <Text style={layoutStyles.title}>Choose what type of item{'\n'}you would like to add</Text>
          </View>
          {this.state.types.map(type => (
            <ItemType
              title={type.title}
              subtitle={type.subtitle}
              icon={type.icon}
              key={type.title}
              onPress={type.onPress.bind(this)}
            />))}
        </View>
      </ScrollView>
    );
  }
}

export default ChooseItemType;
