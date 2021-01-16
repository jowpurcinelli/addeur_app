import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import Video from 'react-native-video';

import {SplashScreen} from './images/SplashScreen.mp4';

import {setCustomText} from 'react-native-global-props';

import Welcome from './src/pages/Welcome';
import Order from './src/pages/Costumer/OrderCostumer/index';
import Myinfo from './src/pages/Costumer/MyinfoCostumer';
import Tabs from './src/components/Navigation/Tabs';
import Routes from './Routes';


const customTextInputProps = {
  style: {
    fontFamily: 'NotoSans',
    color: 'black',
  }
};
setCustomText(customTextInputProps);

export default function App() {
  

 


  
  return (
    <Routes/>

  );
}


