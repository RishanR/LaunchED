import React from "react";
import { StyleSheet, View, ScrollView, Text, Dimensions } from "react-native";
import { Header, Tile, Divider } from "react-native-elements";


export default class App extends React.Component {
  render() {
    return (

      <View>

        <Header
          outerContainerStyles={{ backgroundColor: "#09a4ed" }}
          innerContainerStyles={{ backgroundColor: "#09a4ed" }}
          leftComponent={{ icon: "menu", color: "#fff" }}
          rightComponent={{ icon: "search", color: "#fff" }}
          centerComponent={<Text style={styles.headerText}>RESOURCES</Text>}
        />
        <Divider style={{backgroundColor: "#09a4ed", height : 2, marginTop: -2}} />
        <ScrollView>
        <View>
          <Tile
          
            imageSrc={require("./silambatam.jpeg")}

            title="Community Service"
            titleStyle={styles.titles}
            containerStyle={{ backgroundColor: "white" }}
          />
          <Divider style={styles.dividerStyle} />
          <Divider style={styles.divider} />
          <Tile
            imageSrc={require("./Health.jpg")}
            title="Mental Health"
            titleStyle={styles.titles}
            containerStyle={{ backgroundColor: "white" }}
          />
          <Divider style={styles.dividerStyle} />
          <Divider style={styles.divider} />
          <Tile
            imageSrc={require("./Education.jpg")}
            title="Post Secondary Education"
            titleStyle={styles.titles}
            containerStyle={{ backgroundColor: "white" }}
          />
          <Divider style={styles.dividerStyle} />
          <Divider style={styles.divider} />
          <Tile
            imageSrc={require("./Ships.jpg")}
            title="Scholarships"
            titleStyle={styles.titles}
            containerStyle={{ backgroundColor: "white" }}
          />
          <Divider style={styles.dividerStyle} />
          <Divider style={styles.divider} />
          <Divider style={{ backgroundColor: "white", height: 65 }} />
        </View>
        </ScrollView>
      </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },

  headerText: {
    color: "#fff",
    fontSize: 20,
    fontFamily: "Courier",
    fontWeight: "bold"
  },
  divider: {
    backgroundColor: 'white',
    height: 10
  },
  dividerStyle: {
    backgroundColor: '#D8D8D8',
    height: 1
  },
  titles: {
    color: "black",
    fontWeight: "bold",
    fontFamily: "Avenir"
  }
});
