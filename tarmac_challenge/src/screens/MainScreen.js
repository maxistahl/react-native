import React, { Component } from "react";
import { View, Text, StyleSheet, Platform, Image, Dimensions, TouchableHighlight, ImageBackground, ScrollView, Linking } from "react-native";

import HomeScreen from './HomeScreen';
import MemberScreen from './MemberScreen';

class MainScreen extends Component {
  constructor(props){
    super(props);
    this.state = {
      memberSelected: null,
      members: [  
        {  
           "name":"Eugenia Díaz Arnesto",
           "role":"Developer",
           "pic":"eugenia-diaz-arnesto",
           "github":"https://github.com/eugediaz",
           "width":"500",
           "height":"500",
           "description":""
        },
        {  
           "name":"Cecilia Marcora",
           "role":"Developer",
           "pic":"cecilia-marcora",
           "width":"500",
           "height":"500",
           "description":""
        },
        {  
           "name":"Sabrina Lattanzio",
           "role":"QA",
           "pic":"sabrina-lattanzio",
           "width":"500",
           "height":"500",
           "description":""
        },
        {  
           "name":"Andrés Segurola",
           "role":"Developer",
           "pic":"andres-segurola",
           "width":"500",
           "height":"500",
           "description":""
        },
        {  
           "name":"Agustín Cornú",
           "role":"Developer",
           "pic":"agustin-cornu",
           "width":"500",
           "height":"500",
           "description":""
        },
        {  
           "name":"Sebastián Beceiro",
           "role":"Developer",
           "pic":"seba-beceiro",
           "width":"500",
           "height":"500",
           "description":""
        },
        {  
           "name":"Alvaro Scuccimarra",
           "role":"Developer",
           "pic":"alvaro-scuccimarra",
           "width":"500",
           "height":"500",
           "description":""
        },
        {  
           "name":"Gonzalo Robaina",
           "role":"Developer",
           "pic":"gonzalo-robaina",
           "width":"500",
           "height":"500",
           "description":""
        },
        {  
           "name":"Federico Zagarzazu",
           "role":"Developer",
           "pic":"federico-zagarzazu",
           "github":"https://github.com/fzagarzazu",
           "width":"500",
           "height":"500",
           "description":""
        },
        {  
           "name":"Gabriel Osorio",
           "role":"Developer ",
           "pic":"gabriel-osorio",
           "width":"500",
           "height":"500",
           "github":"https://github.com/gabrielosorio",
           "description":""
        },
        {  
           "name":"Gonzalo Melgar",
           "role":"Developer",
           "pic":"gonzalo-melgar",
           "width":"500",
           "height":"500",
           "github":"https://github.com/gmelgaba",
           "description":""
        },
        {  
           "name":"Ignacio Facello",
           "role":"Developer",
           "pic":"ignacio-facello",
           "github":"https://github.com/nachof",
           "width":"500",
           "height":"500",
           "twitter":"http://twitter.com/nachof",
           "description":""
        },
        {  
           "name":"Juan Peón",
           "role":"Developer",
           "pic":"juan-peon",
           "github":"https://github.com/nemesys101",
           "width":"500",
           "height":"500",
           "twitter":"http://twitter.com/neme101",
           "description":""
        },
        {  
           "name":"Juan Rodríguez",
           "role":"Developer",
           "pic":"juan-rodriguez",
           "github":"https://github.com/jandresrodriguez",
           "width":"500",
           "height":"500",
           "twitter":"http://twitter.com/juan89andres",
           "description":""
        },
        {  
           "name":"Julio Pintos",
           "role":"Developer",
           "pic":"julio-pintos",
           "github":"https://github.com/julio-pintos",
           "width":"500",
           "height":"500",
           "description":""
        },
        {  
           "name":"Marcelo Bevegni",
           "role":"Operations",
           "pic":"marcelo-bevegni",
           "width":"500",
           "height":"500",
           "description":""
        },
        {  
           "name":"Mauricio Piñatares",
           "role":"Developer",
           "pic":"mauricio-pinatares",
           "github":"https://github.com/chucho13",
           "width":"500",
           "height":"500",
           "description":""
        },
        {  
           "name":"Mauricio Souto",
           "role":"Developer",
           "pic":"mauricio-souto",
           "github":"https://github.com/mauriciosouto",
           "width":"500",
           "height":"500",
           "twitter":"http://twitter.com/maurisouto",
           "description":""
        },
        {  
           "name":"Pablo Caviglia",
           "role":"Developer",
           "pic":"pablo-caviglia",
           "width":"500",
           "height":"500",
           "description":""
        },
        {  
           "name":"Pablo Monfort",
           "role":"Developer",
           "pic":"pablo-monfort",
           "github":"https://github.com/pmonfort",
           "width":"500",
           "height":"500",
           "description":""
        },
        {  
           "name":"Pablo Pazos",
           "role":"Developer",
           "pic":"pablo-pazos",
           "github":"https://github.com/ppazos",
           "width":"500",
           "height":"500",
           "description":""
        },
        {  
           "name":"Pedro Neyeloff",
           "role":"Developer",
           "pic":"pedro-neyeloff",
           "width":"500",
           "height":"500",
           "description":""
        },
        {  
           "name":"Rodrigo Dutra",
           "role":"Developer",
           "pic":"rodrigo-dutra",
           "github":"https://github.com/rdutra",
           "width":"500",
           "height":"500",
           "description":""
        },
        {  
           "name":"Rodrigo Machado",
           "role":"Developer",
           "pic":"rodrigo-machado",
           "width":"500",
           "height":"500",
           "description":""
        },
        {  
           "name":"Rodrigo Ordeix",
           "role":"Developer",
           "pic":"rodrigo-ordeix",
           "github":"https://github.com/rordeix",
           "width":"500",
           "height":"500",
           "description":""
        },
        {  
           "name":"Sebastián Sierra",
           "role":"Developer",
           "pic":"sebastian-sierra",
           "github":"https://github.com/sebastiansier",
           "width":"500",
           "height":"500",
           "description":""
        },
        {  
           "name":"Magdalena Ezeiza",
           "role":"Finance Manager",
           "pic":"magdalena-ezeiza",
           "width":"500",
           "height":"500",
           "description":""
        },
        {  
           "name":"Diego Pedemonte",
           "role":"Developer",
           "pic":"diego-pedemonte",
           "width":"500",
           "height":"500",
           "description":""
        },
        {  
           "name":"Damián Arrillaga",
           "role":"Developer",
           "pic":"damian-arrillaga",
           "width":"500",
           "height":"500",
           "description":""
        },
        {  
           "name":"Juan Olivera",
           "role":"Developer",
           "pic":"juan-olivera",
           "width":"500",
           "height":"500",
           "description":""
        }
     ]
    }
  }

  selectMember = (member) => {
    this.setState({...this.state, memberSelected : member})
  }

  backToHome = () => {
    this.setState({...this.state, memberSelected : null})
  }

  render() {
    let member = this.state.memberSelected;
    return (
      <View style={styles.container}>
        <View style={styles.header}>
        <TouchableHighlight  onPress={this.backToHome} underlayColor="white">
            <Image  
              style={{width:170, height:40}}
              source={require('../assets/logo.png')}>
            </Image>
          </TouchableHighlight>
        </View>
        {member &&
          <MemberScreen onPress={this.backToHome} member={member}/>
        }
        {!member &&
          <HomeScreen onPress={this.selectMember} members={this.state.members}/>
        }
      </View>
    )
  }
  
}

const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header:{
    height: 50,
    flexDirection: 'row',
    flexWrap: "wrap",
    justifyContent: 'space-between',
    margin: 10,
    marginBottom: 0,
  },
  headerButton: {
    width:30,
  },
  back: {
    fontSize: 40,
  }
});


 export default MainScreen;