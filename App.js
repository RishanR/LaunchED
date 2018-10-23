import React from "react";
import { Avatar, Header, Text, Divider, Button, Icon } from "react-native-elements";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import Main from "./pages/Main.js";


export default class App extends React.Component {
  render() {
    return (
      <View style={{ backgroundColor: "#303030" }}>
        <Main />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "grey"
  },
  titles: {
    backgroundColor: "#202020",
    paddingVertical: 5,
    color: "#fff",
    fontSize: 20,
    fontFamily: "Montserrat",
    fontWeight: "bold"
  }
});
