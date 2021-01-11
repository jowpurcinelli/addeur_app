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
    <Container>
      <WebView>
        
      </WebView>
        
    </Container>
  )
}

export default Home;
