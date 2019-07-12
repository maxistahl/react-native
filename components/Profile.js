import React from 'react';
import {Text, Image, View} from 'react-native';
import styles from './styles';
import Img from './Img';

export default class Profile extends React.Component {
  static navigationOptions = {
    title: 'Details'
  };

  render() {
    const {navigation} = this.props;
    const item = (navigation.getParam && navigation.getParam('item')) || this.props.item;

    return (
      <View style={styles.item}>
        <Img src={'http://tarmac.io/assets/members/' + item.pic + '.png'} style={{...styles.images, ...styles.big}} />
        <Text style={{...styles.text, ...styles.title}}>{item.name}</Text>
        <Text>{item.role}</Text>
        <Text>{item.description}</Text>
        <View style={{flex: 1, justifyContent: 'flex-start'}}>
          {item.github && (
            <View style={styles.textAndIcon}>
              <Image style={styles.icon} source={require('../assets/icon-github.png')} />
              <Text>{item.github}</Text>
            </View>
          )}
          {item.twitter && (
            <View style={styles.textAndIcon}>
              <Image style={styles.icon} source={require('../assets/icon-twitter.png')} />
              <Text>{item.twitter}</Text>
            </View>
          )}
        </View>
      </View>
    );
  }
}
