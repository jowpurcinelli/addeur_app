import React from 'react';
// import WebView from 'react-native-webview'
import WebViewLeaflet from "react-native-webview-leaflet";
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
  const mapLayers =
  {
    name: 'streets',  // the name of the layer, this will be seen in the layer selection control
    checked: 'true',  // if the layer is selected in the layer selection control
    type: 'TileLayer',  // the type of layer as shown at https://react-leaflet.js.org/docs/en/components.html#raster-layers
    baseLayer: true,
    // url of tiles
    url: `https://api.tiles.mapbox.com/v4/mapbox.streets/{z}/{x}/{y}.png?access_token=${mapboxToken}`,
    // attribution string to be shown for this layer
    attribution:
      '&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors'
  }

  return(
    <WebViewLeaflet
      ref={component => (this.webViewLeaflet = component)}
      onLoad={this.onLoad}
      eventReceiver={this} 
      centerPosition={this.state.mapCenterPosition}
      markers={this.state.markers}
      mapLayers={mapLayers}
      // Optional: display a marker to be at a given location
      ownPositionMarker={{
        coords: this.state.currentLocation,
        icon: "d'�",
        size: [24, 24],
        animation: {
          name: "pulse",
          duration: ".5",
          delay: 0,
          interationCount: "infinite"
        }
      }}
      // Optional (defaults to false): display a button that centers the map on the coordinates of ownPostionMarker. Requires that "ownPositionMarker" prop be set
      centerButton={true}

      // Optional (defaults to false): cluster icons that are in the same area
      useMarkerClustering={true}
    />
  )
}

export default Home;




      source={{uri: 'https://webapi.amap.com/maps?v=1.4.15&key=000927566775458ccd649e88b6cd1290'}}
