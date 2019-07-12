import React from 'react';
import {StyleSheet} from 'react-native';

export default (styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 24
  },
  item: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 40
  },
  images: {width: 100, height: 100, borderRadius: 50, marginBottom: 20},
  big: {
    width: 240,
    height: 240
  },
  text: {textAlign: 'center'},
  title: {fontSize: 24, fontWeight: '500'},
  textAndIcon: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  icon: {
    width: 32,
    height: 32,
    marginRight: 8
  }
}));
