import React, { useState } from 'react';
//import Logo from '../../../images';

import {View, ImageBackground, Image, Text, StyleSheet, TouchableOpacity} from 'react-native';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import api from '../services/api';

import SplashScreenGif from '../components/SplashScreen';
import { LinearGradient } from 'expo-linear-gradient';

interface Carrier {
  id: number,
  name: string,
  
}


<<<<<<< HEAD
const Welcome = () => {
=======

const Choicesection = () => {
>>>>>>> 9b2292a71230655680a866442e46723768ab28ba
  const navigation = useNavigation();

  const [carrier, setCarrier] = useState<Carrier[]>([])

  useFocusEffect(() => {
    api.get('carriers').then(response => {  
      setCarrier(response.data)
    });
  });


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
<<<<<<< HEAD
    <View
      style={{ 
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(6, 136, 238, 1)',
        

      }}>
          <LinearGradient
        // Background Linear Gradient
            colors={['rgba(99, 212, 124, 1)','transparent']}
            style={{
              position: 'absolute',
              left: 0,
              right: 0,
              top: 0,
              height: 300,
        }}
      />
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
=======
    <View style={styles.container}>
      <ImageBackground
        source={require("../images/back.png")}
        style={{ width: "100%", height: "100%" }}
      >
    


        <Image
          style={{ width:450, height:350 }}
          source={require("../../../images/logo.svg")}
        />
>>>>>>> 9b2292a71230655680a866442e46723768ab28ba
        
        <Image
          style={{ width:109, height:109 }}
          source={require("../../images/Costumer.png")}
        />
      
        <Text style={styles.text} > I'm a Costumer</Text>
      </TouchableOpacity>
<<<<<<< HEAD

=======
      </ImageBackground>
>>>>>>> 9b2292a71230655680a866442e46723768ab28ba
    </View>
  

  )
}

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

