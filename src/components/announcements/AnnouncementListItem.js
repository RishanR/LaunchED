import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import { Card} from 'react-native-elements'
import { createStackNavigator } from 'react-navigation';
import {Image} from "react-native-animatable";

export default class AnnouncementListItem extends React.Component {

    render() {
        return(
          <TouchableOpacity
            delayPressIn={70}
            activeOpacity={0.8}
            onPress={() => {
              //TODO:
              // this.props.navigateDetails();
            }}
          >
            <Card containerStyle={styles.card}>
              <View style={styles.rowContainer}>
                <Image source={require('../../images/LaunchED-Rocket.png')} style={styles.cardIcon}/>
                <View style={styles.textContainer}>
                  <Text numberOfLines={1} style={styles.announcement}>{this.props.announcement}</Text>
                  <Text style={styles.details}>{this.props.date}</Text>
                  <Text style={styles.details}>{this.props.time}</Text>
                  <Text style={styles.post} numberOfLines={2}>{this.props.desc}</Text>
                </View>
              </View>
            </Card>
          </TouchableOpacity>
        );
    }
};

const styles = StyleSheet.create({
  card: {
    margin: 0,
    marginBottom: 5,
    borderWidth: 0,
    elevation: 0.5,
  },

  cardIcon: {
    width: 40,
    height: 40,
  },

  rowContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems:'center',
  },

  textContainer: {
    paddingLeft: 30,
  },

  announcement: {
    fontSize:20,
    fontWeight: 'bold',
  },

  details: {
    fontSize:18,
  }

});
