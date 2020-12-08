import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View } from 'react-native';


import Welcome from './src/pages/Welcome';

import OrderDetailsButton from './src/components/OrderDetailsButton';
import Routes from './src/Routes';

// const Button = OrderDetailsButton.call(Option)

export default function App() {
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
