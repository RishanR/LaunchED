import React from 'react';
import {StyleSheet,Text,View,StatusBar,Image,TextInput,Button, TouchableOpacity,KeyboardAvoidingView,Alert} from 'react-native';
import { createStackNavigator } from 'react-navigation';
import * as Animatable from 'react-native-animatable';
import * as firebase from 'firebase';

import {Logo} from "../components/Logo";
import {LoginCredentials} from "../components/LoginCredentials";

const AnimatableTouchableOpacity = Animatable.createAnimatableComponent(TouchableOpacity);

export class Login extends React.Component {

  static navigationOptions = {
    header:null
  }
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    }
  }

onLoginPress = () => {
    firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
      .then(() => {
        Alert.alert("Congratulations! You have logged in!");
      }, (error) => {
        Alert.alert(error.message);
      });
}
  render() {
    return (
      <KeyboardAvoidingView behavior={"padding"} style={styles.container}>

        <Logo ref={(ref) => {this.childLogo = ref;}} animation="fadeInLeft" iterationCount={1} />

        <Animatable.View ref={(ref) => {this.credentials = ref;}} animation="fadeInRight" iterationCount={1} style={styles.containerMain}>
          <TextInput style={styles.InputBox} underlineColorAndroid='rgba(0,0,0,0)' placeholder="Email" onChangeText={(text)=>{this.setState({email: text})}} value = {this.state.email}/>
          <TextInput style={styles.InputBox} underlineColorAndroid='rgba(0,0,0,0)' placeholder="Password" secureTextEntry={true} onChangeText={(text)=>{this.setState({password: text})}} value = {this.state.password}/>
        </Animatable.View>

        <AnimatableTouchableOpacity
        ref={(ref) => {this.loginButton = ref;}}
        onPress={this.onLoginPress}
        style={styles.LoginButton}>
          <Text style={styles.LoginText}>Log In</Text>
        </AnimatableTouchableOpacity>

        <AnimatableTouchableOpacity
        ref={(ref) => {this.signupButton = ref;}}
        onPress={() => {
          this.props.navigation.navigate('SignupScreen')
        }}

          style={styles.SignUpButton}>
          <Text style={styles.LoginText}>Sign Up</Text>
        </AnimatableTouchableOpacity>

        <KeyboardAvoidingView behavior={"padding"} style={styles.forgotPasswordContainer}>
        <AnimatableTouchableOpacity ref={(ref) => {this.forgot = ref;}}
        onPress={() => {
          this.props.navigation.navigate('ForgotPasswordScreen')
        }}
        style={styles.forgotPassword}>
          <Text style={styles.text}>Forgot your password?</Text>
        </AnimatableTouchableOpacity>
        </KeyboardAvoidingView>
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

  forgotPassword: {
    bottom: 45
  },

  forgotPasswordContainer: {
    flexGrow:1,
    justifyContent: 'flex-end',
    alignItems:'center'
  },

  text: {
    fontSize:15,
    color:'#3e84f2',
  },
  LoginText:{
    fontSize:20,
    color:'rgba(255,255,255,1)',
    fontWeight:'bold',
  },
  LoginButton:{
    top: 10,
    marginVertical:10,
    backgroundColor:'#ff9800',
    borderRadius:15,
    width:325,
    height:40,
    alignItems:'center',
    justifyContent:'center',
  },
  SignUpButton:{
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
