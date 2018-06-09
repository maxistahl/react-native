import React from "react";
import { View, Platform } from 'react-native';

import configureStore from "../configureStore";
import { Provider } from "react-redux";

import MainScreen from "../screens/MainScreen";

const store = configureStore();

//console.disableYellowBox = true;

const Root = props =>
  <Provider store={store}>
    <View style={styles.container}>
      <MainScreen style = {{backgroundColor: "white"}} ref={nav => {this.navigator = nav;}}/>
    </View>
  </Provider>;

export default Root;

const styles = {
  container: {
    flex: 1,
    backgroundColor: 'white',
    marginTop: Platform.OS === "android" ? 0 : 20  
  }
};