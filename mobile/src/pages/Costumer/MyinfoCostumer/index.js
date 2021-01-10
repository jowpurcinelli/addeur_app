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
    <View style={{backgroundColor: '#f1f1f1', flexDirection: "column"}}>
      {/* <Header /> */}
      <Container>
        {/* <Avatar /> */}
          <Text>User name</Text>
            {/* <Verified /> */}
      </Container>

      <Container>
        <TouchableOpacity
          onPress={handleNavigateToPoints}>
          <Icon 
            name='ellipse-outline'
            color={'#232D42'}
            size={26}
          />
            <Text>My collected points</Text>
            <Icon 
              name='chevron-forward-outline'
              color={'#232D42'}
              size={26}
            />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={handleNavigateToCoupon}>
          <Icon 
            name='ellipse-outline'
             //albums-outline
            color={'#232D42'}
            size={26}
          />
            <Text>Coupon</Text>
            <Icon 
              name='chevron-forward-outline'
             
              color={'#232D42'}
              size={26}
            />
        </TouchableOpacity>
    
        <TouchableOpacity
          onPress={handleNavigateToWallet}>

          <Icon 
            name='wallet'
            color={'#232D42'}
            size={26}
          />
            <Text>My Wallet</Text>
            <Icon 
              name='chevron-forward-outline'
              color={'#232D42'}
              size={26}
            />
        </TouchableOpacity>
      </Container>

      <Container>
        <TouchableOpacity
          onPress={handleNavigateToSettings}>

          <Icon 
            name='settings-outline'
            color={'#232D42'}
            size={26}
          />
            <Text>Settings</Text>
            <Icon 
              name='chevron-forward-outline'
              color={'#232D42'}
              size={26}
            />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={handleNavigateToHelp}>

          <Icon 
            name='help-circle-outline'
            color={'#232D42'}
            size={26}
          />
            <Text>Help Centre</Text>
            <Icon 
              name='chevron-forward-outline'

              color={'#232D42'}
              size={26}
            />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={handleNavigateToAboutUs}>

          <Icon 
            name='information-circle-outline'
            color={'#232D42'}
            size={26}
          />
            <Text>About us</Text>
            <Icon 
              name='chevron-forward-outline'
              color={'#232D42'}
              size={26}
            />
        </TouchableOpacity>
      </Container>

      <TouchableOpacity
        style={{borderRadius: 35, borderColor: '#FB5656', backgroundColor: null}}
        onPress={handleNavigateToLogout}
      >

          <Icon 
            name='information-circle-outline'
            color={'#232D42'}
            size={26}
          />
          <Text>Log out</Text>

      </TouchableOpacity>

    </View>
  )
}


export default Myinfo;
