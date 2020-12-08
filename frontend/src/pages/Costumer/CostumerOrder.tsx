import React, { useState } from 'react';
import { 
  ScrollView, 
  View, 
  StyleSheet, 
  Switch, 
  Text, 
  TextInput, 
  TouchableOpacity, 
  Image
} from 'react-native';
import { TextInputMask } from 'react-native-masked-text';
import { useNavigation, useRoute } from '@react-navigation/native';

import useSelectionChange from '../../hooks/useSelectionChange';

import OrderDetailsButton from '../../components/OrderDetailsButton';
import CheckBox from '../../components/CheckBox';
import { RectButton } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';



// Use this for connecting button title to api data dinamically 

// useEffect(() => {
//   api.post(`/buttontitle/option/${id}`).then(({ data }) => {
//     setButtonTitle(data)
//   })
// }, [id])


const DetailsButton = OrderDetailsButton

const route = useRoute();
const navigation = useNavigation();

interface Product{
    label: String,
    value: String,

}


//Gonna be using Huawei Cloud Services for Database
async function handleCreateOrder() {


  const data = new FormData();



  navigation.navigate('CostumerMap');
}



const CostumerOrder = () => {
    const [recipient_name, setRecipientName] = useState('');
    const [recipient_contact, setRecipientContact] = useState('');

    
    const [product_category, setProductCategory] = useState('Fruits and Vegs');
    const [product_type, setProductType] = useState('Chinese Cabage');
    const [product_weight, setProductWeight] = useState('20 tons');
    const [product_size, setProductSize] = useState('');
    const [package_style, setpackageStyle] = useState('Wood Wrapped');
    const [product_value, setProductValue] = useState('Enter actual value');
    const [phone_number, setPhoneNumber] = useState('');
 //   const [images, setImages] = useState<string[]>([]);
    
    
    return (
      <ScrollView style={styles.container} contentContainerStyle={{ padding: 24 }}>

        <Text style={styles.title}>Recipient Name</Text>
            <TextInput 
                style={styles.input}
                value={recipient_name}
                onChangeText={setRecipientName}
            />
        <Text style={styles.title}>Contact</Text>
            <TextInputMask 
                type={'cel-phone'}
                style={styles.input}
                value={phone_number}
                onChangeText={setPhoneNumber}
            />



        <Text style={styles.title}>Product Details</Text>

        <Text style={styles.label}>Product category</Text>
            <TextInput
                style={styles.input}
                value={product_category}
                onChangeText={setProductCategory}
            />

        <Text style={styles.label}>Product Type</Text>
            <TextInput
                style={[styles.input, { height: 110 }]}
                value={product_type}
                onChangeText={setProductType}
            />

        <Text style={styles.label}>Product Weight</Text>
            <TextInput
                style={styles.input}
                value={product_weight}
                onChangeText={setProductWeight}
      />
        <Text style={styles.label}>Product Size</Text>
            <TextInput
                style={styles.input}
                value={product_size}
                onChangeText={setProductSize}
      />
        <Text style={styles.label}>Package Style</Text>
            <TextInput
                style={styles.input}
                value={package_style}
                onChangeText={setpackageStyle}
      />              
        <Text style={styles.label}>Product Value</Text>
            <TextInput
                style={styles.input}
                value={product_value}
                onChangeText={setProductValue}
      />











      <CheckBox />

      
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  title: {
    color: '#5c8599',
    fontSize: 24,
    fontFamily: 'Nunito_700Bold',
    marginBottom: 32,
    paddingBottom: 24,
    borderBottomWidth: 0.8,
    borderBottomColor: '#D3E2E6'
  },

  label: {
    color: '#8fa7b3',
    fontFamily: 'Nunito_600SemiBold',
    marginBottom: 8,
  },

  comment: {
    fontSize: 11,
    color: '#8fa7b3',
  },

  input: {
    backgroundColor: '#fff',
    borderWidth: 1.4,
    borderColor: '#d3e2e6',
    borderRadius: 20,
    height: 56,
    paddingVertical: 18,
    paddingHorizontal: 24,
    marginBottom: 16,
    textAlignVertical: 'top',
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