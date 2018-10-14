import React, { Component } from "react";
import { View } from "react-native";
import Button from "apsl-react-native-button";

export default class ButtonPresser extends Component {
  constructor(props, context) {
    super(props, context);
  }
  _handlePress() {
    console.log("Pressed!");
  }
  render() {
    return (
      <View style={{ backgroundColor: "#202020",marginTop: 50 }}>
        <View style={{ height: 120, marginTop: 20, marginBottom: 10 }}>
          <Button
            style={{
              backgroundColor: "orange",
              width: 342,
              padding: 10,
              marginLeft: 15,
            }}
            textStyle={{ fontSize: 18, color: "white", fontFamily: 'Avenir', fontWeight: 'bold' }}
          >
            Save Changes
          </Button>

          <Button
          style={{
            backgroundColor: "#202020",
            width: 342,
            padding: 10,
            marginLeft: 15,
            marginTop: 2
          }}
          textStyle={{ fontSize: 18, color: "white", fontFamily: 'Avenir' }}
          >
            Restore Defaults
          </Button>
        </View>
      </View>
    );
  }
}
