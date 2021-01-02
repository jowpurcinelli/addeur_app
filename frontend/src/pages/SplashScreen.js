import React from 'react';
import { Image, Text, View } from 'react-native';
import SplashScreen from 'expo-splash-screen';
import { Asset } from 'expo-asset';

export default class SplashScreenGif extends React.Component {
  state = {
    isReady: false,
  };

  componentDidMount() {
    SplashScreen.preventAutoHideAsync();
  }

  render() {
    if (!this.state.isReady) {
      return (
        <View style={{ flex: 1 }}>
          <Image source={require('../../images/Logo.png')} />
        </View>
      );
    }

    return (
      <View style={{ flex: 1 }}>
      <Image
        source={require('../../images/Addeur-Splash-Screen.gif')}
        onLoad={this._cacheResourcesAsync}
      />
      </View>

    );
  }

  _cacheSplashResourcesAsync = async () => {
    const gif = require('../../images/Addeur-Splash-Screen.gif');
    return Asset.fromModule(gif).downloadAsync();
  }

  _cacheResourcesAsync = async () => {
    SplashScreen.hideAsync();
  }
}
