import React, { useState } from 'react';
import { 
  View,
  ScrollView, 
  StyleSheet, 
  Switch, 
  TextInput, 
  TouchableOpacity, 
  Image,
  Text
} from 'react-native';

import {useNavigation, useRoute} from '@react-navigation/native';
import { TextInputMask } from 'react-native-masked-text';


import { RectButton } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';

import {Container} from './styles';
import TruckIcon from '../../../../images/TruckIcon.svg';
import {useFormik} from 'formik';



const OrdersCostumer = () => {

  return (
    <ScrollView style={{backgroundColor: '#f1f1f1'}}>
      <Container>
        <Text>Booking ID 123456</Text>
       
      </Container>
    </ScrollView>

    
  )  
}






export default OrdersCostumer;
