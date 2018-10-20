import React from 'react';
import { StyleSheet, Text, View, Image} from 'react-native';
import { createStackNavigator } from 'react-navigation';
import * as Animatable from 'react-native-animatable';

export class Logo extends React.Component {
  render() {
    return (
          <Animatable.View animation="fadeInLeft" iterationCount={1} style={logoStyle.container}>
            <Animatable.Image ref={(ref) => {this.rocket = ref;}} animation="pulse" duration={3000} iterationCount="infinite" direction="alternate" style={logoStyle.logo} source={require('../images/LaunchED-Rocket.png')} />
            <Animatable.Image ref={(ref) => {this.logoText = ref;}} style={logoStyle.logoText} source={require('../images/LaunchED-Text.png')} />
          </Animatable.View>
          );
  }
}

const logoStyle = StyleSheet.create({
  container:{
    flexGrow:1,
    alignItems:'center',
    justifyContent:'center'
  },
  logo: {
    height:100,
    width:100,
  },
  logoText: {
    height:51,
    width:259.6,
  },

});
