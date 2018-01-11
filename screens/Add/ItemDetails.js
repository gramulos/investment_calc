import React, { Component } from 'react';
import { ScrollView, View, Text, Alert } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { NavigationActions } from 'react-navigation';
import * as Progress from 'react-native-progress';
import { ActionCreators } from '../../actions';
import { formStyles, layoutStyles } from '../../styles';
import Button from '../../components/Button';
import InputWithOptions from '../../components/InputWithOptions';
import * as types from '../../config/data';
import { Summary, Row } from '../../components/Summary';
import Input from '../../components/Input';
import { calc, getSellPriceByInterest } from '../../helpers/calc';

class ItemDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: '10',
      interest: '50',
      interestType: types.INTEREST_FIXED,
      commission: '0',
      commissionType: types.COMMISSION_NONE,
      isCryptoCurrency: this.props.navigation.state.params.isCryptoCurrency,
      cryptoCurrency: this.props.navigation.state.params.cryptoCurrency,
    };
  }
  componentWillReceiveProps({ itemRates }) {
    if (!this.state.initialized && itemRates) {
      const { isCryptoCurrency, cryptoCurrency, count, commission, commissionType, interest, interestType } = this.state;
      const buyPrice = isCryptoCurrency ? parseFloat(itemRates.last).toFixed(2) : itemRates[0].close.toFixed(2);
      const currency = isCryptoCurrency ? cryptoCurrency.quote_currency : 'USD';
      const sellPrice = getSellPriceByInterest(parseFloat(buyPrice), parseFloat(count), parseFloat(commission), commissionType, parseFloat(interest), interestType);
      this.setState({
        initialized: true,
        selector: 'buyPrice',
        buyPrice,
        currency,
        sellPrice,
      });
    }
  }
  onSave() {
    const { isCryptoCurrency, cryptoCurrency } = this.state;
    const props = Object.assign({}, this.state, isCryptoCurrency ? cryptoCurrency : this.props.searchResult);
    const newList = this.props.shares.add(props);

    this.props.setLocalItemList(newList).then(() =>
      Alert.alert(
        'New item added',
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
  render() {
    const {
      commissionType,
      interest,
      interestType,
      commission,
      sellPrice,
      count,
      investments,
      income,
      totalCommission,
      redLine,
      buyPrice, } = calc(this.state);
    const { searchResult, isLoadingDailyRates } = this.props;
    const { cryptoCurrency, isCryptoCurrency, currency } = this.state;

    if (isLoadingDailyRates) {
      return (
        <View style={layoutStyles.center}>
          <Progress.CircleSnail size={24} indeterminate thickness={1} duration={600} color='#0667d0' />
        </View>
      );
    }

    const title = isCryptoCurrency ? cryptoCurrency.name : searchResult.name;

    return (
      <ScrollView style={layoutStyles.mainContainer}>
        <View style={layoutStyles.container}>
          <View style={formStyles.newTitleContainer}>
            <Text style={formStyles.newTitle}>{title}</Text>
          </View>
          <Input
            label={`Buy (${currency})`}
            keyboardType='numeric'
            value={buyPrice}
            onChangeText={value => this.setState({ selector: 'buyPrice', buyPrice: value })}
          />
          <Input
            label='Count'
            keyboardType='numeric'
            value={count}
            onChangeText={value => this.setState({ selector: 'count', count: value })}
          />
          <Input
            isLast
            label={`Sell (${currency})`}
            keyboardType='numeric'
            value={sellPrice}
            onChangeText={value => this.setState({ selector: 'sellPrice', sellPrice: value })}
          />
          <InputWithOptions
            title='Interest'
            selectedValue={interestType}
            input={interest}
            options={types.INTERESTS}
            keyboardType='numeric'
            onChangeText={value => this.setState({ selector: 'interest', interest: value })}
            onSelect={value => this.setState({ selector: 'interestType', interestType: value })}
          />
          <InputWithOptions
            title='Comission for transaction'
            selectedValue={commissionType}
            input={commission}
            options={types.COMMISSIONS}
            keyboardType='numeric'
            disabled={this.state.commissionType === types.COMMISSION_NONE}
            onChangeText={value => this.setState({ selector: 'commission', commission: value === types.COMMISSION_NONE ? 0 : value })}
            onSelect={value => this.setState({ selector: 'commissionType', commissionType: value, commission: value === types.COMMISSION_NONE ? 0 : commission })}
          />
          <Summary title='Estimations'>
            <Row header='Investing' value={`${investments} ${currency}`} />
            <Row header='Income' value={`${income} ${currency}`} valueColor='#0bb35a' />
            <Row header='Comission' value={`${totalCommission} ${currency}`} valueColor='#fab86b' />
            <Row header='Red line sell price' value={`${redLine} ${currency}`} valueColor='#ff1430' />
          </Summary>
          <Button onPress={this.onSave.bind(this)} text='Save' type='blue' />
        </View>
      </ScrollView>
    );
  }
}

const mapDispatchToProps = (dispatch) => bindActionCreators(ActionCreators, dispatch);
const mapStateToProps = ({ stocks, local, crypto }, ownProps) => {
  const isCryptoCurrency = ownProps.navigation.state.params.isCryptoCurrency;
  return {
    shares: local.shares,
    isLoadingDailyRates: isCryptoCurrency ? crypto.isLoadingDailyRates : stocks.isLoadingDailyRates,
    searchResult: stocks.searchResult,
    itemRates: isCryptoCurrency ? crypto.itemRates : stocks.itemRates,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemDetails);
