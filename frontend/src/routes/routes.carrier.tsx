import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator, BottomTabBar} from '@react-navigation/bottom-tabs';

import HomeCarrier from '../pages/Carrier/HomeCarrier';
import CarrierOrder from '../pages/Carrier/CarrierOrder';
import MyinfoCarrier from '../pages/Carrier/MyinfoCarrier';


import Icon from 'react-native-vector-icons/Ionicons';


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
          tabBarIcon: ({color}) => (
            <Icon name='ios-home' color={color} size={26} />
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
          tabBarIcon: ({color}) => (
            <Icon name='list-outline' color={color} size={26} />
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
            <Icon name='ios-person' color={color} size={26} />
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



