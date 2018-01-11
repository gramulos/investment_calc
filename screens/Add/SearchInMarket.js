import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ActionCreators } from '../../actions';
import InlineSearch from '../../components/InlineSearch';
import Button from '../../components/Button';
import SortInfo from '../../components/SortInfo';
import { layoutStyles } from '../../styles';

class SearchInMarket extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { searchText } = this.state;
    const { isSearching, searchResult } = this.props;

    return (
      <ScrollView style={layoutStyles.mainContainer}>
        <View style={layoutStyles.container}>
          <InlineSearch
            onChangeText={(value) => this.setState({ searchText: value })}
            value={searchText}
            onSearch={() => this.props.searchItemInStock(searchText.toLowerCase())}
            isLoading={isSearching}
          />
          {searchResult ? <SortInfo
            items={[
              {
                title: 'Name',
                info: searchResult.name,
              },
              {
                title: 'Marketplace ',
                info: searchResult.exchangeCode,
              },
              {
                title: 'Code',
                info: searchResult.ticker,
              },
            ]}
          /> :
            <View style={layoutStyles.titleContainer}>
              <Text style={layoutStyles.title}>Please, enter company stock symbol{'\n'}to make a search.</Text>
              <Text style={layoutStyles.subtitle}>Ex: GOOGL</Text>
            </View>}
          {searchResult && <Button
            onPress={() => {
              this.props.getItemRates(searchResult.ticker);
              this.props.navigation.navigate('ItemDetails', { isCryptoCurrency: this.props.navigation.state.params.cryptoCurrency });
            }}
            text='Next'
            type='blue'
          />}
        </View>
      </ScrollView>
    );
  }
}

const mapDispatchToProps = (dispatch) => bindActionCreators(ActionCreators, dispatch);
const mapStateToProps = ({ stocks }) => ({
  searchResult: stocks.searchResult,
  isSearching: stocks.isSearching,
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchInMarket);
