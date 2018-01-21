import React, { Component } from 'react';
import { ScrollView, View, Text } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ActionCreators } from '../actions';
import { layoutStyles } from '../styles';
import ItemType from '../components/ItemType';
import Results from '../components/Results';

class Shares extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current: 15345,
    };
  }
  componentDidMount() {
    this.props.getLocalItemList().then(() => {
      if (this.props.items) {
        const cws = new WebSocket('wss://ws-feed.gdax.com');
        const sws = new WebSocket('wss://api.tiingo.com/iex');
        const stockSubscribeMsg = {
          eventName: 'subscribe',
          authorization: '529808af478752ce74c895da1bca2ba5d915529e',
          eventData: {
            thresholdLevel: 0,
            tickers: []
          }
        };
        const cryptoSubscribeMsg = {
          type: 'subscribe',
          channels: [
            {
              name: 'ticker',
              product_ids: []
            }
          ]
        };

        this.props.items.list.forEach(item => {
          if (cryptoSubscribeMsg.channels[0].product_ids.filter(existig => existig === item.ticker).length === 0 && item.isCryptoCurrency) {
            cryptoSubscribeMsg.channels[0].product_ids.push(item.ticker);
          } else if (stockSubscribeMsg.eventData.tickers.filter(existig => existig === item.ticker).length === 0 && !item.isCryptoCurrency) {
            stockSubscribeMsg.eventData.tickers.push(item.ticker.toLowerCase());
          }
        });

        cws.onopen = () => {
          cws.send(JSON.stringify(cryptoSubscribeMsg));
        };
        cws.onmessage = (e) => {
          const msg = JSON.parse(e.data);
          this.setState({
            [`current_${msg.product_id}`]: parseFloat(msg.price),
          });
        };
        sws.onopen = () => {
          console.log('STOCK SETTINGS', stockSubscribeMsg);
          sws.send(JSON.stringify(stockSubscribeMsg));
        };
        sws.onmessage = (e) => {
          console.log('@@@@@@@@', e.data);
        };
      }
    });
  }
  render() {
    return (
      <ScrollView style={layoutStyles.mainContainer}>
        <View style={layoutStyles.container}>
          <Results current={this.state.current} difference={7457} currencySymbol='€' />
          {(this.props.items && this.props.items.list.length > 0) ? this.props.items.list.map(item => (
            <ItemType
              title={`${item.name} (${item.ticker})`}
              subtitle={`Invested: ${(item.buyPrice * item.count).toFixed(2)} ${item.currency}\nShares count: ${item.count} (${this.state[`current_${item.ticker}`] || '---'})`}
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
