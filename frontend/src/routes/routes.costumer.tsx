import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator, BottomTabBar} from '@react-navigation/bottom-tabs';

import HomeCostumer from '../pages/Costumer/HomeCostumer';
import CostumerOrder from '../pages/Costumer/CostumerOrder';
import MyinfoCostumer from '../pages/Costumer/MyinfoCostumer';


import Icon from 'react-native-vector-icons/Ionicons';


const Tab = createStackNavigator();

const CostumerRoutes = (navigation) => {
  return (
    <Tab.Navigator initialRouteName="Home" activeColor="#FFF">

      <Tab.Screen 
        name="Home" 
        component={HomeCostumer}
        options={{
          tabBarLabel: 'Home',
          tabBarColor: '#FFF',
          tabBarIcon: ({color}) => (
            <Icon name='ios-home' color={color} size={26} />
          ),
        }}
        onPress={() => { 
          navigation.navigate('HomeCostumer')
        }}
        />
      
      <Tab.Screen 
        name="Order" 
        component={CostumerOrder} 
        options={{
          tabBarLabel: 'Order',
          tabBarColor: '#FFF',
          tabBarIcon: ({color}) => (
            <Icon name='list-outline' color={color} size={26} />
          ),
          }}
          onPress={() => { 
            navigation.navigate('CostumerOrder')
          }}
        />

      <Tab.Screen 
        name="Myinfo" 
        component={MyinfoCostumer}
        options={{
          tabBarLabel: 'Myinfo',
          tabBarColor: '#FFF',
          tabBarIcon: ({color}) => (
            <Icon name='ios-person' color={color} size={26} />
          ),
        }}
        onPress={() => { 
          navigation.navigate('MyinfoCostumer')
        }}
     />


      
    </Tab.Navigator>
  );
}

export default CostumerRoutes;



