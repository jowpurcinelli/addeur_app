import React, { useState } from 'react';
import { StyleSheet, View, Text, Dimensions } from 'react-native';
import MapView, { Marker, Callout, PROVIDER_GOOGLE } from 'react-native-maps';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import { RectButton } from 'react-native-gesture-handler';

import api from '../services/api';

import mapMarker from '../images/map-marker.png';
import { Feather } from '@expo/vector-icons';

interface Carriers{
  id: number;
  name: string;
  latitude: number;
  longitude: number;
}



export default function Homepage() {
  const navigation = useNavigation();

  const [carriers, setCarriers] = useState<Carriers[]>([]);

  useFocusEffect(() => {
    api.get('carriers').then(response => {
      setCarriers(response.data);
    });
  });
  

  function handleNavigateToCarrierDetails(id: number) {
    navigation.navigate('CarrierDetails', { id });
  }

  function handleNavigateToCreateOrder() {
    navigation.navigate('Orderdetails');
  }

  return (
    <View style={styles.container}>
      <MapView
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        initialRegion={{
          latitude: -34.913707,
          longitude: -56.170754,
          latitudeDelta: 0.018,
          longitudeDelta: 0.018
        }}
      >