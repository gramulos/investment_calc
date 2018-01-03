import React from 'react';
import { View, Text, TextInput, StyleSheet, Dimensions } from 'react-native';
import { Select, Option } from './Select';

export default ({ title, input, selectedValue, onChangeText, onSelect }) => (
  <View style={styles.container}>
    <Text style={styles.formLabel}>{title}</Text>
    <View style={styles.inputs}>
      <TextInput style={styles.formInput} onChangeText={onChangeText} value={input} />
      <Select
        onSelect={onSelect}
        selectedValue={selectedValue}
        style={styles.selectbox}
        textStyle={styles.selectText}
      >
        <Option value='COMISSION_FIXED'>Fixed</Option>
        <Option value='COMISSION_PERCENT'>Percent</Option>
        <Option value='COMISSION_NONE'>None</Option>
        <Option value='COMISSION_FIXED1'>Fixed</Option>
        <Option value='COMISSION_PERCENT1'>Percent</Option>
        <Option value='COMISSION_NONE1'>None</Option>
        <Option value='COMISSION_FIXED2'>Fixed</Option>
        <Option value='COMISSION_PERCENT2'>Percent</Option>
        <Option value='COMISSION_NONE2'>None</Option>
        <Option value='COMISSION_FIXED3'>Fixed</Option>
        <Option value='COMISSION_PERCENT3'>Percent</Option>
        <Option value='COMISSION_NONE3'>None</Option>
      </Select>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get('window').width - 20,
    marginBottom: 15,
  },
  inputs: {
    flexDirection: 'row',
  },
  formLabel: {
    color: '#2d2d2d',
    fontSize: 14,
    lineHeight: 21,
    fontFamily: 'Roboto-500',
    marginBottom: 7,
  },
  formInput: {
    width: Dimensions.get('window').width - 170,
    color: '#2d2d2d',
    fontFamily: 'Roboto-500',
    borderTopLeftRadius: 3,
    borderBottomLeftRadius: 3,
    height: 45,
    lineHeight: 27,
    paddingLeft: 15,
    paddingRight: 15,
    paddingBottom: 3,
    fontSize: 18,
    backgroundColor: '#ffffff',
  },
  selectbox: {
    height: 45,
    paddingBottom: 3,
    borderWidth: 0,
    backgroundColor: '#ffffff',
    width: 150,
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
    borderTopRightRadius: 3,
    borderBottomRightRadius: 3,
    marginLeft: 0,
    marginRight: 0,
  },
  selectText: {
    fontSize: 18,
    fontFamily: 'Roboto-500',
  }
});
