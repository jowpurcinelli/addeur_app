import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator, BottomTabBar} from '@react-navigation/bottom-tabs';

import { createStackNavigator } from '@react-navigation/stack';

import Header from './components/Header';

import Homepage from './pages/Homepage';
import Login from './pages/Login';
import Order from './pages/Order';


const Tab = createStackNavigator();


const Routes: React.FC = () => {
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
        component={Myinfo}
        options={{
          headerShown: true,
          header: () => <Header title="Seleccione en el mapa" />
        }}
     />

      <Tab.Screen 
        name="OrphanageData" 
        component={OrphanageData}
        options={{
          headerShown: true,
          header: () => <Header title="Informe los datos" />
          }}
      />
      
    </Tab.Navigator>
  );
}

export default Routes;