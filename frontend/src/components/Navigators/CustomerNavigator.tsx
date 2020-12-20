import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator, BottomTabBar} from '@react-navigation/bottom-tabs';

import HomeCostumer from '../../pages/Costumer/HomeCostumer';
import CostumerOrder from '../../pages/Costumer/CostumerOrder';
import MyinfoCostumer from '../../pages/Costumer/MyinfoCostumer';



const Tab = createStackNavigator();

const BottomTabNavigator: React.FC = () => {
  return (
    <Tab.Navigator initialRouteName="Home" activeColor="#FFF">

      <Tab.Screen 
        name="Home" 
        component={HomeCostumer}
        options={{
          tabBarLabel: 'Home',
          tabBarColor: '#FF6347'
        }} />
      
      <Tab.Screen 
        name="Order" 
        component={CostumerOrder} 
        options={{
          
          }}
        />

      <Tab.Screen 
        name="Myinfo" 
        component={MyinfoCostumer}
        options={{

        }}
     />


      
    </Tab.Navigator>
  );
}

export default BottomTabNavigator;



