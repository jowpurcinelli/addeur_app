import React from 'react';
import {View, ScrollView, Image} from 'react-native';

import { Container, Button, Text, Avatar} from './styles';
import Icon from 'react-native-vector-icons/Ionicons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import HeaderComponent from '../../../components/Header';


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
  
  // const profile = useSelector(state => state.user.profile);
  // const dispatch = useDispatch();



  return(
    <ScrollView style={{backgroundColor: '#F2F2F2', flex: 1 }}>
      <HeaderComponent title="My info">
        
        <Text>My info</Text>
        
      </HeaderComponent> 
        
      
      
      <Container style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <Avatar 
          source={require('../../../../images/userAvatar.png')}
          />
        <Text style={{color: 'black', fontSize: 16, paddingTop: 10, paddingLeft: 20}}>
          Torsten Paulsson
        </Text>
        <Button
          style={{alignItems: 'center', justifyContent: 'center', paddingLeft: 45}}>
          <Text style={{color: '#0382EB'}}>Edit</Text>
        </Button>
      </Container>
      
      
      
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
            name='pricetags-outline'
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
            name='wallet-outline'
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
        style={{flex: 1, marginTop: 20,borderRadius: 25, borderWidth: 3 ,borderColor: '#FB5656', height: 55, width: 225, alignSelf: 'center', alignItems: 'center', justifyContent: 'center'}}
        onPress={handleNavigateToLogout}
      >

          <Text style={{color: '#FB5656'}}>Log out</Text>

      </TouchableOpacity>
    </ScrollView>
    
  )
}


export default Myinfo;
