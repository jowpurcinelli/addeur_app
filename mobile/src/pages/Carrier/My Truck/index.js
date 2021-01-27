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


  const user = {
    id: 10,
    name: '',
    isProvider: true,
    truck_information: {
      truck_type: '',
      truck_size: '',

    }

  }

  return(
    <ScrollView style={{backgroundColor: '#F2F2F2', flex: 1 }}>
      <HeaderComponent title="Manage my Trucks">
        
        
      </HeaderComponent> 
        
      
      
      <Container style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <Avatar 
          source={require('../../../../images/userAvatar.png')}
          />
        <Text 
          style={{color: 'black', fontSize: 16, paddingTop: 10, paddingLeft: 20}}
          >
            {user.name}
          
        </Text>
        <Button
          style={{alignItems: 'center', justifyContent: 'center', paddingLeft: 45}}>
          <Text style={{color: '#0382EB'}}>Edit</Text>
        </Button>
      </Container>
      
      
      
      <Container>
        
      </Container>


    </ScrollView>
    
  )
}


export default Myinfo;
