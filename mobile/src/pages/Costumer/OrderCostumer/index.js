import React, { useState } from 'react';
import { 
  ScrollView, 
  StyleSheet, 
  Switch, 
  TextInput, 
  TouchableOpacity, 
  Image,
  
} from 'react-native';
import {View, Text, Form, Label, Item} from 'native-base';
import { Input, Icon } from 'react-native-elements';
import SelectPicker from 'react-native-form-select-picker'; 
// import SwitchSelector from 'react-native-switch-selector';

import {useNavigation, useRoute} from '@react-navigation/native';
import { TextInputMask } from 'react-native-masked-text';

// import OrderDetailsButton from '../../components/OrderDetailsButton';
// import CheckBox from '../../components/CheckBox';
import { RectButton } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';

import {Container} from './styles';
import TruckIcon from '../../../components/Icons/TruckIcon';
import {useFormik} from 'formik';
import WaitinIcon from '../../../components/Icons/WaitinIcon';
import HeaderComponent from '../../../components/Header';



const Order = () => {
 //   const [images, setImages] = useState<string[]>([]);  
 const {values, isSubmitting, setFieldValue} = useFormik({
    initialValues: {
      pickup_location: '',
      destination: '',
      recipient_name: '',
      recipient_contact: '',
      product_category: '',
      product_type: '',
      product_width:'',
      product_height: '',
      product_depth: '',
      product_style: '',
      product_value: '',
      truck_size: ["3.8 miters", "4.2 miters", "6.8 miters", "7.6 miters", "9.6 miters", "13 miters","17.5 miters", "20 miters" ],
      truck_type: ["Cold-Chain", "Container", "Platform", "Van", "Fence", "Insulated", "Two-Decks", "Ledder", "Gliders"],
    },
    onSubmit: values => {

    },
  })
  const [selected, setSelected] = useState();
  //const truckSize = ["3.8 miters", "4.2 miters", "6.8 miters", "7.6 miters", "9.6 miters", "13 miters","17.5 miters", "20 miters" ]; 
  //const truckType = ["Cold-Chain", "Container", "Platform", "Van", "Fence", "Insulated", "Two-Decks", "Ledder", "Gliders"];
 


  return (
    <ScrollView style={{backgroundColor: '#f1f1f1'}}>
      <Container>
        <HeaderComponent />
      </Container>
      
      
      
      <Container >
        
          <View style={{flexDirection: 'row', justifyContent: 'space-between', paddingLeft: 10, paddingHorizontal: 10, paddingTop: 10}}>
            <Text>Your Address</Text>
            <TruckIcon />
            <WaitinIcon />
            
        </View>
        <Form>
          <Item>
            <Input 
              value={values.recipient_name}
              placeholder='Pick up Location:' 
              onChangeText={text => setFieldValue('pickup_location', text)}              
              leftIcon={
                <Icon
                  name=''
                  size={24}
                />
              }
            />
          </Item>  
          
          <Item>
            <Input   
                placeholder='Destination:' 
                value={values.destination}
                onChangeText={text => setFieldValue('destination', text)}
              />
          </Item>
        </Form>  
      </Container>
      <Container>
        <Form>
          <Item>
              <Input 
                placeholder='Recipient Name'
                value={values.recipient_name}
                onChangeText={text => setFieldValue('recipient_name', text)}              
                leftIcon={
                  <Icon
                    name=''
                    size={24}
                  />
                }
              />
          </Item>
          <Item>
              <Input 
                placeholder='Recipient Contact'
                value={values.recipient_contact}
                onChangeText={text => setFieldValue('recipient_contact', text)}              
                leftIcon={
                  <Icon
                    name=''
                    size={24}
                  />
                }
              />
          </Item>  
        </Form>  
      </Container>
      <Container>
        <Text>
          Product Details
        </Text>
        <Form>
          <Item>
              <Input  
                placeholder='Product Category:' 
                value={values.product_category}
                onChangeText={text => setFieldValue('product_category', text)}              
                leftIcon={
                  <Icon
                    name=''
                    size={24}
                  />
                }/>  
          </Item>
          <Item>
              <Input  
                placeholder='Product Type:' 
                value={values.product_type}
                onChangeText={text => setFieldValue('product_type', text)}              
                leftIcon={
                  <Icon
                    name=''
                    size={24}
                  />
                }/>  
          </Item>
          <Item>
            <Label></Label>
                <Input  
                  placeholder='Width:' 
                  value={values.product_width}
                  onChangeText={text => setFieldValue('product_width', text)}              
                  leftIcon={
                    <Icon
                      name='width'
                      size={24}
                    />
                  }/>  
          </Item>
          <Item>      
              <Input  
                placeholder='Height:' 
                value={values.product_height}
                onChangeText={text => setFieldValue('product_height', text)}              
                leftIcon={
                  <Icon
                    name='fa-text-height'
                    size={24}
                  />
                }/>
          </Item>
          <Item>
              <Input  
                placeholder='Depth:' 
                value={values.product_depth}
                onChangeText={text => setFieldValue('product_depth', text)}              
                leftIcon={
                  <Icon
                    name='depth'
                    size={24}
                  />
                }/>
                
          </Item>
          <Item>
            
              <Input  
                placeholder='Product value:' 
                value={values.product_value}
                onChangeText={text => setFieldValue('product_value', text)}
                label={'Enter actual Value'}
                />  
          </Item>
        </Form>
      </Container>
      
      <Container>
        <Text>Select Truck</Text>
          <Form
            style={{justifyContent: "space-between", padding: 30}}>
          <Item>    
            <SelectPicker  
              style={{alignItems: 'center', justifyContent: 'center', backgroundColor: '#66cc7d', borderRadius: 20, height: 50, width: 220}}
              onValueChange={(value) => {
                setSelected(values.truck_size);
              }}
              selected={selected}
              placeholder={"Please select a Truck Size"}
              doneButtonText={"Set truck size"}
              
            >
            
              {Object.values(values.truck_size).map((val, index) => (
                <SelectPicker.Item label={val} value={val} key={index} />
              ))}
 
            </SelectPicker>
          </Item>
          <Item>  
            
            <SelectPicker
              style={{alignItems: 'center', justifyContent: 'center', backgroundColor: '#66cc7d', borderRadius: 20, height: 50, width: 220}}
              onValueChange={(value) => {
                setSelected(values.truck_type);
              }}
              selected={selected}
              placeholder={"Please select a Truck Type"}
              doneButtonText={"Set truck type"}
            >
            
              {Object.values(values.truck_type).map((val, index) => (
                  <SelectPicker.Item label={val} value={val} key={index} />
              ))}
 
            </SelectPicker>    
          </Item>
          
          </Form>

      </Container>
    </ScrollView>

    
  )  
}






export default Order;
