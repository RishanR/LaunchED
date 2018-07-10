import React from 'react';
import { StyleSheet, Text, View, Image} from 'react-native';
import { createStackNavigator } from 'react-navigation';

export class Logo extends React.Component {
  render() {
    return (
          <View style={logoStyle.container}>
            <Image style={logoStyle.logo} source={require('../images/LaunchED-Rocket.png')} />
            <Image style={logoStyle.logoText} source={require('../images/LaunchED-Text.png')} />
          </View>
          );
  }
}

const logoStyle = StyleSheet.create({
  container:{
    flexGrow:1,
    alignItems:'center',
    justifyContent:'flex-end',
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
