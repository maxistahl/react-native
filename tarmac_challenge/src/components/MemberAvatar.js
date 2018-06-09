import React from "react";
import PropTypes from "prop-types";
import { Text, View, Image, StyleSheet, Dimensions, ImageBackground } from "react-native";

const MemberAvatar = (props) => {
  return (
      <ImageBackground
        style={styles.image}
        source={{uri: props.image}}
        defaultSource={require('../assets/anonimo.png')}
      >
        <View style={styles.container}>
          <Text style={styles.name}>{props.name}</Text>
        </View>
      </ImageBackground>
  );
}

const {height, width} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    flexDirection: "column",
    justifyContent: "flex-end"
  },
  image: {
    flex: .33,
    maxWidth: width/3,
    minWidth: width/3,
    height: width/3,
  },
  name: {
    color: "#fff",
    textShadowColor: 'rgba(111, 100, 184, 0.80)',
    textShadowOffset: {width: -2, height: 2},
    textShadowRadius: 10,
    margin: 5,
    fontWeight: 'bold',
  }
});

MemberAvatar.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired
};

export default MemberAvatar;