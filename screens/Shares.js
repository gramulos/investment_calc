import React, { Component } from 'react';
import { ScrollView, View, TouchableHighlight, Text } from 'react-native';
import { createIconSetFromFontello } from 'react-native-vector-icons';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ActionCreators } from '../actions';
import { listStyles, layoutStyles } from '../styles';
// import imgCrypto from '../assets/cryptoCurrency.png';
// import imgUsual from '../assets/usualCurrency.png';
import fontelloConfig from '../assets/icons/config.json';

class Shares extends Component {
  componentDidMount() {
    this.props.getLocalItemList();
  }
  onLearnMore = (share) => {
    this.props.navigation.navigate('Calculator', { ...share });
  }
  renderItems() {
    return this.props.shares && this.props.shares.list.map((share) => {
      // const icon = share.cryptoCurrency ? <Image source={imgCrypto} style={listStyles.icon} resizeMode='contain' /> : <Image source={imgUsual} style={listStyles.icon} resizeMode='contain' />;

      const Icon = createIconSetFromFontello(fontelloConfig);
      return (
        <TouchableHighlight key={share.id} style={listStyles.listItem} onPress={() => this.onLearnMore(share)} underlayColor='#ffffff'>
          <View>
            <Text style={listStyles.title}>{`${share.name} (${share.ticker})`}</Text>
            <Text style={listStyles.subtitle}>Invested: {(share.buyPrice * share.count).toFixed(2)} €</Text>
            <Text style={listStyles.subtitle}>Shares count: {share.count}</Text>
            <Icon name='etc' size={40} color='#ec2222' style={listStyles.icon} />
          </View>
        </TouchableHighlight>
      );
    });
  }
  render() {
    return (
      <ScrollView style={layoutStyles.mainContainer}>
        <View style={[layoutStyles.container, listStyles.container]}>
          {this.renderItems()}
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
