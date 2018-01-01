import React, { Component } from 'react';
import { ScrollView, View, Text, TextInput, Alert } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ActionCreators } from '../actions';
import { formStyles, layoutStyles } from '../styles';
import Button from '../components/Button';
import Switch from '../components/Switch';
import Search from '../components/Search';

const inputs = [
  { name: 'buyPrice', title: 'Buy price', type: 'numeric', width: 1 },
  { name: 'sellPrice', title: 'Sell price', type: 'numeric', width: 1 },
  { name: 'count', title: 'Count', type: 'numeric', width: 1 },
  { name: 'comission', title: 'Comission', type: 'numeric', width: 1 }
];

class EditDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      buyPrice: 0,
      sellPrice: 0,
      count: 0,
      comission: 0,
      name: 'Search stock by ticker',
      comissionFixed: true,
      cryptoCurrency: false,
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
  searchItem() {
    this.props.searchItemInStock(this.state.searchText.toLowerCase());
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
    const { comissionFixed, name, searchText } = this.state;
    const { searchResult } = this.props;
    const itemTitle = searchResult ? searchResult.name : name;

    return (
      <ScrollView style={layoutStyles.mainContainer}>
        <View>
          <Search
            onChangeText={(value) => this.setState({ searchText: value })}
            value={searchText}
            onSearch={this.searchItem.bind(this)}
          />
          <View style={layoutStyles.container}>
            <View style={formStyles.titleContainer}>
              <Text style={formStyles.title}>{itemTitle}</Text>
            </View>
            {this.renderInput()}
            <Switch value={comissionFixed} onChangeValue={() => this.setState({ comissionFixed: !comissionFixed })} />
            <Button onPress={this.onSave.bind(this)} text='Save' type='green' />
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
  isSearching: stocks.isSearching,
});

export default connect(mapStateToProps, mapDispatchToProps)(EditDetails);
