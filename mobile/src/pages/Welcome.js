import React from 'react';
import {View, ImageBackground, Image, Text, StyleSheet, TouchableOpacity} from 'react-native';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
// import api from '../services/api';


import {Myinfo} from './Costumer/MyinfoCostumer';
import {Order} from './Costumer/OrderCostumer';


const Welcome = () => {
  
  const navigation = useNavigation();

  function handleNavigateToCarrier() {
    navigation.navigate('MyinfoCostumer')
  }
  function handleNavigateToCostumer() {
    navigation.navigate('Order')
  }
  return(
    <View style={{flex: 1}}>
      <ImageBackground
        style={{flex:1}}
        source={require("../../images/back.png")}

      >
      <View style={styles.container}>
        <Image
          style={styles.logo}
          source={require("../../images/Logo.png")}
        />
        <Text style={styles.title}>What is your role?</Text>
      
      <TouchableOpacity  
        style={styles.card}
        onPress={handleNavigateToCarrier}
      >  
          <Image
            source={require("../../images/Carrier.png")}
            
          />
          
        <Text style={styles.text}>I'm a carrier</Text>
      </TouchableOpacity> 
      <TouchableOpacity 
        style={styles.card2}
        onPress={handleNavigateToCostumer}
      >
        
        <Image
          source={require("../../images/Costumer.png")}
        />
      
        <Text style={styles.text} > I'm a Costumer</Text>
      </TouchableOpacity>
      </View>
      </ImageBackground>  
    </View>
  

  )}


const styles = StyleSheet.create({

  container: {

    justifyContent: 'center',
    flexDirection: 'column',
    alignContent: 'center',
    alignItems: 'center',
  },
  logo: {
    position: 'relative',
    marginTop: 50,

    
    

  },
  backgroundImage: {
    resizeMode: 'cover',
  },

  card: {
    position: 'relative',
    fontFamily: 'Nunito_800ExtraBold',
    marginTop: 40,
    marginBottom: 20,
    height:180,
    width: 280,
    fontSize: 16,
    backgroundColor: '#0382EB',
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    
  },


  title: {
    position: 'relative',
    textAlign: 'auto',
    fontSize: 24,
    color: 'white',
    fontWeight: '700',
    alignContent: 'center',
    justifyContent: 'center',
  },
    card2: {
    position: 'relative',
    fontFamily: 'Nunito_800ExtraBold',
    marginBottom: 60,
    height: 180,
    fontSize: 16,
    width: 280,
    backgroundColor: '#0382EB',
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',  
},

  text: {
    fontFamily: 'Noto Sans',
    textAlign: 'auto',
    fontSize: 20,
    color: 'white',
  },

})

export default Welcome;

