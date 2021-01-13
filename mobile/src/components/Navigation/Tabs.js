import React, { Component } from 'react';
import {View, Image, TouchableOpacity} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator, BottomTabBar} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import { useIsFocused } from '@react-navigation/native';

import Home from '../../pages/Costumer/HomeCostumer'
import Welcome from '../../pages/Welcome';
import Order from '../../pages/Costumer/OrderCostumer';
import Myinfo from '../../pages/Costumer/MyinfoCostumer';
import OrdersCostumer from '../../pages/Costumer/OrdersCostumer';

// import {icons} from '../../constants/icons';

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator 
      initialRouteName='Home'>
      <Tab.Screen
        name="Home"
        component={Order}
        options={{
          tabBarIcon:({focused}) => (
            <Icon 
              name='ios-home'
              color={focused ? '#0382EB' : '#B8B8B8'}
              size={26}
            />
          )
        }}
      />   

      <Tab.Screen
        name="Orders"
        component={OrdersCostumer}
        options={{
          tabBarIcon:({focused}) => (
            <Icon 
              name='list-outline'
              color={focused ? '#0382EB' : '#B8B8B8'}
              size={26}
            />
          )
        }}
      />
      <Tab.Screen
        name="MyInfo"
        component={Myinfo}
        options={{
          tabBarIcon:({focused}) => (
            <Icon 
              name='person'
              color={focused ? '#0382EB' : '#B8B8B8'}
              size={26}
            />
          )
        }}
      />
    </Tab.Navigator>
  )
}

export default Tabs;