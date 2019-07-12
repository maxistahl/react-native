import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import styles from './styles';
import Img from './Img';

export default class Faces extends React.Component {
  constructor(props) {
    super(props);
  }
  onPressHandler = () => this.props.onPress && this.props.onPress();

  render() {
    const {item} = this.props;

    return (
      <TouchableOpacity onPress={this.onPressHandler} style={styles.item}>
        <View style={styles.item}>
          <Img src={'http://tarmac.io/assets/members/' + item.pic + '.png'} style={styles.images} />
          <Text style={styles.text}>{item.name}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}
