import React, { Component } from 'react';
import { ScrollView, View, Text, TextInput } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ActionCreators } from '../actions';
import { formStyles, layoutStyles } from '../styles';
import { calc } from '../helpers/calc';

const inputs = [
  { name: 'buyPrice', title: 'Buy price' },
  { name: 'sellPrice', title: 'Sell price' },
  { name: 'count', title: 'Count' },
  { name: 'comission', title: 'Comission' }
];

class Calculator extends Component {
  constructor(props) {
    super(props);
    const { buyPrice, sellPrice, count, comission, name, comissionFixed, ticker } = this.props.navigation.state.params;
    this.state = {
      buyPrice,
      sellPrice,
      count,
      comission,
      name,
      comissionFixed,
      ticker
    };
  }
  componentDidMount() {
    this.props.getItemRates(this.state.ticker.toLowerCase());
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
          onChangeText={value => this.setState({ [input.name]: value })}
        />
      </View>
    ));
  }
  render() {
    const { buyPrice, sellPrice, count, comission, comissionFixed, name } = this.state;
    return (
      <ScrollView style={layoutStyles.mainContainer}>
        <View style={layoutStyles.container}>
          <View style={formStyles.titleContainer}>
            <Text style={formStyles.title}>{name}</Text>
          </View>
          {this.renderInput()}
          <Text style={formStyles.result}>{calc({ buyPrice, sellPrice, count, comission, comissionFixed })}</Text>
        </View>
      </ScrollView>
    );
  }
}

const mapDispatchToProps = (dispatch) => bindActionCreators(ActionCreators, dispatch);
const mapStateToProps = ({ stocks }) => ({
  itemRates: stocks.itemRates,
  isLoadingDailyRates: stocks.isLoadingDailyRates,
});

export default connect(mapStateToProps, mapDispatchToProps)(Calculator);
