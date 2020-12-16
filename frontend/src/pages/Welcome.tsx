import React, { useState } from 'react';
//import Logo from '../../../images';

import {View, ImageBackground, Image, Text, StyleSheet, TouchableOpacity} from 'react-native';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import api from '../services/api';

import SplashScreenGif from '../components/SplashScreen';
import { LinearGradient } from 'expo-linear-gradient';


const Welcome = () => {

  const navigation = useNavigation();

  // const [carrier, setCarrier] = useState<Carrier[]>([])

  // useFocusEffect(() => {
  //   api.get('carriers').then(response => {  
  //     setCarrier(response.data)
  //   });
  // });


  function handleNavigateToCarrier() {
    navigation.navigate('HomeCarrier')
  }
  function handleNavigateToCostumer() {
    navigation.navigate('HomeCostumer')
  }
  // function handleNavigateToDriver() {
  //   navigation.navigate('DriverPage', { id });
  // }


//  <SplashScreenGif />
  return(
    <View style={{flex: 1}}>
      <ImageBackground
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
        // onPress={handleNavigateToCarrier}
      >  
          <Image
            source={require("../../images/Carrier.png")}
            
          />
          
        <Text style={styles.text}>I'm a carrier</Text>
      </TouchableOpacity> 
      <TouchableOpacity 
        style={styles.card2}
        // onPress={handleNavigateToCostumer}>  
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
    marginTop: 30,

    
    

  },
  backgroundImage: {
    resizeMode: 'cover',
  },

  card: {
    position: 'relative',
    fontFamily: 'Nunito_800ExtraBold',
    marginTop: 30,
    marginBottom: 30,
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
    fontFamily: 'Noto Sans',
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
    marginBottom: 50,
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

