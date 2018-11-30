import React from 'react';
import { StyleSheet, Text, View, FlatList} from 'react-native';
import { createStackNavigator } from 'react-navigation';
import AnnouncementListItem from "../components/AnnouncementListItem";

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

    render() {
        return(
            <View>
                <FlatList
                    data={[
                        {key: 'Devin'},
                        {key: 'Jackson'},
                        {key: 'James'},
                        {key: 'Joel'},
                        {key: 'John'},
                        {key: 'Jillian'},
                        {key: 'Jimmy'},
                        {key: 'Julie'},
                    ]}
                    renderItem={({item}) => <AnnouncementListItem announcement={item.key} details={"Details"} desc={"Description"}/>}
                />
            </View>
        );
    }
};

const styles = StyleSheet.create({

});
