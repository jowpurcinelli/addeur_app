import React, {useState} from 'react';
import {View, Switch, StyleSheet, TouchableOpacity} from 'react-native';
import { MaterialIcons } from "@expo/vector-icons";


import SwitchSelector from "react-native-switch-selector";


// useEffect(() => {
//   api.post(`/buttontitle/option/${id}`).then(({ data }) => {
//     setButtonTitle(data)
//   })
// }, [id])


const OrderDetailsButton = () => {

  interface Options {
    label: String,
    value: String
   
  }

  const [buttonValue, setButtonValue] = useState<Options>();

  // const [buttonTitle, setButtonTitle] = useState('');
  const [isEnabled, setIsEnabled] = useState(undefined);
  // const [buttonValue, setButtonValue] = useState();
  const options = [
    { label: '', value: '' },
  ];
  
  const toggleSwitch = (value) => {
    //To handle switch toggle
    setIsEnabled(setButtonValue)
    
    //State changes according to switch
  };


  return (
      <View style={styles.container}>
        <Switch
          thumbColor="#ffffff" 
          trackColor={{ false: '#ccc', true: '#39CC83' }}
          value={undefined}
          onValueChange={toggleSwitch}
          style={styles.switch}
          options={setButtonValue}
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



