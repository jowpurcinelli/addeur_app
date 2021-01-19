import React, { useState, Component } from 'react';
import { 
  ScrollView, 
  StyleSheet, 
  Switch, 
  TextInput, 
  TouchableOpacity, 
  Image,
  Button
  
} from 'react-native';
import {View, Text, Form, Label, Item} from 'native-base';
import { Input } from 'react-native-elements';
import SelectMultiple from 'react-native-select-multiple'
import SelectPicker from 'react-native-form-select-picker'; 
import SwitchSelector from "react-native-switch-selector";

import {useNavigation, useRoute} from '@react-navigation/native';
import { TextInputMask } from 'react-native-masked-text';


import {Container, Title, Picker} from './styles';


// import OrderDetailsButton from '../../components/OrderDetailsButton';
// import CheckBox from '../../components/CheckBox';
import { RectButton } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';
import TruckIcon from '../../../components/Icons/TruckIcon';
import {useFormik} from 'formik';
import WaitinIcon from '../../../components/Icons/WaitinIcon';
import HeaderComponent from '../../../components/Header';






const Order = () => {
 //   const [images, setImages] = useState<string[]>([]); 
 
 
  const [truckSize, setTruckSize] = useState(["3.8 miters", "4.2 miters", "6.8 miters", "7.6 miters", "9.6 miters", "13 miters","17.5 miters", "20 miters"]);
  const [truckType, setTruckType] = useState(["Cold-Chain", "Container", "Platform", "Van", "Fence", "Insulated", "Two-Decks", "Ledder", "Gliders"])

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


  //const truckSize = ["3.8 miters", "4.2 miters", "6.8 miters", "7.6 miters", "9.6 miters", "13 miters","17.5 miters", "20 miters" ]; 
  //const truckType = ["Cold-Chain", "Container", "Platform", "Van", "Fence", "Insulated", "Two-Decks", "Ledder", "Gliders"];
 


  return (
    <ScrollView style={{backgroundColor: '#f1f1f1'}}>
      <HeaderComponent title={"Details filling"}  />
      <Container >
        
          <View style={{flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 10, paddingTop: 10}}>
            <Title style={{paddingRight: 50,marginRight: 40}}> Your Address</Title>
            <TruckIcon  />
            <WaitinIcon />
            
        </View>
        <Form>
          <Item style={{borderColor: 'transparent'}}>
            <Input 
              style={{borderRadius: 0}}
              value={values.pickup_location}
              returnKeyType={'done'}
              placeholder='Pick up Location:' 
              onChangeText={text => setFieldValue('pickup_location', text)}              
              leftIcon={
                <Icon
                  name='arrow-up-circle'
                  style={{color: '#53D289'}}
                  size={24}
                />
              }
            />
          </Item>  
          
          <Item style={{borderColor: 'transparent'}}>
            <Input   
              placeholder='Destination:' 
              value={values.destination}
              returnKeyType={'done'}
              onChangeText={text => setFieldValue('destination', text)}
              leftIcon={
                <Icon
                  name='disc-sharp'
                  size={24}
                  style={{color: '#FB5656'}}
                />
              }  
            />
          </Item>
        </Form>  
      </Container>
      <Container>
        <Form>
          <Item style={{borderColor: 'transparent'}}>
              <Input 
                placeholder='Recipient Name'
                value={values.recipient_name}
                returnKeyType={'done'}
                onChangeText={text => setFieldValue('recipient_name', text)}              
                leftIcon={
                  <Icon
                    name='person-outline'
                    size={24}
                  />
                }
              />
          </Item>
          <Item style={{borderColor: 'transparent'}}>
              <Input 
                placeholder='Recipient Contact'
                value={values.recipient_contact}
                returnKeyType={'done'}
                onChangeText={text => setFieldValue('recipient_contact', text)}              
                leftIcon={
                  <Icon
                    name='call-outline'
                    size={24}
                  />
                }
              />
          </Item>  
        </Form>  
      </Container>
      <Container>
        <View>
          <Title>
            Product Details
          </Title>
        </View>  
        <Form>
          <Item style={{borderColor: 'transparent'}}>
              <Input  
                placeholder='Product Category' 
                returnKeyType={'done'}
                value={values.product_category}
                onChangeText={text => setFieldValue('product_category', text)}              
                leftIcon={
                  <Icon
                    name='cube-outline'
                    size={24}
                  />
                }/>  
          </Item>
          <Item style={{borderColor: 'transparent'}}>
              <Input  
                placeholder='Product Type' 
                value={values.product_type}
                onChangeText={text => setFieldValue('product_type', text)} 
                returnKeyType={'done'}                             
                leftIcon={
                  <Icon
                    name='cube'
                    size={24}
                  />
                }/>  
          </Item>
          <Title>Product Size</Title>
            <Item 
              style={{flexDirection: "column", marginLeft: 160, borderColor: 'transparent'}}>
                
                
                <Input 
                  style={{marginLeft: 50}}  
                  placeholder='20m' 
                  maxHeight={3}
                  keyboardType={'numeric'}
                  returnKeyType={'done'}
                  value={values.product_height}
                  onChangeText={text => setFieldValue('product_height', text)}              
                  leftIcon={
                    <Text style={{paddingLeft: -40}}>Height</Text>
                      
                    
                  }/>  
     
              <Input  
                style={{marginLeft: 50}}  
                placeholder='10m'
                keyboardType={'numeric'}
                returnKeyType={'done'} 
                maxHeight={3}
                value={values.product_width}
                onChangeText={text => setFieldValue('product_width', text)}              
                leftIcon={
                  <Text style={{paddingLeft: -40}}>Width</Text>
                    
                  
                }/>

              <Input  
                style={{marginLeft: 50}}  
                placeholder='20m' 
                keyboardType={'numeric'}
                returnKeyType={'done'}
                maxHeight={3}
                value={values.product_depth}
                onChangeText={text => setFieldValue('product_depth', text)}              
                leftIcon={
                  <Text style={{paddingLeft: -40}}>Depth</Text>
                    
                  
                }/>
                
          </Item>
          <Title>Product Value</Title>

          <Item style={{borderColor: 'transparent'}}>
              <Input  
                placeholder='Enter actual value' 
                keyboardType={'numeric'}
                returnKeyType={'done'}
                value={values.product_value}
                onChangeText={text => setFieldValue('product_value', text)}

                />  
          </Item>
        </Form>
      </Container>
      
      
      <Container >
        <Title>Select Truck</Title>          
        <SwitchSelector
          onPress={value => this.setState({ gender: value })}
          textColor={'#F2F2F2'} 
          selectedColor={colors.white}
          buttonColor={'#66CC7D'}
          hasPadding
          options={[
            { label: "Feminino", value: "f", imageIcon: images.feminino }, //images.feminino = require('./path_to/assets/img/feminino.png')
            { label: "Masculino", value: "m", imageIcon: images.masculino } //images.masculino = require('./path_to/assets/img/masculino.png')
          ]}
            
  
          

      </Container>
    </ScrollView>

    
  )  
}






export default Order;
