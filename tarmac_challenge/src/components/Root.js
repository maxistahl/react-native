import React from "react";
import { View, Platform } from 'react-native';

import AppNavigation from "../screens/AppNavigation";

//console.disableYellowBox = true;

const Root = props =>
  <View style={styles.container}>
    <AppNavigation />
  </View>

export default Root;

const styles = {
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: Platform.OS === "android" ? 0 : 30
  }
};