import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

import SwitchToggle from 'react-native-switch-toggle';

export default class Switch1 extends Component<{}> {
  constructor(props) {
    super(props);
    this.state = {
      switchOn1: true,
      switchOn2: false,
      switchOn4: false
    };
  }

  getButtonText() {
    return this.state.switchOn4 ? 'Hour' : 'Day';
  }

  getRightText() {
    return this.state.switchOn4 ? '' : 'Hour';
  }

  getLeftText() {
    return this.state.switchOn4 ? 'Day' : '';
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
   marginTop: -97,
 },
});
