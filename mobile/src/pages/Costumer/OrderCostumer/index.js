import React, { useState } from 'react';
import { 
  ScrollView, 
  StyleSheet, 
  Switch, 
  TextInput, 
  TouchableOpacity, 
  Image,
  
} from 'react-native';
import {View, Text, Form, Label, Item, Input} from 'native-base';
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
    },
    onSubmit: values => {

    },
  })
  const [selected, setSelected] = useState();
  const truckSize = ["3.8 miters", "4.2 miters", "6.8 miters", "7.6 miters", "9.6 miters", "13 miters","17.5 miters", "20 miters" ]; 
  const truckType = ["Cold-Chain", "Container", "Platform", "Van", "Fence", "Insulated", "Two-Decks", "Ledder", "Gliders"];
 


  return (
    <ScrollView style={{backgroundColor: '#f1f1f1'}}>
      <Container>
        
      </Container>
      
      
      
      <Container>
        <View style={{justifyContent: 'space-between'}}>
          <Text>Your Adress</Text>
            <TruckIcon />
        </View>
        <Form>
          <Item> 
            <Label>Pick up Location:</Label>
              <Input 
                value={values.recipient_name}
                onChangeText={text => setFieldValue('pickup_location', text)}
              />
          </Item>
          <Item>
            <Label>Destination:</Label>
              <Input 
                value={values.recipient_name}
                onChangeText={text => setFieldValue('destination', text)}
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
        <Text>
          Product Details
        </Text>
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
              <Label>Width</Label>
                <Input
                  value={values.product_width}
                  onChangeText={text => setFieldValue('product_width', text)}/>  
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
                onChangeText={text => setFieldValue('product_value', text)}
                label={'Enter actual Value'}
                />  
          </Item>
        </Form>
      </Container>
      
      <Container>
        <Text>Select Truck Size</Text>
          <Form>
            <Switch
              thumbColor="#e5e7eb"
              trackColor={{ false: "#ccc", true: "#39cc83"}}
              value={'3.9 miters'}>
            </Switch>
            
            <SelectPicker
              onValueChange={(value) => {
                setSelected(value);
              }}
              selected={selected}
            >
            
              {Object.values(truckType).map((val, index) => (
                  <SelectPicker.Item label={val} value={val} key={index} />
              ))}
 
            </SelectPicker>    
          
          
          </Form>

      </Container>
    </ScrollView>

    
  )  
}






export default Order;
