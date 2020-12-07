import React, {useState} from 'react';
import {View, Switch, StyleSheet, TouchableOpacity} from 'react-native';
import { MaterialIcons } from "@expo/vector-icons";

import SwitchSelector from "react-native-switch-selector";



interface options {
  label: String,
  value: String

}

const OrderDetailsButton = () => {



  const [isEnabled, setIsEnabled] = useState(false);
  // const [buttonValue, setButtonValue] = useState();

  const toggleButton = () => setIsEnabled(previousState => !previousState);
  return (
      <View style={styles.container}>
        <SwitchSelector
          options={setIsEnabled}
          textColor={"#7C7C7C"}
          onPress={toggleButton}
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
      alignItems: "center",
      justifyContent: "center"
    },
    title: {
      color: '#FFFFFF',
      fontSize: 30,
      fontFamily: 'Nunito_700Bold',
    },


});

export default OrderDetailsButton;