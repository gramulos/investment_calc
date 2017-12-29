import React, { Component } from 'react';
import { ScrollView, View, Text, TextInput } from 'react-native';
import { formStyles, layoutStyles } from '../styles';
import { calc } from '../helpers/calc';

const inputs = [
  { name: 'buyPrice', title: 'Buy price' },
  { name: 'sellPrice', title: 'Sell price' },
  { name: 'count', title: 'Count' },
  { name: 'comission', title: 'Comission' }
];

export default class Calculator extends Component {
  constructor(props) {
    super(props);
    const { buyPrice, sellPrice, count, comission, title, comissionFixed, code, cryptoCurrency } = this.props.navigation.state.params;
    this.state = {
      buyPrice,
      sellPrice,
      count,
      comission,
      title,
      comissionFixed,
      cryptoCurrency,
      code
    };
  }
  componentDidMount() {
    this.getData();
  }
  getData() {
    this.setState({ loading: true });
    return fetch(`https://api.tiingo.com/tiingo/daily/${this.state.code.toLowerCase()}/prices`, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Token 529808af478752ce74c895da1bca2ba5d915529e',
      },
    })
    .then(response => response.json())
    .then((responseJson) => {
      console.log(responseJson);
      this.setState({ loading: false });
    });
  }
  calc() {
    const { sellPrice, count, buyPrice, comission } = this.state;
    return Math.round((sellPrice * count) - (buyPrice * count) - comission) / 100;
  }
  renderInput() {
    return inputs.map((input, index) => (
      <View style={formStyles.formInput} key={`${input.name}_${index}`}>
        <Text style={formStyles.formLabel}>{input.title}</Text>
        <TextInput
          underlineColorAndroid='transparent'
          style={formStyles.textbox}
          keyboardType='numeric'
          showDoneButton
          placeholder='0'
          value={this.state[input.name].toString()}
          onChangeText={value => {
            this.setState({ [input.name]: value.length === 0 ? 0 : parseFloat(value) });
          }}
        />
      </View>
    ));
  }
  render() {
    const { buyPrice, sellPrice, count, comission, comissionFixed, title } = this.state;
    return (
      <ScrollView style={layoutStyles.mainContainer}>
        <View style={layoutStyles.container}>
          <View style={formStyles.titleContainer}>
            <Text style={formStyles.title}>{title}</Text>
          </View>
          {this.renderInput()}
          <Text style={formStyles.result}>{calc({ buyPrice, sellPrice, count, comission, comissionFixed })}</Text>
        </View>
      </ScrollView>
    );
  }
}
