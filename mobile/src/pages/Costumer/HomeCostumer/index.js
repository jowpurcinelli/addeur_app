import React from 'react';
import MapView, { Marker, Callout, PROVIDER_GOOGLE } from 'react-native-maps';
import {Container} from './styles';

export default function OrphanagesMap() {
  const [carrier, setCarrier] = useState([]);
  const navigation = useNavigation();

  useFocusEffect(() => {
    api.get('/carrier').then(response => {
      setCarrier(response.data);
    });
  });

  function handleNavigateToCarrierDetails(id) {
    navigation.navigate('CarrierDetails', { id });
  }

  function handleNavigateToCreateOrder() {
    navigation.navigate('SelectMapPosition');
  }

  return(
    <Container>
      <MapView 
        provider={PROVIDER_GOOGLE}
        style={styles.map} 
        initialRegion={{
          latitude: -22.9074336,
          longitude: -43.1809502,
          latitudeDelta: 0.008,
          longitudeDelta: 0.008,
        }}
      >
        {orphanages.map(orphanage => {
          return (
            <Marker
              key={orphanage.id}
              icon={mapMarker}
              calloutAnchor={{
                x: 2.7,
                y: 0.8,
              }}
              coordinate={{
                latitude: orphanage.latitude,
                longitude: orphanage.longitude,
              }}
            >
              <Callout tooltip onPress={() => handleNavigateToCarrierDetails(carrier.id)}>
                <View style={styles.calloutContainer}>
                  <Text style={styles.calloutText}>{orphanage.name}</Text>
                </View>
              </Callout>
            </Marker>
          );
        })}
      </MapView>
    </Container>