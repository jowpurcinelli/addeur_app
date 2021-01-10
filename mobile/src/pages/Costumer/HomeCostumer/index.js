import React from 'react';
import MapView, { Marker, Callout, PROVIDER_GOOGLE } from 'react-native-maps';
import { useNavigation, useFocusEffect } from '@react-navigation/native';

import {Container} from './styles';
// const [carrier, setCarrier] = useState([]);
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

const Home = () => {
  const navigation = useNavigation();

  return(
    <Container>
      <Text>
        Hello world
      </Text>
    </Container>
  )
}

export default Home
