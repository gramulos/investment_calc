import React, { Component } from 'react';
import { ScrollView, View, Text, TextInput } from 'react-native';
import formStyles from '../styles/form';

const inputs = [
  { name: 'buyPrice', title: 'Buy price' },
  { name: 'sellPrice', title: 'Sell price' },
  { name: 'count', title: 'Count' },
  { name: 'comission', title: 'Comission' }
];

export default class CalcForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      buyPrice: 1.1,
      sellPrice: 3,
      count: 50,
      comission: 50,
    };
  }
  calc() {
    const { sellPrice, count, buyPrice, comission } = this.state;
    return (sellPrice * count) - (buyPrice * count) - comission;
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
    return (
      <ScrollView style={this.props.style}>
        <View style={formStyles.container}>
          {this.renderInput()}
          <Text style={formStyles.result}>{this.calc()}</Text>
        </View>
      </ScrollView>
    );
  }
}
