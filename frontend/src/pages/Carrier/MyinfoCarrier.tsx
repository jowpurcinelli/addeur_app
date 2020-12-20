import React from 'react';
import {View, Text, StyleSheet, SafeAreaView, TouchableOpacity} from 'react-native';


//MyInfo page structure:

//User Name and Photo
//Manage my Truck
//Coupon
//My wallet
//Settings
//HelpCentre
//AboutUs


const MyinfoCarrier = () => {
  
  
  return (
    <View>
      <SafeAreaView style={{flex: 1}}>
        <TouchableOpacity 
          style={{alignItems: 'flex-end', margin:16}}
          onPress={}
        >
        </TouchableOpacity>
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}> 
          
          
        </View>
      </SafeAreaView>
    </View>
  )
  
}

export default MyinfoCarrier;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  }
})