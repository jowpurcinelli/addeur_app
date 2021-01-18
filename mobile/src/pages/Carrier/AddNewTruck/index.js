import React, {useState, useEffect} from 'react';
import {} from 'react-native';

const {values, isSubmitting, setFieldValue} = useFormik({
  initialValues: {
    registration_number: '',
    driving_years: '',
    license_plate_color: '',
    manufacture_date: '',
    loading_capacity: '',
    truck_brand: '',
    truck_model:'',
    carriage_length: '',
    truck_type: '',
    product_style: '',
    truck_requirement: '',
    truck_size: ["3.8 miters", "4.2 miters", "6.8 miters", "7.6 miters", "9.6 miters", "13 miters","17.5 miters", "20 miters" ],
    truck_type: ["Cold-Chain", "Container", "Platform", "Van", "Fence", "Insulated", "Two-Decks", "Ledder", "Gliders"],
  },
  onSubmit: values => {

  },
})
const [selected, setSelected] = useState();
//const truckSize = ["3.8 miters", "4.2 miters", "6.8 miters", "7.6 miters", "9.6 miters", "13 miters","17.5 miters", "20 miters" ]; 
//const truckType = ["Cold-Chain", "Container", "Platform", "Van", "Fence", "Insulated", "Two-Decks", "Ledder", "Gliders"];

const AddNewTruck = () => {    
  const {values, isSubmitting, setFieldValue} = useFormik({
    initialValues: {
      registration_number: '',
      driving_years: '',
      license_plate_color: '',
      manufacture_date: '',
      loading_capacity: '',
      truck_brand: '',
      truck_model:'',
      carriage_length: '',
      truck_type: '',
      product_style: '',
      truck_requirement: '',
      truck_size: ["3.8 miters", "4.2 miters", "6.8 miters", "7.6 miters", "9.6 miters", "13 miters","17.5 miters", "20 miters" ],
      truck_type: ["Cold-Chain", "Container", "Platform", "Van", "Fence", "Insulated", "Two-Decks", "Ledder", "Gliders"],
    },
    onSubmit: values => {
  
    },
  })
  const [selected, setSelected] = useState();
  
  
  
  
  return(
    <ScrollView style={{backgroundColor: '#f1f1f1'}}>
      <HeaderComponent title={"Details filling"}  />
      <Container >
          <View style={{flexDirection: 'row', justifyContent: 'space-between', paddingLeft: 30, paddingHorizontal: 10, paddingTop: 10}}>
            <Text> Your Address</Text>
            <TruckIcon  />
            <WaitinIcon />
            
        </View>
        <Form>
          <Item>
            <Input 
              value={values.pickup_location}
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
          
          <Item>
            <Input   
              placeholder='Destination:' 
              value={values.destination}
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
          <Item>
              <Input 
                placeholder='Recipient Name'
                value={values.recipient_name}
                onChangeText={text => setFieldValue('recipient_name', text)}              
                leftIcon={
                  <Icon
                    name='person-outline'
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
          <Text>
            Product Details
          </Text>
        </View>  
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
                    name='text-height'
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