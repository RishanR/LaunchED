import React from 'react';
import { Alert, Text, TextInput, StyleSheet, View } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';

export default class App extends React.Component {
    constructor(props) {
        super(props);

        this.inputRefs = {};

        this.state = {
            favColor: undefined,
            items: [
                {
                    label: 'Light',
                    value: 'light',
                },
            ],
        };
    }

    componentDidMount() {
        // if the component is using the optional `value` prop, the parent
        // has the abililty to both set the initial value and also update it
        setTimeout(() => {
            this.setState({
                favColor: 'dark',
            });
        }, 1000);
    }


    render() {
        return (
            <View style={styles.container}>
                <View style={{ paddingVertical: -200 }} />
                <RNPickerSelect
                    placeholder={{
                        label: 'Dark',
                        value: null,
                    }}
                    items={this.state.items}
                    onValueChange={(value) => {
                        this.setState({
                            favColor: value,
                        });
                    }}
                    onUpArrow={() => {
                        this.inputRefs.name.focus();
                    }}
                    onDownArrow={() => {
                        this.inputRefs.picker2.togglePicker();
                    }}
                    style={{ ...pickerSelectStyles }}
                    value={this.state.favColor}
                    ref={(el) => {
                        this.inputRefs.picker = el;
                    }}
                />
                <View style={{ paddingVertical: 5 }} />
            </View>
        );
      }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#303030',
        width: 280,
        marginLeft: 90,
        marginTop: -84,

      //  justifyContent: 'center',
        //paddingHorizontal: 5,
    },
});

const pickerSelectStyles = StyleSheet.create({
    inputIOS: {
        fontSize: 20,
        paddingTop: 13,
        marginLeft: 10,
        paddingHorizontal: 4,
        paddingBottom: 12,
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 4,
        backgroundColor: '#303030',
        color: 'white',
    },
});
