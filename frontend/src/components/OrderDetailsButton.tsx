import React, {useState} from 'react';
import {View, Switch, StyleSheet, TouchableOpacity} from 'react-native';
import { MaterialIcons } from "@expo/vector-icons";

import SwitchSelector from "react-native-switch-selector";



interface options {
  label: String,
  value: String

}

const OrderDetailsButton = () => {


  // const [buttonTitle, setButtonTitle] = useState('');
  const [isEnabled, setIsEnabled] = useState(false);
  // const [buttonValue, setButtonValue] = useState();
  const toggleSwitch = (value) => {
    //To handle switch toggle
    setIsEnabled(value);
    //State changes according to switch
  };
  const options = [
    { label: '', value: '' },
  ];

  return (
      <View style={styles.container}>
        <SwitchSelector
          style={styles.switch}
          options={options}
          textColor={"#7C7C7C"}
          onPress={toggleSwitch}
          selectedTextContainerStyle={styles.title} 
          selectedColor={"#66CC7D"}
          buttonColor={"#E5E7E8"}

    />
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,


    },
    title: {
      color: '#FFFFFF',
      fontSize: 30,
      fontFamily: 'Nunito_700Bold',
    },
    switch: {
      color: '#66CC7D',
      position: 'relative',

      alignItems: "center",
      justifyContent: "center"
    }


});

export default OrderDetailsButton;