import React, { useState } from 'react';
import { 
  ScrollView, 
  StyleSheet, 
  Switch, 
  TextInput, 
  TouchableOpacity, 
  Image
} from 'react-native';
import {View, Text, Form, Label, Item} from 'native-base';

import SwitchSelector from 'react-native-switch-selector';

import {useNavigation, useRoute} from '@react-navigation/native';
import { TextInputMask } from 'react-native-masked-text';

// import OrderDetailsButton from '../../components/OrderDetailsButton';
// import CheckBox from '../../components/CheckBox';
import { RectButton } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';

import {useFormik} from 'formik';
import { Container } from './styles';

//drawable/selector_toggle_buttons
// <ToggleButton />


// Use this for connecting button title to api data dinamically 

// useEffect(() => {
//   api.post(`/buttontitle/option/${id}`).then(({ data }) => {
//     setButtonTitle(data)
//   })
// }, [id])


// const DetailsButton = OrderDetailsButton

// const route = useRoute();
// const navigation = useNavigation();



//Gonna be using Huawei Cloud Services for Database
// async function handleCreateOrder() {

//   navigation.navigate('CostumerMap');
// }



const CostumerOrder = () => {
  const route = useRoute();  
  const [recipient_name, setRecipientName] = useState('');
  const {recipient_contact, setRecipientContact} = useState('');

    
  const [product_category, setProductCategory] = useState('Fruits and Vegs');
  const [product_type, setProductType] = useState('Chinese Cabage');
  const [product_weight, setProductWeight] = useState('20 tons');
  const [product_size, setProductSize] = useState('');
  const [package_style, setpackageStyle] = useState('Wood Wrapped');
  const [product_value, setProductValue] = useState('Enter actual value');
  const [phone_number, setPhoneNumber] = useState('');
 //   const [images, setImages] = useState<string[]>([]);   

  const {values, isSubmitting, setFieldValue} = useFormik({
    initialValues: {
      recipient_name: '',
      recipient_contact: '',
      product_category: '',
      product_type: '',
      product_weight: '',
      product_size: '',
      product_style: '',
      product_value: '',
      phone_number: '',


    },
    onSubmit: values => {

    },
  })


  return (
    <ScrollView>
    
    
    <Container>
      <Form>
        <Item>
          <Label>Recipient Name</Label>
          <Input 
            style={styles.input}
            value={values.recipient_name}
            onChangeText={text => setFieldValue('recipient_name', text)}
          />
        </Item>
        <Item>
          <Label>Contact</Label>
          <Input 
            style={styles.input}
            value={values.recipient_contact}
            onChangeText={text => setFieldValue('recipient_contact', text)}
          />
        </Item>
      </Form>
    </Container>
        <Container
          style={styles.sectiontitle}>
            <Text style={styles.sectiontitle}>Product Details</Text>
          <Form>
            <Item>
              <Label>Product Category</Label>
              <Input
                style={styles.input}
                value={values.product_category}
                onChangeText={text => setFieldValue('product_category', text)}/>  
            </Item>
          </Form>
        </Container>
        
        <Container
          style={styles.sectiontitle}>
            <Text style={styles.sectiontitle}>Product Type</Text>
          <Form>
            <Item>
              <Label>Product Type</Label>
              <Input
                style={styles.input}
                value={values.product_type}
                onChangeText={text => setFieldValue('product_type', text)}/>  
            </Item>
          </Form>
        </Container>     


        
      
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#c5c5c5',
    flex: 1,
  },
  recommended: {
    color: '',
  },

  section: {
    color: '#a01313',
    textAlign: 'left',
 


  },
  sectiontitle: {
   
    backgroundColor: '#ffffff',
    borderRadius: 12,

    color: '#000000',
    textAlign: 'center',
    fontSize: 18,
    paddingBottom: 10,
    paddingTop: 5,
    paddingLeft: 5,
    paddingRight: 15,
  },
  formtitlecontact: {
    backgroundColor: '#ffffff',
    borderRadius: 12,

    color: '#000000',
    textAlign: 'left',
    fontSize: 18,
    paddingBottom: 10,
    paddingTop: 5,
    paddingLeft: 5,
    paddingRight: 5,

  },
  formtitle: {
    padding: 19,
    backgroundColor: '#ffffff',
    borderRadius: 12,
    color: '#000000',
    fontSize: 16,
    alignContent: 'flex-start',
    fontFamily: 'Nunito_700Bold',

  },

  label: {
    width: 64,
    height: 24,
    color: '#747474',
    fontFamily: 'Nunito_600SemiBold',
    
 
  },

  comment: {
    fontSize: 11,
    color: '#8fa7b3',
  },

  input: {

    borderWidth: 1.4,
    borderColor: '#c0cfd3',
    

    borderRadius: 10,
    height: 22,
    width: 185,
    paddingVertical: 18,
    paddingHorizontal: 24,
    marginBottom: 16,
    textAlignVertical: 'top',
    position: 'relative',
    alignSelf: 'flex-end',
  },

  uploadedImagesContainer: {
    flexDirection: 'row'
  },

  uploadedImage: {
    width: 64,
    height: 64,
    borderRadius: 20,
    marginBottom: 32,
    marginRight: 8
  },

  imagesInput: {
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    borderStyle: 'dashed',
    borderColor: '#96D2F0',
    borderWidth: 1.4,
    borderRadius: 20,
    height: 56,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 32,
  },

  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 16,
  },

  nextButton: {
    backgroundColor: '#15c3d6',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    height: 56,
    marginTop: 32,
  },

  nextButtonText: {
    fontFamily: 'Nunito_800ExtraBold',
    fontSize: 16,
    color: '#FFF',
  }
}
    )

export default CostumerOrder;