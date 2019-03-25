import React from 'react';
import { ActivityIndicator, StyleSheet, Text, View, StatusBar, Image, TextInput, Button, TouchableOpacity, Alert } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import * as Animatable from 'react-native-animatable';

export class LoginCredentials extends React.Component {

  constructor(props) {
      super(props)
      this.state = {
        emailAdd: "",
        passwordAdd: "",
      }
    }
  render() {
    return (
      <Animatable.View ref={(ref) => {this.credentials = ref;}} animation="fadeInRight" iterationCount={1} style={styleCredentials.containerMain}>
        <TextInput style={styleCredentials.InputBox} underlineColorAndroid='rgba(0,0,0,0)' placeholder="Email" onChangeText={(text)=>{this.setState({emailAdd: text})}} value = {this.state.emailAdd}/>
        <TextInput style={styleCredentials.InputBox} underlineColorAndroid='rgba(0,0,0,0)' placeholder="Password" secureTextEntry={true} onChangeText={(text)=>{this.setState({passwordAdd: text})}} value = {this.state.passwordAdd}/>
      </Animatable.View>
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
