import React from 'react';
import {View, ScrollView} from 'react-native';

import { Container, Button, Text} from './styles';
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
    <ScrollView style={{backgroundColor: '#F2F2F2', flex: 1}}>
      <Container>
        <Button
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
        </Button>

        <Button
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
        </Button>
  
        <Button
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
        </Button>
      </Container>

      <Container>
        <Button
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
        </Button>
        <Button
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
        </Button>
        <Button
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
        </Button>
      </Container>

      <TouchableOpacity
        style={{borderRadius: 35, borderColor: '#FB5656', borderRadius: 20, height: 56, justifyContent: 'center'}}
        onPress={handleNavigateToLogout}
      >

          <Text style={{color: '#FB5656'}}>Log out</Text>

      </TouchableOpacity>
    </ScrollView>
  )
}


export default Myinfo;
