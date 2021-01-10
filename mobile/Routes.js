import React, { Component } from 'react';
import { View, Text } from 'react-native';
import {StackNavigator} from "react-navigation"
import { NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Video from 'react-native-video';

import Welcome from './src/pages/Welcome';
import Order from './src/pages/Costumer/OrderCostumer';
import Myinfo from './src/pages/Costumer/MyinfoCostumer';

// import SplashScreen from "./images/SplashScreen.mp4";
function SplashScreen({navigation}) {
  return(
    <Video 
      style={{flex:1}} 
      source={require('./images/SplashScreen.mp4')}
    />

  )
}

const Stack = createStackNavigator();

export default function Routes() {
  return(
  <NavigationContainer>
    <Stack.Navigator initialRouteName="SplashScreen" headerMode="none">
      <Stack.Screen name="Welcome" component={Welcome}/>
      <Stack.Screen name="Order" component={Order}/>
      <Stack.Screen name="Myinfo" component={Myinfo}/>


    </Stack.Navigator>
  </NavigationContainer>
  )
}
