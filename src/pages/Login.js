import React from 'react';
import { StyleSheet, Text, View, StatusBar, Image } from 'react-native';
import { createStackNavigator } from 'react-navigation';

export class Login extends React.Component {
  render() {
    return (
      <View style={styles.background}>
        <Text>LaunchED</Text>
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

  background: {
    flex: 1,
    backgroundColor:'#263238',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
