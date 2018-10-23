import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

import SwitchToggle from 'react-native-switch-toggle';

export default class Switch extends Component<{}> {
  constructor(props) {
    super(props);
    this.state = {
      switchOn1: false,
      switchOn2: false,
      switchOn4: false
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <SwitchToggle
          switchOn={this.state.switchOn1}
          onPress={this.onPress1}
          circleColorOff='white'
          circleColorOn='white'
          backgroundColorOn='#FFA500'
        />

        </View>
   );
 }
 onPress1 = () => {
   this.setState({ switchOn1: !this.state.switchOn1 });
 };
}

const styles = StyleSheet.create({
 container: {
   flex: 1,
   justifyContent: 'center',
   alignItems: 'center',
   backgroundColor: '#F5FCFF',
   marginLeft: 270,
   marginTop: -35,
 },
});
