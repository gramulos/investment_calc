import React, { Component } from 'react';
import { ScrollView, View, Text, TextInput, Alert } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { NavigationActions } from 'react-navigation';
import * as Progress from 'react-native-progress';
import { ActionCreators } from '../../actions';
import { formStyles, layoutStyles } from '../../styles';
import Button from '../../components/Button';
import InputWithOptions from '../../components/InputWithOptions';
import { COMISSIONS } from '../../config/data';
import { Summary, Row } from '../../components/Summary';
import { calc, roundResult, calcComission, getMinimalSellPrice } from '../../helpers/calc';

const inputs = [
  { name: 'buyPrice', title: 'Buy', type: 'numeric' },
  { name: 'count', title: 'Count', type: 'numeric' },
  { name: 'sellPrice', title: 'Sell', type: 'numeric' },
];

class ItemDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      buyPrice: '',
      sellPrice: '',
      count: '',
      interest: 1.2,
      minimalInterest: 1.1,
      comission: 0,
      comissionType: COMISSIONS[0].value,
      cryptoCurrency: this.props.navigation.state.params.cryptoCurrency,
    };
  }
  componentWillReceiveProps({ itemRates }) {
    if (!this.state.initialized) {
      this.setState({
        initialized: true,
        buyPrice: itemRates[0].close,
        count: 10,
        sellPrice: roundResult(itemRates[0].close * this.state.interest),
      });
    }
  }
  onSave() {
    const newList = this.props.shares.add({ ...this.state, ...this.props.searchResult });
    this.props.setLocalItemList(newList).then(() =>
      Alert.alert(
        'Success',
        'Changes saved',
        [{ text: 'OK',
          onPress: () => {
            const resetAction = NavigationActions.reset({
              index: 0,
              actions: [
                NavigationActions.navigate({ routeName: 'Shares' })
              ]
            });
            this.props.navigation.dispatch(resetAction);
          }
        }],
        { cancelable: false }
      )
    );
  }
  renderInput() {
    return inputs.map((input, index) => (
      <View style={index === inputs.length - 1 ? [formStyles.newFormContainer, formStyles.newLastFormContainer] : formStyles.newFormContainer} key={`${input.name}_${index}`}>
        <Text style={formStyles.newFormLabel}>{input.title}</Text>
        <TextInput
          underlineColorAndroid='transparent'
          style={formStyles.newFormInput}
          keyboardType={input.type}
          placeholderTextColor='#909090'
          placeholder='0'
          value={this.state[input.name].toString()}
          onChangeText={value => this.setState({ [input.name]: value })}
        />
      </View>
    ));
  }
  render() {
    const { comissionType, comission, buyPrice, count, minimalInterest } = this.state;
    const { searchResult, isLoadingDailyRates } = this.props;

    if (isLoadingDailyRates) {
      return (
        <View style={layoutStyles.center}>
          <Progress.CircleSnail size={24} indeterminate thickness={1} duration={600} color='#0667d0' />
        </View>
      );
    }

    const income = calc({ ...this.state });
    const investments = roundResult(buyPrice * count);
    const comissionAmount = calcComission(income, comission, comissionType);
    const redLine = getMinimalSellPrice({ ...this.state });
    const advicedSellPrice = roundResult(redLine * minimalInterest);

    return (
      <ScrollView style={layoutStyles.mainContainer}>
        <View style={layoutStyles.container}>
          <View style={formStyles.newTitleContainer}>
            <Text style={formStyles.newTitle}>{searchResult.name}</Text>
          </View>
          {this.renderInput()}
          <InputWithOptions
            title='Comission'
            selectedValue={comissionType}
            input={comission.toString()}
            options={COMISSIONS}
            keyboardType='numeric'
            onChangeText={value => {
              if (value === COMISSIONS[0].value) {
                this.setState({ comission: '0' });
              } else {
                this.setState({ comission: value });
              }
            }}
            disabled={this.state.comissionType !== COMISSIONS[0].value}
            onSelect={value => {
              if (value === COMISSIONS[0].value) {
                this.setState({ comissionType: value, comission: 0 });
              } else {
                this.setState({ comissionType: value });
              }
            }}
          />
          <Summary title='Estimations'>
            <Row header='Investing' value={`${investments} $`} />
            <Row header='Income' value={`${income} $`} />
            <Row header='Comission' value={`${comissionAmount} $`} />
            <Row header='Red line sell price' value={`${redLine} $`} valueColor='#ff1430' />
            <Row header='Adviced sell price' value={`${advicedSellPrice} $`} valueColor='#0bb35a' />
          </Summary>
          <Button onPress={this.onSave.bind(this)} text='Save' type='blue' />
        </View>
      </ScrollView>
    );
  }
}

const mapDispatchToProps = (dispatch) => bindActionCreators(ActionCreators, dispatch);
const mapStateToProps = ({ stocks, local }) => ({
  shares: local.shares,
  isLoadingDailyRates: stocks.isLoadingDailyRates,
  searchResult: stocks.searchResult,
  itemRates: stocks.itemRates,
});

export default connect(mapStateToProps, mapDispatchToProps)(ItemDetails);
