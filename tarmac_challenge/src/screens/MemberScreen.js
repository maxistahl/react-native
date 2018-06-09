import React, { Component } from "react";
import { Dimensions, ScrollView, View, Text, StyleSheet, TouchableHighlight, Image, ImageBackground, Linking } from "react-native";

import MemberAvatar from "../components/MemberAvatar";

const HomeScreen = (props) => {
  let member = props.member;
  return (
    <ScrollView >
    <View style={styles.memberContainer}>
      <View style={styles.imageContainer}>
        <Image  
          style={styles.image}
          source={{uri: `http://tarmac.io/assets/members/${member.pic}.png`}}
          defaultSource={require('../assets/anonimo.png')}>
        </Image>
      </View>
      <View style={styles.infoContainer}>
        <View style={styles.infoLeft}>
          <Text style={styles.name}> {member.name} </Text>
          <Text style={styles.role}> {member.role} </Text>
          {member.description && 
            <Text style={styles.description}> {member.description} </Text>
          }
        </View>
        <View style={styles.infoRight}>
          {member.twitter && 
            <TouchableHighlight style={styles.socialImage} onPress={() => {Linking.openURL(member.twitter)}} underlayColor="white">
              <Image
                style={styles.socialImage}
                source={require('../assets/twitter.png')}
              />
            </TouchableHighlight>
          }
          {member.github && 
            <TouchableHighlight style={styles.socialImage} onPress={() => {Linking.openURL(member.github)}} underlayColor="white">
              <Image
                style={styles.socialImage}
                source={require('../assets/github.png')}
              />
            </TouchableHighlight>
          }
        </View>
      </View>
      <TouchableHighlight style={styles.backContainer} onPress={props.onPress} underlayColor="white">
        <ImageBackground
          style={styles.back}
          source={require('../assets/button-background.png')}
        >
        <Text style={styles.backText}>Back</Text>
        </ImageBackground>
      </TouchableHighlight>
    </View>
    </ScrollView>
    );
}

const {height, width} = Dimensions.get('window');

const styles = StyleSheet.create({
  memberContainer:{
    flex: 1,
    flexDirection: 'column',
    flexWrap: "wrap",
    justifyContent: 'flex-start',
  },
  imageContainer: {
    width: width,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    marginBottom: 20,
  },
  image: {
    width: width,
    height: width,
    overflow: "hidden",
  },
  name: {
    fontSize: 20,
  },
  infoContainer: {
    width: width,
    justifyContent: 'space-between',  
    flexDirection: "row",  
  },
  infoLeft: {
    flex: 4,
  },
  infoRight: {
    flex: 2,
    width: width,
    justifyContent: 'space-evenly',  
    flexDirection: "row",  
  },
  socialImage: {
    width: 40,
    height: 40,
    overflow: "visible",
  },
  backContainer: {
    width: width,
    justifyContent: 'flex-end',
  },
  back: {
    width: 140,
    height: 50,
    overflow: "visible",
    marginTop: 40,
    marginBottom: 20,
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: "flex-end",
  },
  backText: {
    flex: 1,
    color: "white",
    fontSize: 26,
    fontWeight: "700",
    marginTop: 10,
    textShadowColor: 'rgba(111, 100, 184, 0.80)',
    textShadowOffset: {width: -2, height: 2},
    textShadowRadius: 10,
  },
});


export default HomeScreen;

