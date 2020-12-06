import React from 'react';
//import Logo from '../../../images';
import {View, Image, Text, StyleSheet, TouchableOpacity} from 'react-native';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import api from '../services/api';

interface Driver {
  id: number;
  name: string;

}

interface Customer {
  id: number;
  name: string;
}

const Choicesection = () => {
  const navigation = useNavigation();

  function handleNavigateToDriver(id: number) {
    navigation.navigate('DriverPage', { id });
  }


  
  return(
    <View>
      <TouchableOpacity 
        onPress={

      } >

        <Image
          style={{ width:450, height:350 }}
          source={require("../../../images/Logo.svg")}
        />
        
        <Image
          style={{ width:450, height:350 }}
          source={require("../../../images/Logo.svg")}
        />
      
        <Text style={styles.container} > Click here if you are a Driver</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",

  },
  text: {
    fontFamily: 'Nunito_800ExtraBold',
    fontSize: 16,
    color: '#FFF',
  }
})

export default Choicesection;

