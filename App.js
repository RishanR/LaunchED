import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import { createStackNavigator } from 'react-navigation';

import { Login }  from "./src/pages/Login";

export default class App extends React.Component {
  render() {
    return(
    <View style={main.background}>
      <Login />
    </View>
    );
  }
}

const main = StyleSheet.create({
background: {
  flex: 1,
  backgroundColor:'#263238',
},
});
