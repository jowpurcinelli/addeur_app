import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator, BottomTabBar} from '@react-navigation/bottom-tabs';

import Homepage from '../pages/Costumer/HomeCostumer';
import CostumerOrder from '../pages/Costumer/CostumerOrder';
import Myinfo from './pages/Myinfo';



const Tab = createStackNavigator();

const BottomTabNavigator: React.FC = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false, cardStyle: { backgroundColor: '#f2f3f5' } }}>

      <Tab.Screen 
        name="Home" 
        component={Homepage} />
      
      <Tab.Screen 
        name="Order" 
        component={Order} 
        options={{
          
          }}
        />

      <Tab.Screen 
        name="Myinfo" 
        component={Myinfo}
        options={{

        }}
     />


      
    </Tab.Navigator>
  );
}

export default BottomTabNavigator;



