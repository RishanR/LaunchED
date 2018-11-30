import React from 'react';
import { StyleSheet, Text, View, FlatList} from 'react-native';
import { createStackNavigator } from 'react-navigation';

export default class AnnouncementListItem extends React.Component {

    render() {
        return(
            <View>
                <Text>{this.props.announcement}</Text>
                <Text>{this.props.details}</Text>
                <Text>{this.props.desc}</Text>
            </View>
        );
    }
};

const styles = StyleSheet.create({

});
