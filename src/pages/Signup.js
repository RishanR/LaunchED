import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    StatusBar,
    Image,
    TextInput,
    Button,
    TouchableOpacity,
    KeyboardAvoidingView,
    Alert
} from 'react-native';
import { createStackNavigator } from 'react-navigation';
import * as Animatable from 'react-native-animatable';
import * as firebase from 'firebase';

import {Logo} from "../components/Logo";
import {SignupCredentials} from "../components/SignupCredentials";

const AnimatableTouchableOpacity = Animatable.createAnimatableComponent(TouchableOpacity);

export class Signup extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    }
  }

  static navigationOptions = {
    header:null
  }

  onSignupPress = () => {
    firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then(()=>{
        Alert.alert("Thank you for registering into LaunchED!");
      }, (error) => {
        Alert.alert(error.message);
      });
  }
  render() {
    return (
      <KeyboardAvoidingView behavior={"padding"} style={styles.container}>

        <Logo ref={(ref) => {this.childLogo = ref;}} />

        <Animatable.View ref={(ref) => {this.signup = ref;}} animation="fadeInRight" iterationCount={1} style={styles.containerMain}>
          <TextInput style={styles.InputBox} underlineColorAndroid='rgba(0,0,0,0)' placeholder="First Name" />
          <TextInput style={styles.InputBox} underlineColorAndroid='rgba(0,0,0,0)' placeholder="Last Name" />
          <TextInput style={styles.InputBox} underlineColorAndroid='rgba(0,0,0,0)' placeholder="Email" onChangeText={(text)=>{this.setState({email: text})}} value = {this.state.email}/>
          <TextInput style={styles.InputBox} underlineColorAndroid='rgba(0,0,0,0)' placeholder="Password" secureTextEntry={true} onChangeText={(text)=>{this.setState({password: text})}} value = {this.state.password}/>
        </Animatable.View>

        <AnimatableTouchableOpacity ref={(ref) => {this.signupScreenButton = ref;}} onPress={this.onSignupPress} style={styles.SignupButton}>
          <Text style={styles.SignupText}>Sign Up</Text>
        </AnimatableTouchableOpacity>

        <AnimatableTouchableOpacity
          ref={(ref) => {this.backButton = ref;}}
          onPress={() => {
            this.props.navigation.goBack()
          }}
          style={styles.BackButton}>
          <Text style={styles.SignupText}>Back</Text>
        </AnimatableTouchableOpacity>

        <View style={styles.forgotPasswordContainer}>
        <AnimatableTouchableOpacity ref={(ref) => {this.forgot = ref;}}
          onPress={() => {
            this.props.navigation.navigate('ForgotPasswordScreen')
          }}
          style={styles.forgotPassword}>
            <Text style={styles.text}>Forgot your password?</Text>
        </AnimatableTouchableOpacity>
        </View>
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
    bottom: 15
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
  SignupText:{
    fontSize:20,
    color:'rgba(255,255,255,1)',
    fontWeight:'bold',
  },
  SignupButton:{
    top: 10,
    marginVertical:10,
    backgroundColor:'#ff9800',
    borderRadius:15,
    width:325,
    height:40,
    alignItems:'center',
    justifyContent:'center',
  },
  BackButton:{
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
