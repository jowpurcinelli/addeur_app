import React, { useState } from 'react';
import { Text, ScrollView} from 'react-native';
import {useFormik} from 'formik';

import {useNavigation, useRoute} from '@react-navigation/native';
import { TextInputMask } from 'react-native-masked-text';

import { Button, Icon, List, ListItem } from '@ui-kitten/components';
import { RectButton } from 'react-native-gesture-handler';

import {Container} from './styles';
import TruckIcon from '../../../../images/TruckIcon.svg';

const Order = {
  id: 'B345674',
  description: 'La puta madre',

};

// const data = new Array().fill({
//   title: {Order.id},
//   description: {Order.description}
// });

function ListOrdersCostumer() {

  const renderItem = ({ item, index }) => (
    <ListItem
      title={`${item.title} ${index + 1}`}
      description={`${item.description} ${index + 1}`}
    />
  );



  return (
    <ScrollView style={{backgroundColor: '#f1f1f1'}}>
      <Container>
        <TruckIcon />
        <Text>Booking ID 123456</Text>
       
      </Container>
    </ScrollView>

    
  )  
}






export default ListOrdersCostumer;
