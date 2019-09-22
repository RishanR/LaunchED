import React from 'react';
import { StyleSheet, Text, View, StatusBar, Image, TextInput, Button, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import * as Animatable from 'react-native-animatable';

import {Logo} from "../components/Logo";
import {ForgotPasswordCredentials} from "../components/ForgotPasswordCredentials";

const AnimatableTouchableOpacity = Animatable.createAnimatableComponent(TouchableOpacity);

export class ForgotPassword extends React.Component {

  static navigationOptions = {
    header:null
  }

  render() {
    return (
      <KeyboardAvoidingView behavior={"position"} style={styles.container}>

      <Logo ref={(ref) => {this.childLogo = ref;}} />

      <Animatable.View ref={(ref) => {this.credentials = ref;}} animation="fadeInRight" iterationCount={1} style={styles.containerMain}>
        <TextInput style={styles.InputBox} underlineColorAndroid='rgba(0,0,0,0)' placeholder="Email" />
      </Animatable.View>

      <AnimatableTouchableOpacity ref={(ref) => {this.forgotScreenButton = ref;}} style={styles.ForgotButton}>
        <Text style={styles.ForgotText}>Submit</Text>
      </AnimatableTouchableOpacity>

      <AnimatableTouchableOpacity
      ref={(ref) => {this.backButton = ref;}}
      onPress={() => {
        this.props.navigation.goBack()
      }}
      style={styles.BackButton}>
      <Text style={styles.ForgotText}>Back</Text>
    </AnimatableTouchableOpacity>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexGrow:1,
    backgroundColor:'#263238',
    justifyContent: 'center',
    alignItems: 'center',
  },
  formatCred: {
    flex: 1,
    justifyContent:'center',
    alignItems:'center',
  },
  ForgotText:{
    fontSize:20,
    color:'rgba(255,255,255,1)',
    fontWeight:'bold',
  },
  ForgotButton:{
    top: -50,
    marginVertical:10,
    backgroundColor:'#ff9800',
    borderRadius:15,
    width:325,
    height:40,
    alignItems:'center',
    justifyContent:'center',
  },
  BackButton:{
    top: -60,
    marginVertical:10,
    borderColor:'#ffffff',
    borderWidth:1,
    borderRadius:15,
    width:325,
    height:40,
    alignItems:'center',
    justifyContent:'center',
  },

  containerMain: {
    flexGrow:1,
    justifyContent:'center',
    alignItems:'center'
  },
  container1: {
    zIndex: 5,
    position:'absolute'
  },
  container2: {
    zIndex: 4,
    position:'absolute',
    opacity: 0
  },
  InputBox: {
    height:50,
    width:325,
    marginVertical:10,
    paddingHorizontal:12,
    fontSize:20,
    backgroundColor:'rgba(255,255,255,0.05)',
    borderRadius:25,
    color:'#ffffff'
  },
  
});
