import React, { useState } from 'react';
import { StyleSheet, View, Text, Dimensions } from 'react-native';
import MapView, { Marker, Callout, PROVIDER_GOOGLE } from 'react-native-maps';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import { RectButton } from 'react-native-gesture-handler';

import api from '../services/api';

import Header from '../../components/Header';

import mapMarker from '../images/map-marker.png';
import { Feather } from '@expo/vector-icons';

interface Cargos{
  id: number;
  name: string;
  latitude: number;
  longitude: number;
}



const HomeCarrier = () => {
  const navigation = useNavigation();

  const [cargos, setCargos] = useState<Cargos[]>([]);

  useFocusEffect(() => {
    api.get('cargos').then(response => {
      setCargos(response.data);
    });
  });
  

  function handleNavigateToCargoDetails(id: number) {
    navigation.navigate('CargoDetails', { id });
  }

  function handleNavigateTo() {
    navigation.navigate('OrderDetails');
  }



  return (
    <View style={{flex: 1}}>
      <Header title={'Find a truck'}/>
      <MapView
        provider={PROVIDER_GOOGLE}
        initialRegion={{
          latitude: 0,
          longitude:0 ,
          latitudeDelta: 0,
          longitudeDelta: 0
        }}/>
    </View>
  )}
      


export default HomeCarrier;