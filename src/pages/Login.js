import React from 'react';
import { StyleSheet, Text, View, StatusBar, Image } from 'react-native';
import { createStackNavigator } from 'react-navigation';

export class Login extends React.Component {
  render() {
    return (
      <View>
        <Image style={styles.logo} source={require('../images/LaunchED-Rocket.png')} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    fontSize: 24,
    color: 'red',
    textAlign: 'center',
  },
  logo: {
    height:200,
    width:200,
  },
});
