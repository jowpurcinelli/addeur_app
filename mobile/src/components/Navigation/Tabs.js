import React, { Component } from 'react';
import {View, Image, TouchableOpacity} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator, BottomTabBar} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import { useIsFocused } from '@react-navigation/native';

// import {Home} from '../../pages/Costumer/Home';
import {Welcome} from '../../pages/Welcome';
import {Order} from '../../pages/Costumer/Order'

// import {icons} from '../../constants/icons';

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator initialRouteName='Home' >
      <Tab.Screen
        name="Home"
        component={Home}
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
        name="Order"
        component={Order}
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
    </Tab.Navigator>
  )
}

export default Tabs;