import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import { createStackNavigator } from 'react-navigation';

import { Login }  from "./src/pages/Login";
import { Signup } from "./src/pages/Signup";
import { AccountCredentials } from "./src/components/AccountCredentials";

export default class App extends React.Component {
  render() {
    return(
    <View style={main.background}>
      <LaunchedStackNavigator />
    </View>
    );
  }
}

const LaunchedStackNavigator =  createStackNavigator({
  LoginScreen: { screen: Login },
  SignupScreen: { screen: Signup },
})

const main = StyleSheet.create({
background: {
  flex: 1,
  backgroundColor:'#263238',
},
});
