import React, { useState } from 'react';
import { Text, ScrollView, View} from 'react-native';
import {useFormik} from 'formik';

import {useNavigation, useRoute} from '@react-navigation/native';
import { TextInputMask } from 'react-native-masked-text';

import { Button, Icon, List, ListItem, Layout } from '@ui-kitten/components';
import { RectButton } from 'react-native-gesture-handler';

import {Container} from './styles';
import TruckIcon from '../../../components/Icons/TruckIcon';

const Order = {
  id: 'B345674',
  description: 'La puta madre',

};

// const data = new Array().fill({
//   title: {Order.id},
//   description: {Order.description}
// });

const ListOrdersCostumer = ({item, index}) => {


 
  



  return (
    
    <ScrollView>
      <Container>
        <TruckIcon />
        <Text>Booking ID 123456</Text>
        <View style={{flexDirection: 'row', alignItems: 'right'}}>
          <Button appearance='outline'></Button>


        </View>
       
      </Container>
    </ScrollView>

    
  )  
}






export default ListOrdersCostumer;
