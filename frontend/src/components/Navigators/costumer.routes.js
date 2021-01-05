import React, { Component } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator, BottomTabBar} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import { useIsFocused } from '@react-navigation/native';

//pages
import HomeCostumer from '../../pages/Costumer/HomeCostumer';
import CostumerOrder from '../../pages/Costumer/CostumerOrder';
import MyinfoCostumer from '../../pages/Costumer/MyinfoCostumer';


const Tab = createStackNavigator();



const CostumerRoutes = (navigation) => {

  return (
    <Tab.Navigator initialRouteName='Home' >

      <Tab.Screen 
        name="Home" 
        component={HomeCostumer}
        options={{
          tabBarLabel: 'Order',
          tabBarIcon: ({color}) => (
            <Icon name='ios-home' color={useIsFocused ? '#0382EB' : '#B8B8B8'} size={26} />
          ),
        }}

        />
      
      <Tab.Screen 
        name="Order" 
        component={CostumerOrder} 
        options={{
          tabBarLabel: 'Order',
          tabBarColor: '#F0F0F0',
          tabBarIcon: ({color}) => (
            <Icon name='list-outline' color={useIsFocused ? '#0382EB' : '#B8B8B8'} size={26} />
          ),
          }}

      />

      <Tab.Screen 
        name="Myinfo" 
        component={MyinfoCostumer}
        options={{
          tabBarLabel: 'Myinfo',
          tabBarColor: '#F0F0F0',
          tabBarIcon: ({color}) => (
            <Icon name='ios-person' color={useIsFocused ? '#0382EB' : '#B8B8B8'} size={26} />
          ),
        }}
     />
    </Tab.Navigator>
  );
}

export default CostumerRoutes;
