import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import { ForgotPassword } from "./src/pages/ForgotPassword";
import Announcements from "./src/pages/Announcements";
import AnnouncementsDetails from "./src/components/announcements/AnnouncementsDetails";
import {Login} from "./src/pages/Login";
import {Signup} from "./src/pages/Signup";

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
  AnnouncementsScreen: {screen: Announcements },
  AnnouncementsDetailsScreen: {screen: AnnouncementsDetails },
  SignupScreen: { screen: Signup },
  ForgotPasswordScreen: {screen: ForgotPassword },
});

const main = StyleSheet.create({
background: {
  flex: 1,
  backgroundColor:'#263238',
},
});
