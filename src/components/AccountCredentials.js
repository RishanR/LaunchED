import React from 'react';
import { StyleSheet, Text, View, StatusBar, Image, TextInput, Button, TouchableOpacity, Alert } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import * as Animatable from 'react-native-animatable';

export class AccountCredentials extends React.Component {
  render() {
    return (
      <View style={styleCredentials.containerMain}>

      <Animatable.View ref={(ref) => {this.credentials = ref;}} animation="fadeInRight" iterationCount={1} style={styleCredentials.container1}>
        <TextInput style={styleCredentials.InputBox} underlineColorAndroid='rgba(0,0,0,0)' placeholder="Email" />
        <TextInput style={styleCredentials.InputBox} underlineColorAndroid='rgba(0,0,0,0)' placeholder="Password" secureTextEntry={true}/>
      </Animatable.View>


      <Animatable.View ref={(ref) => {this.signup = ref;}} style={styleCredentials.container2}>
        <TextInput style={styleCredentials.InputBox} underlineColorAndroid='rgba(0,0,0,0)' placeholder="First Name" />
        <TextInput style={styleCredentials.InputBox} underlineColorAndroid='rgba(0,0,0,0)' placeholder="Last Name" />
        <TextInput style={styleCredentials.InputBox} underlineColorAndroid='rgba(0,0,0,0)' placeholder="Email" />
        <TextInput style={styleCredentials.InputBox} underlineColorAndroid='rgba(0,0,0,0)' placeholder="Password" secureTextEntry={true}/>
      </Animatable.View>
      </View>
    );
  }
}

const styleCredentials = StyleSheet.create({
  containerMain: {
    flexGrow:1,
    justifyContent:'center',
    alignItems:'center'
  },
  container1: {
    zIndex: 5,
    position:'absolute'
  },
  container2: {
    zIndex: 4,
    position:'absolute',
    opacity: 0
  },
  InputBox: {
    height:50,
    width:325,
    marginVertical:10,
    paddingHorizontal:12,
    fontSize:20,
    backgroundColor:'rgba(255,255,255,0.05)',
    borderRadius:25,
    color:'#ffffff'
  },
});
