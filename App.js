import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import { createStackNavigator } from 'react-navigation';

import {Login}  from "./src/pages/Login";

export default class App extends React.Component {
  render() {
    return(
    <View>
      <Login />
    </View>
    );
  }
}
