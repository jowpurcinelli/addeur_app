import React, {useState} from 'react';
import {StyleSheet, Dimensions} from 'react-native';

import { useNavigation, useFocusEffect } from '@react-navigation/native';

import api from '../../services/api';



interface Costumer {
  id: number,
  name: string,
  images: Array<{
    id:string;
    //url:string;   ?
  }>
  
}

const MyinfoCostumer = () => {
  const navigation = useNavigation();

  const [costumer, setCostumer] = useState<Costumer[]>([])

  useFocusEffect(() => {
    api.get('costumers').then(response => {  
      setCostumer(response.data)
    });
  });


  function handleNavigateToCarrier() {
    navigation.navigate('HomeCarrier')
  };
  function handleNavigateToCostumer() {
    navigation.navigate('HomeCostumer')
  };
  
  

};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});


export default MyinfoCostumer;