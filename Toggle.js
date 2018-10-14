import SwitchSelector from "react-native-switch-selector";


const options = [
  {value: "1" },
  {value: "2" }
];

<SwitchSelector
  options={options}
  initial={0}
  onPress={value => console.log(`Call onPress with value: ${value}`)}
/>;
<SwitchSelector
    initial={0}
    onPress={value => this.setState({ gender: value })}
    textColor={'purple'} //'#7a44cf'
    selectedColor={'white'}
    buttonColor={'purple'}
    borderColor={'purple'}
    hasPadding = {true}
    options={[
        {value: 'f'}, //images.feminino = require('./path_to/assets/img/feminino.png')
        {value: 'm'} //images.masculino = require('./path_to/assets/img/masculino.png')
    ]} />
