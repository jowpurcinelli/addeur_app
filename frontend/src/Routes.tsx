import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator, BottomTabBar} from '@react-navigation/bottom-tabs';

import { createStackNavigator } from '@react-navigation/stack';

import Header from './components/Header';

import Maptruck from './pages/Maptruck';
import Login from './pages/Login';
import Order from './pages/Order';


const Tab = createStackNavigator();

const { Navigator, Screen } = createStackNavigator();

const Routes: React.FC = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false, cardStyle: { backgroundColor: '#f2f3f5' } }}>

      <Screen name="Home" component={Maptruck} />
      
      <Screen 
        name="Order" 
        component={Order} 
        options={{
          headerShown: true,
            header: () => <Header showCancel={false} title="Order" />
          }}
        />

      <Screen 
        name="Myinfo" 
        component={Myinfo}
        options={{
          headerShown: true,
          header: () => <Header title="Seleccione en el mapa" />
        }}
     />

      <Screen 
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