import React, { Component } from 'react';
import { ScrollView, View, Text } from 'react-native';
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
          {(this.props.items && this.props.items.list.length > 0) ? this.props.items.list.map(item => (
            <ItemType
              title={`${item.name} (${item.ticker})`}
              subtitle={`Invested: ${(item.buyPrice * item.count).toFixed(2)} ${item.currency}\nShares count: ${item.count}`}
              icon={item.icon}
              key={item.ticker}
              onPress={() => this.props.navigation.navigate('ItemDetails', { ...item, isEditing: true })}
            />)) : <View style={layoutStyles.titleContainer}>
              <Text style={layoutStyles.title}>Add your first element</Text>
            </View>}
        </View>
      </ScrollView>
    );
  }
}

const mapDispatchToProps = (dispatch) => bindActionCreators(ActionCreators, dispatch);
const mapStateToProps = ({ local }) => ({
  items: local.shares,
  isReadingStorage: local.isReadingStorage,
});

export default connect(mapStateToProps, mapDispatchToProps)(Shares);
