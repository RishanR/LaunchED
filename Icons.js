import React from 'react';
import { View } from 'react-native'
import {Entypo} from '@expo/vector-icons';

export default class IconExample extends React.Component {
  render() {
    return (
      <View style={{}}>
      <Entypo name="chevron-right" size={32} color="#09a4ed"  />
      </View>
    );
  }
}
