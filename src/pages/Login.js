import React from 'react';
import { StyleSheet, Text, View, StatusBar, Image, TextInput, Button, TouchableOpacity } from 'react-native';
import { createStackNavigator } from 'react-navigation';

import {Logo} from "../components/Logo";
import {AccountCredentials} from "../components/AccountCredentials";

export class Login extends React.Component {
  render() {
    return (
      <View style={styles.container}>
      <Logo />
      <AccountCredentials />
      <TouchableOpacity style={styles.forgotPassword}>
        <Text style={styles.text}>Forgot your password?</Text>
      </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexGrow:1,
    backgroundColor:'#263238',
    justifyContent: 'center',
    alignItems: 'center',
  },

  forgotPassword: {
    flexGrow:1,
    justifyContent:'center',
    alignItems:'center',
  },
  text: {
    fontSize:15,
    color:'#3e84f2',
  },
});
