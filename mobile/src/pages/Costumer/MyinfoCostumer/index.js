import React from 'react';
import {View, Text} from 'react-native';

import { Container } from './styles';
import Icon from 'react-native-vector-icons/Ionicons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation, useFocusEffect } from '@react-navigation/native';


const Myinfo = () => {
  const navigation = useNavigation();
  
  function handleNavigateToPoints() {
    navigation.navigate('Points')
  };
  function handleNavigateToCoupon() {
    navigation.navigate('Coupon')
  };
  function handleNavigateToWallet() {
    navigation.navigate('Wallet')
  };
  function handleNavigateToSettings() {
    navigation.navigate('Settings')
  };
  function handleNavigateToHelp() {
    navigation.navigate('Help')
  };
  function handleNavigateToAboutUs() {
    navigation.navigate('AboutUs')
  };
  function handleNavigateToLogout() {
    navigation.navigate('Logout')
  }
  
  
  return(
    <Container>
      <Text>Hello wasasasorld</Text>
    </Container>
  )
}


export default Myinfo;
