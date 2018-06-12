import React, { Component } from "react";
import { View, Text, StyleSheet, Platform, Image, Dimensions, TouchableHighlight, ImageBackground, ScrollView, Linking } from "react-native";
import { StackNavigator, DrawerNavigator } from "react-navigation";

import HomeScreen from './HomeScreen';
import MemberScreen from './MemberScreen';

const Stack = StackNavigator({
  Home: { 
    screen: HomeScreen,
    navigationOptions: ({ navigation }) => ({
      headerStyle: {
        backgroundColor: 'white',
      },
      headerTitle: (
        <Image  
          style={{width:170, height:40, marginBottom:10}}
          source={require('../assets/logo.png')}>
        </Image>
      )
    })
  },
  Member: { 
    screen: MemberScreen,
    navigationOptions: ({ navigation }) => ({
      headerStyle: {
        backgroundColor: 'white',
      },
      headerLeft: (
        <TouchableHighlight  onPress={() => navigation.navigate('Home')} underlayColor="white">
        <Image  
          style={{width:30, height:30, marginLeft:10}}
          source={require('../assets/tarmac-back.png')}>
        </Image>
      </TouchableHighlight>
      ),
      headerTitle: (
        <Image  
          style={{width:170, height:40, marginBottom:10}}
          source={require('../assets/logo.png')}>
        </Image>
      )
    })
  }
});








export default Stack;
  