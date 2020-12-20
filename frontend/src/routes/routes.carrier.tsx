import React, {useState} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator, BottomTabBar} from '@react-navigation/bottom-tabs';

import { createStackNavigator } from '@react-navigation/stack';


import MyinfoCarrier from '../pages/Carrier/MyinfoCarrier';
import HomeCarrier from '../pages/Costumer/HomeCostumer';
import CostumerCarrier from '../pages/Carrier/CarrierOrder';


import Login from './pages/Login';


const Tab = createStackNavigator();

const MyinfoPage = useState();

//createDrawerNavigator = ({MyinfoPage});


const RoutesCarrier: React.FC = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false, cardStyle: { backgroundColor: '#f2f3f5' } }}>

      <Tab.Screen name="Home" component={Homepage} />
      
      <Tab.Screen 
        name="Order" 
        component={Order} 
        options={{
          headerShown: true,
            header: () => <Header showCancel={false} title="Order" />
          }}
        />

      <Tab.Screen 
        name="Myinfo" 
        component={MyinfoCarrier}/>

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

export default RoutesCarrier;