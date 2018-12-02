import React from 'react';
import { StyleSheet, Text, View, FlatList} from 'react-native';
import { createStackNavigator } from 'react-navigation';
import AnnouncementListItem from "../components/announcements/AnnouncementListItem";
import {Login} from "./Login";
import AnnouncementsDetails from "../components/announcements/AnnouncementsDetails";
import {Signup} from "./Signup";
import {ForgotPassword} from "./ForgotPassword";

export default class Announcements extends React.Component {

    static navigationOptions = () => ({
        title: 'Announcements',
        headerStyle: {
            backgroundColor: "#4298f4",
            height: 56,
        },
        titleStyle: {
            color: '#FFFFFF'
        },
    });

    state = {
        //This is fake data
      data: [
          {announcement: 'PAC', date: "Tuesday", time: "7:45 am", desc: "All members meet in the big gym for a mandatory meeting."},
          {announcement: 'Senior Boys Basketball', date: "Wednesday", time: "7:00 am", desc: "Final Practice in big gym before our Thursday game."},
          {announcement: 'Junior Girls Volleyball', date: "Wednesday", time: "7:00 am", desc: "Practice in small gym"},
          {announcement: 'DECA', date: "Thursday", time: "11:40 pm", desc: "All members meet in room 202 for a mandatory meeting."},
          {announcement: 'SAC', date: "Thursday", time: "3:15 pm", desc: "We need to decide on what we need to do regarding the Semi-Formal"},
          {announcement: 'LaunchED', date: "Friday", time: "5:00 pm", desc: "Pages must be due by this week."},
          {announcement: 'Yearbook', date: "Monday, December 10th", time: "12:00 pm", desc: "Exec only meeting at Lunch in IT4"},
          {announcement: 'PAC', date: "Tuesday, December 11th", time: "7:00 am", desc: "All members meet in the big gym for a mandatory meeting."},
      ]
    };

    navigateDetails() {
      this.props.navigation.navigate('AnnouncementsDetailsScreen');
      console.warn(this.props.navigation)
    }

    render() {
        return(
            <View>
              <FlatList
                data={this.state.data}
                renderItem= {({item}) => <AnnouncementListItem navigateDetails = {this.navigateDetails} announcement={item.announcement} date={item.date} time={item.time} desc={item.desc}/>}
                keyExtractor={(item, index) => index.toString()}
              />
            </View>
        );
    }
};

const styles = StyleSheet.create({

});
