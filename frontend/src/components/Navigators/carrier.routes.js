import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator, BottomTabBar} from '@react-navigation/bottom-tabs';

import HomeCarrier from '../../pages/Carrier/HomeCarrier';
import CarrierOrder from '../../pages/Carrier/CarrierOrder';
import MyinfoCarrier from '../../pages/Carrier/MyinfoCarrier';


import Icon from 'react-native-vector-icons/Ionicons';
import { useIsFocused } from '@react-navigation/native';


const Tab = createStackNavigator();

const CarrierRoutes = (navigation) => {
  return (
    <Tab.Navigator initialRouteName="Home" activeColor="#FFF">
      <Tab.Screen 
        name="Home" 
        component={HomeCarrier}
        options={{
          tabBarLabel: 'Home',
          tabBarColor: '#FFF',
          tabBarIcon: () => (
            <Icon name='ios-home' color={useIsFocused ? '#0382EB' : '#B8B8B8'} size={26} />
          ),
        }}
        onPress={() => { 
          navigation.navigate('HomeCarrier')
        }}
        />
      
      <Tab.Screen 
        name="Order" 
        component={CarrierOrder} 
        options={{
          tabBarLabel: 'Order',
          tabBarColor: '#FFF',
          tabBarIcon: () => (
            <Icon name='list-outline' color={useIsFocused ? '#0382EB' : '#B8B8B8'} size={26} />
          ),
          }}
          onPress={() => { 
            navigation.navigate('CarrierOrder')
          }}
        />

      <Tab.Screen 
        name="Myinfo" 
        component={MyinfoCarrier}
        options={{
          tabBarLabel: 'Myinfo',
          tabBarColor: '#FFF',
          tabBarIcon: ({color}) => (
            <Icon name='ios-person' color={useIsFocused ? '#0382EB' : '#B8B8B8'} size={26} />
          ),
        }}
        onPress={() => { 
          navigation.navigate('MyinfoCarrier')
        }}
     />


      
    </Tab.Navigator>
  );
}

export default CarrierRoutes;



