import React, { Component } from 'react';
import { View, ScrollView } from 'react-native';
import * as Progress from 'react-native-progress';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ActionCreators } from '../../actions';
import InlineSearch from '../../components/InlineSearch';
import List from '../../components/List';
import { layoutStyles } from '../../styles';

class SearchInMarket extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    this.props.getCryptoList();
  }
  selectItem(item) {
    this.props.getCryptoItemRates(item.ticker);
    this.props.navigation.navigate('ItemDetails', { isCryptoCurrency: this.props.navigation.state.params.cryptoCurrency, cryptoCurrency: item });
  }
  renderItems() {
    const { list } = this.props;
    const { searchText } = this.state;

    if (list) {
      const sortedList = searchText && searchText.trim().length > 0 ? list.filter(item => item.display_name.toLowerCase().indexOf(searchText.trim().toLowerCase()) !== -1) : list;
      return (
        <List
          items={sortedList}
          groupBy='name'
          title='display_name'
          onPress={this.selectItem.bind(this)}
        />
      );
    }
  }
  render() {
    const { searchText } = this.state;
    const { isLoadingList } = this.props;

    if (isLoadingList) {
      return (
        <View style={layoutStyles.center}>
          <Progress.CircleSnail size={24} indeterminate thickness={1} duration={600} color='#0667d0' />
        </View>
      );
    }

    return (
      <ScrollView style={layoutStyles.mainContainer}>
        <View style={layoutStyles.container}>
          <InlineSearch
            onChangeText={(value) => this.setState({ searchText: value })}
            value={searchText}
          />
          {this.renderItems()}
        </View>
      </ScrollView>
    );
  }
}

const mapDispatchToProps = (dispatch) => bindActionCreators(ActionCreators, dispatch);
const mapStateToProps = ({ crypto }) => ({
  list: crypto.list,
  isLoadingList: crypto.isLoadingList,
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchInMarket);
