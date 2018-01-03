import React, { Component } from 'react';
import { ScrollView, View, Text, TextInput, Alert } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { NavigationActions } from 'react-navigation';
import { ActionCreators } from '../../actions';
import { formStyles, layoutStyles } from '../../styles';
import Button from '../../components/Button';
import InputWithTypes from '../../components/InputWithTypes';

const inputs = [
  { name: 'buyPrice', title: 'Buy', type: 'numeric' },
  { name: 'count', title: 'Count', type: 'numeric' },
  { name: 'sellPrice', title: 'Sell', type: 'numeric' },
];

class ItemDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      buyPrice: 0,
      sellPrice: 0,
      count: 0,
      comission: 0,
      comissionFixed: 'COMISSION_FIXED',
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
      <View style={index === inputs.length - 1 ? [formStyles.newFormContainer, formStyles.newLastFormContainer] : formStyles.newFormContainer} key={`${input.name}_${index}`}>
        <Text style={formStyles.newFormLabel}>{input.title}</Text>
        <TextInput
          underlineColorAndroid='transparent'
          style={formStyles.newFormInput}
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
    const { comissionFixed, comission } = this.state;
    const { searchResult } = this.props;

    return (
      <ScrollView style={layoutStyles.mainContainer}>
        <View>
          <View style={layoutStyles.container}>
            <View style={formStyles.newTitleContainer}>
              <Text style={formStyles.newTitle}>{searchResult.name}</Text>
            </View>
            {this.renderInput()}
            <InputWithTypes
              title='Comission'
              selectedValue={comissionFixed}
              input={comission.toString()}
              onChangeText={value => this.setState({ comission: value })}
              onSelect={value => {
                console.log('#####Select#####', value);
                this.setState({ comissionFixed: value });
              }}
            />
            {/* <Switch value={comissionFixed} onChangeValue={() => this.setState({ comissionFixed: !comissionFixed })} /> */}
            <Button onPress={this.reset.bind(this)} text='Save' type='blue' />
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
