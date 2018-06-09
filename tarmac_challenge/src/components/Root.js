import React from "react";
import { View, Platform } from 'react-native';

import MainScreen from "../screens/MainScreen";

//console.disableYellowBox = true;

const Root = props =>
    <View style={styles.container}>
      <MainScreen />
    </View>

export default Root;

const styles = {
  container: {
    flex: 1,
    backgroundColor: 'white',
    marginTop: Platform.OS === "android" ? 0 : 20  
  }
};