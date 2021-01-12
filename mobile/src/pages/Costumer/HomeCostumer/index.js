import React from 'react';
import WebView from 'react-native-webview'
import { useNavigation, useFocusEffect } from '@react-navigation/native';

import {Container} from './styles';
// const [carrier, setCarrier] = useState([]);





const Home = () => {
  const navigation = useNavigation();

  function handleNavigateToCarrierDetails(id) {
    navigation.navigate('CarrierDetails', { id });
  }
  //  useFocusEffect(() => {
  //  api.get('/carrier').then(response => {
  //    setCarrier(response.data);
  //  });
  //});
  function handleNavigateToCreateOrder() {
    navigation.navigate('SelectMapPosition');
  }

  return(
    <WebView 
      source={{uri: 'https://webapi.amap.com/maps?v=1.4.15&key=000927566775458ccd649e88b6cd1290'}}
      style={{ marginTop: 40 }}
    >
    </WebView>
  )
}

export default Home;
