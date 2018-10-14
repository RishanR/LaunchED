import React, { Component } from 'react';
import { Dropdown } from 'react-native-material-dropdown';

export default class DropDown extends Component {
  render() {
    let data = [{
      value: 'Dark',
    }, {
      value: 'Light',
    }];

    return (
      <Dropdown
        label='Theme'
        baseColor={'rgba(0, 0, 0, 255)'}
        textcolor={''}
        dropdownMargins= ''
        value={'Dark'}
        data={data}
      />
    );
  }
}
