import React, { Component } from "react";
import { AppRegistry, Dimensions, ScrollView, View, Text, StyleSheet, Platform, TouchableHighlight, Image, ImageBackground } from "react-native";

import MemberAvatar from "../components/MemberAvatar";

const HomeScreen = (props) => {
  console.log(props)
  return (
      <ScrollView >
        <View style={styles.container}>
          <View style={styles.bubbleContainer}>
            <ImageBackground
              style={styles.bubble}
              source={require('../assets/team-up-bubble.png')}
            >
            <Text style={styles.bubbleText}>Let's Team Up</Text>
            </ImageBackground>
          </View>
          {props.members.map( (member, key) => {
              return (
                <TouchableHighlight key={key} underlayColor="white" onPress={()=>{props.onPress(member);}}>
                  <MemberAvatar name={member.name} image={`http://tarmac.io/assets/members/${member.pic}.png`}/>
                </TouchableHighlight>
              )
            })
          }
        </View>
      </ScrollView>
    );
}

const {height, width} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
    justifyContent: 'flex-start',
    backgroundColor: 'white',
    flexWrap: "wrap",
    flexDirection: "row"
  },
  bubbleContainer: {
    width: width,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bubble: {
    flex: 1,
    width: 218,
    height: 73,
    overflow: "visible",
    marginTop: 20,
    marginBottom: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bubbleText: {
    flex: 1,
    color: "white",
    fontSize: 25,
    fontWeight: "900",
    marginTop: 15,
  },
  image: {
    flex: .33,
    maxWidth: width/3,
    minWidth: width/3,
    height: width/3,
  }
});


export default HomeScreen;

