import React, { Component } from 'react';
import { ScrollView, View, Text, TextInput, Alert } from 'react-native';
import { formStyles, layoutStyles, colors } from '../styles';
import Button from '../components/Button';
import Switch from '../components/Switch';
import Search from '../components/Search';

const inputs = [
  { name: 'buyPrice', title: 'Buy price', type: 'numeric', width: 1 },
  { name: 'sellPrice', title: 'Sell price', type: 'numeric', width: 1 },
  { name: 'count', title: 'Count', type: 'numeric', width: 1 },
  { name: 'comission', title: 'Comission', type: 'numeric', width: 1 }
];

export default class Settings extends Component {
  constructor(props) {
    super(props);
    const params = this.props.navigation.state.params;

    if (params) {
      const { buyPrice, sellPrice, count, comission, title, comissionFixed, cryptoCurrency } = params;
      this.state = {
        buyPrice,
        sellPrice,
        count,
        comission,
        title,
        comissionFixed,
        cryptoCurrency,
        isEditMode: true,
      };
    } else {
      this.state = {
        buyPrice: 0,
        sellPrice: 0,
        count: 0,
        comission: 0,
        title: 'Search stock by ticker',
        comissionFixed: true,
        cryptoCurrency: false,
      };
    }
  }
  onSave() {
    Alert.alert(
      'Success',
      'Changes saved',
      [{ text: 'OK', onPress: () => console.log('OK Pressed') }],
      { cancelable: false }
    );
  }
  onDelete() {
    Alert.alert(
      'Success',
      'Item deleted',
      [{ text: 'OK', onPress: () => console.log('OK Pressed') }],
      { cancelable: false }
    );
  }  
  renderInput() {
    return inputs.map((input, index) => (
      <View style={input.width === 1 ? formStyles.formInput : [formStyles.formInput, formStyles.formInputLong]} key={`${input.name}_${index}`}>
        <Text style={formStyles.formLabel}>{input.title}</Text>
        <TextInput
          underlineColorAndroid='transparent'
          style={formStyles.textbox}
          keyboardType={input.type}
          placeholderTextColor={colors.white}
          showDoneButton
          placeholder={input.type === 'numeric' ? '0' : 'Some text'}
          value={this.state[input.name].toString()}
          onChangeText={value => {
            if (input.type === 'numeric') {
              this.setState({ [input.name]: value.length === 0 ? 0 : parseFloat(value) });
            } else {
              this.setState({ [input.name]: value });
            }
          }}
        />
      </View>
    ));
  }
  render() {
    const { comissionFixed, title, isEditMode } = this.state;
    return (
      <ScrollView style={layoutStyles.mainContainer}>
        <View>
          {!isEditMode && <Search />}
          <View style={layoutStyles.container}>
            <View style={formStyles.titleContainer}>
              <Text style={formStyles.title}>{title}</Text>
            </View>
            {this.renderInput()}
            <Switch value={comissionFixed} onChangeValue={() => this.setState({ comissionFixed: !comissionFixed })} />
            <Button onPress={this.onSave.bind(this)} text='Save' type='green' />
            {isEditMode && <Button onPress={this.onDelete.bind(this)} text='Delete' type='red' />}
          </View>
        </View>
      </ScrollView>
    );
  }
}
