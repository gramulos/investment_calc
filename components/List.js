import React from 'react';
import { View, Text, TouchableHighlight, StyleSheet, Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { arrayGroupBy } from '../helpers/helpers';

export default ({ items, groupBy, title, onPress }) => {
  const groups = arrayGroupBy(items, groupBy);
  const list = groups.map(group => (
    <View style={styles.container} key={`l_${group.title}`}>
      <Text style={styles.groupTitle}>{group.title}</Text>
      <View style={styles.items}>
        {group.items.map(item => (
          <ListItem title={item[title]} key={`li_${item[title]}`} onPress={() => onPress(item)} />
        ))}
      </View>
    </View>
  ));
  return <View style={styles.list}>{list}</View>;
};

const ListItem = ({ title, onPress }) => (
  <TouchableHighlight style={styles.itemContainer} onPress={onPress} underlayColor='#ffffff'>
    <View style={styles.listItem}>
      <Text style={styles.itemTitle}>{title}</Text>
      <Ionicons name='ios-arrow-forward' style={styles.icon} />
    </View>
  </TouchableHighlight>
);

const styles = StyleSheet.create({
  list: {
    paddingBottom: 20,
  },
  container: {
    width: Dimensions.get('window').width,
    flexDirection: 'column',
  },
  groupTitle: {
    fontSize: 12,
    fontFamily: 'Roboto-500',
    margin: 10,
  },
  items: {
    borderTopColor: '#dadada',
    borderTopWidth: 1,
  },
  itemContainer: {
    backgroundColor: '#ffffff',
    borderBottomColor: '#dadada',
    borderBottomWidth: 1,
  },
  listItem: {
    paddingTop: 15,
    paddingBottom: 15,
    paddingLeft: 10,
    paddingRight: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  itemTitle: {
    fontSize: 16,
    fontFamily: 'Roboto-300',
  },
  icon: {
    color: '#2f92fe',
    fontSize: 21,
  },
});
