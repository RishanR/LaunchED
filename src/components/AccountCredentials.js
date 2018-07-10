import React from 'react';
import { StyleSheet, Text, View, StatusBar, Image, TextInput, Button, TouchableOpacity } from 'react-native';
import { createStackNavigator } from 'react-navigation';

export class AccountCredentials extends React.Component {
  render() {
    return (
      <View style={styleCredentials.container}>
        <TextInput style={styleCredentials.InputBox} underlineColorAndroid='rgba(0,0,0,0)' placeholder="Email" />
        <TextInput style={styleCredentials.InputBox} underlineColorAndroid='rgba(0,0,0,0)' placeholder="Password" secureTextEntry={true}/>
        <TouchableOpacity style={styleCredentials.LoginButton}>
          <Text style={styleCredentials.LoginText}>Log In</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styleCredentials.SignUpButton}>
          <Text style={styleCredentials.LoginText}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styleCredentials = StyleSheet.create({
  container: {
    flexGrow:1,
    justifyContent:'center',
    alignItems:'center',
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
  LoginText:{
    fontSize:20,
    color:'rgba(255,255,255,1)',
    fontWeight:'bold',
  },
  LoginButton:{
    marginVertical:10,
    backgroundColor:'#F57C00',
    borderRadius:15,
    width:325,
    height:40,
    alignItems:'center',
    justifyContent:'center',
  },
  SignUpButton:{
    marginVertical:10,
    borderColor:'#ffffff',
    borderWidth:1,
    borderRadius:15,
    width:325,
    height:40,
    alignItems:'center',
    justifyContent:'center',
  },
});
