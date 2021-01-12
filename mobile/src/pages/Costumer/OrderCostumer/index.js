import React, { useState } from 'react';
import { 
  ScrollView, 
  StyleSheet, 
  Switch, 
  TextInput, 
  TouchableOpacity, 
  Image
} from 'react-native';
import {View, Text, Form, Label, Item, Input} from 'native-base';
// import SwitchSelector from 'react-native-switch-selector';

import {useNavigation, useRoute} from '@react-navigation/native';
import { TextInputMask } from 'react-native-masked-text';

// import OrderDetailsButton from '../../components/OrderDetailsButton';
// import CheckBox from '../../components/CheckBox';
import { RectButton } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';

import {Container} from './styles';
import TruckIcon from '../../../../images/TruckIcon.svg';
import {useFormik} from 'formik';


import Tabs from '../../../components/Navigation/Tabs';

const Order = () => {
 //   const [images, setImages] = useState<string[]>([]);  
  const {values, isSubmitting, setFieldValue} = useFormik({
    initialValues: {
      recipient_name: '',
      recipient_contact: '',
      product_category: '',
      product_type: '',
      product_size:{
        product_height:'',
        product_weight: '',
        product_depth: '',
      },
      product_style: '',
      product_value: '',
      phone_number: '',


    },
    onSubmit: values => {

    },
  })
  return (
    <ScrollView style={{backgroundColor: '#f1f1f1'}}>
      <Container>
        <Text>Your Adress</Text>
        <Form>
          <Item>
            <Label>Pick up Location:</Label>
              <Input 
                value={values.recipient_name}
                onChangeText={text => setFieldValue('location', text)}
              />
          </Item>
        </Form>  
      </Container>
      <Container>
        <Form>
          <Item>
            <Label>Recipient Name</Label>
              <Input 
                value={values.recipient_name}
                onChangeText={text => setFieldValue('recipient_name', text)}
              />
          </Item>
          <Item>
            <Label>Recipient Contact</Label>
              <Input 
                value={values.recipient_contact}
                onChangeText={text => setFieldValue('recipient_contact', text)}
              />
          </Item>  
        </Form>  
      </Container>
      <Container>
        <Text>Product Details</Text>
        <Form>
          <Item>
            <Label>Product Category</Label>
              <Input
                value={values.product_category}
                onChangeText={text => setFieldValue('product_category', text)}/>  
          </Item>
          <Item>
            <Label>Product Type</Label>
              <Input
                value={values.product_type}
                onChangeText={text => setFieldValue('product_type', text)}/>  
          </Item>
          <Item>
            <Label>Product Size</Label>
              <Label>Weight</Label>
                <Input
                  value={values.product_weight}
                  onChangeText={text => setFieldValue('product_weight', text)}/>  
          </Item>
          <Item>      
              <Label>Height</Label>
                <Input
                  value={values.product_height}
                  onChangeText={text => setFieldValue('product_height', text)}/>
          </Item>
          <Item>
              <Label>Depth</Label>
                <Input
                  value={values.product_depth}
                  onChangeText={text => setFieldValue('product_depth', text)}/>
                
          </Item>
          <Item>
            <Label>Product Value</Label>
              <Input
                value={values.product_value}
                onChangeText={text => setFieldValue('product_value', text)}/>  
          </Item>
        </Form>
      </Container>
    </ScrollView>

    
  )  
}






export default Order;
