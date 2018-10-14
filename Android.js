import React from "react";
import {
  Avatar,
  Header,
  Text,
  Divider,
  Button,
  Icon
} from "react-native-elements";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import DropDown from "./Drop.js";
import { Entypo } from "@expo/vector-icons";
import Switch from "./Switch.js";
import Switch1 from "./Switch1.js";
import Press from "./Picker.js";

export default class App extends React.Component {
  render() {
    return (
      <View style={{ backgroundColor: "#303030" }}>
        //#303030
        <Header
          outerContainerStyles={{ backgroundColor: "#09a4ed" }}
          innerContainerStyles={{ backgroundColor: "#09a4ed" }}
          leftComponent={{ icon: "menu", color: "#fff" }}
          centerComponent={
            <Text
              h5
              style={{
                backgroundColor: " #5f91ec",
                color: "#fff",
                fontSize: 20,
                fontFamily: "San Fransico",
                fontWeight: "bold"
              }}
            >
              {" "}
              SETTINGS{" "}
            </Text>
          }
        />
        <Divider
          style={{ backgroundColor: "#202020", marginTop: -2, height: 20 }}
        />
        <Text h4 style={styles.titles}>
          {"  "}
          ACCOUNT
        </Text>
        <Text
          h4
          style={{
            color: "#fff",
            fontSize: 30,
            height: 90,
            marginTop: 25,
            fontFamily: "Avenir",
            marginLeft: 120
          }}
        >
          {" "}
          John Doe
        </Text>
        <Avatar
          large
          rounded
          source={{
            uri:
              "https://i1.wp.com/www.winhelponline.com/blog/wp-content/uploads/2017/12/user.png?resize=256%2C256&quality=100&ssl=1"
          }}
          onPress={() => console.log("Works!")}
          activeOpacity={0.7}
          containerStyle={{
            overlayContainerStyle: "white",
            marginLeft: 25,
            marginTop: -100,
            marginBottom: 15,
            marginRight: 0
          }}
        />
        <Text
          h4
          style={{
            color: "#fff",
            fontSize: 15,
            height: 40,
            marginTop: -40,
            fontFamily: "Al Nile",
            marginLeft: 130
          }}
        >
          {" "}
          SATEC @ W.A Porter
        </Text>
        <Divider style={{ backgroundColor: "#202020", height: 25 }} />
        <Text h4 style={styles.titles}>
          {"  "}
          PERSONALIZATION{" "}
        </Text>
        <Text
          h4
          style={{
            backgroundColor: "#303030",
            color: "#fff",
            marginLeft: 5,
            height: -5,
            marginBottom: 45,
            width: 85,
            fontSize: 25,
            fontFamily: "Montserrat"
          }}
        >
          {"  "}
          Theme:{" "}
        </Text>
        <DropDown />
        <Divider style={{ backgroundColor: "#202020", height: 25 }} />
        <Text h4 style={styles.titles}>
          {"  "}
          PERMISSIONS{" "}
        </Text>
        <Text
          h4
          style={{
            backgroundColor: "#303030",
            color: "#fff",
            marginTop: 15,
            marginBottom: 5,
            fontSize: 23,
            fontFamily: "Montserrat"
          }}
        >
          {"  "}
          Location Access{" "}
        </Text>
        <Switch />
        <Text
          h4
          style={{
            backgroundColor: "#303030",
            color: "#fff",
            marginTop: 40,
            marginBottom: 45,
            paddingVertical: 20,
            fontSize: 23,
            fontFamily: "Montserrat"
          }}
        >
          {"  "}
          Push Notifications{" "}
        </Text>
        <Switch1 />
        <Press />
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
