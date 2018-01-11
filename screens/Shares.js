import React, { Component } from 'react';
import { ScrollView, View } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ActionCreators } from '../actions';
import { listStyles, layoutStyles } from '../styles';
import ItemType from '../components/ItemType';

class Shares extends Component {
  componentDidMount() {
    this.props.getLocalItemList();
  }
  render() {
    return (
      <ScrollView style={layoutStyles.mainContainer}>
        <View style={[layoutStyles.container, listStyles.container]}>
          {this.props.shares && this.props.shares.list.map(share => (
            <ItemType
              title={`${share.name} (${share.ticker})`}
              subtitle={`Invested: ${(share.buyPrice * share.count).toFixed(2)} ${share.currency}\nShares count: ${share.count}`}
              icon='btc'
              key={share.ticker}
              onPress={() => this.props.navigation.navigate('Calculator', { ...share })}
            />))}
        </View>
      </ScrollView>
    );
  }
}

const mapDispatchToProps = (dispatch) => bindActionCreators(ActionCreators, dispatch);
const mapStateToProps = ({ local }) => ({
  shares: local.shares,
  isReadingStorage: local.isReadingStorage,
});

export default connect(mapStateToProps, mapDispatchToProps)(Shares);
