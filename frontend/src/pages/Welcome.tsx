import React from 'react';
//import Logo from '../../../images';
import {View, Image, Text, StyleSheet, TouchableOpacity, SafeAreaView} from 'react-native';
// import { useNavigation, useFocusEffect } from 'react-navigation-native';


import api from '../services/api';


const Welcome = () => {
  // const navigation = useNavigation();

  // function handleNavigateToDriver(id: number) {
  //   navigation.navigate('DriverPage', { id });
  // }


  
  return(
    <SafeAreaView style={styles.container}>
      <TouchableOpacity style={styles.card} >
        <Image
          style={{ width:109, height:109 }}
          source={require("../../images/Carrier.svg")}
        />
        <Text style={styles.text}></Text>
        
        <Image
          style={{ width:109, height:109 }}
          source={require("../../images/Costumer.svg")}
        />
      
        <Text style={styles.container} > Click here if you are a Driver</Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    backgroundColor: "linear-gradient(220.73deg, #63D47C -10.67%, #0688EE 96%)",

  },
  card: {
    position: 'absolute',
    width: 301,
    height: 205,
    left: 57,
    top: 306,
    fontFamily: 'Nunito_800ExtraBold',
    fontSize: 16,
    color: '#0382EB',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontFamily: 'Noto Sans',
    textAlign: 'center',
    fontSize: 20,
  }
})

export default Welcome;

