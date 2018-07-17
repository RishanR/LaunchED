import React from 'react';
import { StyleSheet, Text, View, StatusBar, Image, TextInput, Button, TouchableOpacity } from 'react-native';
import { createStackNavigator } from 'react-navigation';

export class Signup extends React.Component{
  static navigationOptions = {
    header:null
  }

  render(){
      return (
        <View style={signupStyle.container}>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('LoginScreen')}>
            <Text style={signupStyle.text}>Login Screen</Text>
          </TouchableOpacity>
        </View>
      );
  }
}

const signupStyle = StyleSheet.create({
  container: {
    flex:1,
    alignItems:'center',
    justifyContent:'center',
  },

  text: {
    fontSize:30,
    fontWeight:'bold',
    color:'red',
  }

});
