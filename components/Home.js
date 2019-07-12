import React from 'react';
import {FlatList} from 'react-native';
import styles from './styles';
import data from '../tarmac-people.json';
import Faces from './Faces';

export default class Home extends React.Component {
  static navigationOptions = {
    title: "Tarmac's people"
  };

  render() {
    const {navigate} = this.props.navigation;

    return (
      <FlatList
        data={[...data]}
        style={styles.container}
        renderItem={props => <Faces {...props} onPress={() => navigate('Profile', {item: props.item})} />}
        keyExtractor={item => item.pic}
        numColumns={3}
      />
    );
  }
}
