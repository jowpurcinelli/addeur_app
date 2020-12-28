import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View } from 'react-native';


import Welcome from './src/pages/Welcome';
import SplashScreenGif from './src/pages/SplashScreen';
import CostumerOrder from './src/pages/Costumer/CostumerOrder';
import OrderDetailsButton from './src/components/OrderDetailsButton';
import CostumerRoutes from './src/routes/routes.costumer';
import HomeCostumer from './src/pages/Carrier/HomeCostumer';

// const Button = OrderDetailsButton.call(Option)

export default function App() {
  const initialLoginState = {
    isLoading: true,
    userName: null,
    userToken: null
  };


  return (
      
      <Welcome />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
