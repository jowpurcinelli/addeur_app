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
    <View style={styles.container}>
      <ImageBackground
        source={require("../images/back.png")}
        style={{ width: "100%", height: "100%" }}
      >
    
      <Image
        style={{ width:63, height:79, bottom:220,}}
        source={require("../../images/Logo.png")}
      />
      <Text style={styles.title}>What is your role?</Text>
      <TouchableOpacity  
        style={styles.card}
        onPress={handleNavigateToCarrier}
      >  
          <Image
            style={{ width:109, height:109}}
            source={require("../../images/Carrier.png")}
            
          />
          
        <Text style={styles.text}>I'm a carrier</Text>
      </TouchableOpacity> 
      <TouchableOpacity 
        style={styles.card2}
        onPress={handleNavigateToCostumer}>  
        
        
        <Image
          style={{ width:109, height:109 }}
          source={require("../../images/Costumer.png")}
        />
      
        <Text style={styles.text} > I'm a Costumer</Text>
      </TouchableOpacity>
      </ImageBackground>  
    </View>
  

  )
}}

const styles = StyleSheet.create({

  card: {
    position: 'absolute',
    width: 321,
    height: 185,
    top: 276,
    fontFamily: 'Nunito_800ExtraBold',
    fontSize: 16,
    backgroundColor: '#0382EB',
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  container : {
    flex: 1,
  },
  title: {
    bottom: 190,    
    fontFamily: 'Noto Sans',
    textAlign: 'auto',
    fontSize: 24,
    color: 'white',
    fontWeight: '700',
    alignContent: 'center',
  },
  card2: {
    position: 'absolute',
    width: 321,
    height: 185,
    top: 480,
    fontFamily: 'Nunito_800ExtraBold',
    fontSize: 16,
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
  image: {
    position: 'absolute'
  }
})

export default Welcome;

