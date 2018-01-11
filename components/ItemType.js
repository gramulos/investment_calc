import React from 'react';
import { View, Text, StyleSheet, Image, Dimensions, TouchableHighlight } from 'react-native';
import { createIconSetFromFontello } from 'react-native-vector-icons';
import fontelloConfig from '../assets/icons/config.json';
import iconBg from '../assets/icon_bg.png';

const Icon = createIconSetFromFontello(fontelloConfig);

const ItemType = ({ title, subtitle, icon, onPress, iconSize = 20 }) => (
  <TouchableHighlight style={styles.container} onPress={onPress} underlayColor='#ffffff'>
    <View style={styles.item}>
      <View style={styles.iconWrapper}>
        <Image source={iconBg} style={styles.iconBg} resizeMode='contain' />
        <Icon name={icon} size={iconSize} color='#ffffff' style={styles.icon} />
      </View>
      <View style={styles.wrapper}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>{subtitle}</Text>
      </View>
    </View>
  </TouchableHighlight>
);

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get('window').width - 20,
    backgroundColor: '#ffffff',
    height: 100,
    padding: 20,
    borderRadius: 3,
    borderBottomWidth: 0,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 2,
    marginBottom: 10,
  },
  item: {
    flex: 1,
    flexDirection: 'row',
  },
  iconWrapper: {
    width: 60,
    height: 60,
    marginRight: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconBg: {
    width: 60,
    height: 60,
  },
  icon: {
    backgroundColor: 'transparent',
    position: 'absolute',
    textShadowColor: 'rgba(0, 0, 0, 0.2)',
    textShadowOffset: { width: 1, height: 2 },
    textShadowRadius: 1,
    elevation: 2,
  },
  wrapper: {
    width: Dimensions.get('window').width - 150,
  },
  title: {
    fontSize: 16,
    lineHeight: 24,
    color: '#2d2d2d',
    fontFamily: 'Roboto-600',
  },
  subtitle: {
    fontSize: 12,
    lineHeight: 18,
    color: '#9a9a9a',
    fontFamily: 'Roboto-500',
  },
});

export default ItemType;
