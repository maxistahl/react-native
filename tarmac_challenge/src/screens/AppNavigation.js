import React from "react";
import { Button } from 'react-native';
import { StackNavigator } from "react-navigation";

import HomeScreen from './HomeScreen';
// import MemberScreen from './MemberScreen';


const Stack = StackNavigator({
  Home: { 
    screen: HomeScreen
  },
  // Member: { 
  //   screen: MemberScreen
  // }
});


 export default Stack;