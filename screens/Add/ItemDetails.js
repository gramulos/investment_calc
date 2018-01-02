import React, { Component } from 'react';
import { ScrollView, View, Text, TextInput, Alert } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { NavigationActions } from 'react-navigation';
import { ActionCreators } from '../../actions';
import { formStyles, layoutStyles } from '../../styles';
import Button from '../../components/Button';
import Switch from '../../components/Switch';

const inputs = [
  { name: 'buyPrice', title: 'Buy price', type: 'numeric', width: 1 },
  { name: 'sellPrice', title: 'Sell price', type: 'numeric', width: 1 },
  { name: 'count', title: 'Count', type: 'numeric', width: 1 },
  { name: 'comission', title: 'Comission', type: 'numeric', width: 1 }
];

class ItemDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      buyPrice: 0,
      sellPrice: 0,
      count: 0,
      comission: 0,
      comissionFixed: true,
      cryptoCurrency: this.props.navigation.state.params.cryptoCurrency,
    };
  }
  onSave() {
    const newList = this.props.shares.add({ ...this.state, ...this.props.searchResult });
    this.props.setLocalItemList(newList);
    Alert.alert(
      'Success',
      'Changes saved',
      [{ text: 'OK', onPress: () => console.log('OK Pressed') }],
      { cancelable: false }
    );
  }
  reset() {
    const resetAction = NavigationActions.reset({
      index: 0,
      actions: [
        NavigationActions.navigate({ routeName: 'Shares' })
      ]
    });
    this.props.navigation.dispatch(resetAction);
  }
  renderInput() {
    return inputs.map((input, index) => (
      <View style={input.width === 1 ? formStyles.formInput : [formStyles.formInput, formStyles.formInputLong]} key={`${input.name}_${index}`}>
        <Text style={formStyles.formLabel}>{input.title}</Text>
        <TextInput
          underlineColorAndroid='transparent'
          style={formStyles.textbox}
          keyboardType={input.type}
          placeholderTextColor='#a79cc4'
          showDoneButton
          placeholder={input.type === 'numeric' ? '0' : 'Some text'}
          value={this.state[input.name].toString()}
          onChangeText={value => this.setState({ [input.name]: value })}
        />
      </View>
    ));
  }
  render() {
    const { comissionFixed } = this.state;
    const { searchResult } = this.props;

    return (
      <ScrollView style={layoutStyles.mainContainer}>
        <View>
          <View style={layoutStyles.container}>
            <View style={formStyles.titleContainer}>
              <Text style={formStyles.title}>{searchResult.name}</Text>
            </View>
            {this.renderInput()}
            <Switch value={comissionFixed} onChangeValue={() => this.setState({ comissionFixed: !comissionFixed })} />
            <Button onPress={this.reset.bind(this)} text='Save' type='green' />
          </View>
        </View>
      </ScrollView>
    );
  }
}

const mapDispatchToProps = (dispatch) => bindActionCreators(ActionCreators, dispatch);
const mapStateToProps = ({ stocks, local }) => ({
  shares: local.shares,
  searchResult: stocks.searchResult,
});

export default connect(mapStateToProps, mapDispatchToProps)(ItemDetails);
