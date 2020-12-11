import React, {useState} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator, BottomTabBar} from '@react-navigation/bottom-tabs';

import { createStackNavigator } from '@react-navigation/stack';

import MyinfoCostumer from '../pages/Costumer/MyinfoCostumer';
import HomeCostumer from '../pages/Costumer/HomeCostumer';
import Order from '../pages/Costumer/CostumerOrder';


import Login from '../pages/Login';


const Tab = createStackNavigator();

const MyinfoPage = useState();

//createDrawerNavigator = ({MyinfoPage});


const RoutesCostumer: React.FC = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false, cardStyle: { backgroundColor: '#f2f3f5' } }}>

      <Tab.Screen name="Home" component={Homepage} />
      
      <Tab.Screen 
        name="Order" 
        component={Order} 
        />

      <Tab.Screen 
        name="Myinfo" 
        component={Myinfo}/>

      <Tab.Screen 
        name="OrphanageData" 
        component={}
        options={{
          headerShown: true,
          header: () => <Header title="Home" />
          }}
      />
      
    </Tab.Navigator>
  );
}

export default Routes;