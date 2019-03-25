import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import { Login }  from "./src/pages/Login";
import { Signup } from "./src/pages/Signup";
import { ForgotPassword } from "./src/pages/ForgotPassword";
import { LoginCredentials } from "./src/components/LoginCredentials";
import { SignupCredentials } from "./src/components/SignupCredentials";
import { ForgotPasswordCredentials } from "./src/components/ForgotPasswordCredentials";
import * as firebase from 'firebase';

export default class App extends React.Component {
  componentWillMount(){
    const firebaseConfig = {
      apiKey: 'AIzaSyD9q2e0ZbQq0KTu5lp6ThCWewLanFpFD_o',
      authDomain: 'launched-5b8d0.firebaseapp.com',
    }
    firebase.initializeApp(firebaseConfig);
  }
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
  ForgotPasswordScreen: {screen: ForgotPassword },
})

const main = StyleSheet.create({
background: {
  flex: 1,
  backgroundColor:'#263238',
},
});
