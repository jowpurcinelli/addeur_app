import React from 'react';
import { Image, View } from 'react-native';
import Video from 'react-native-video';

const SplashScreen = ({navigation}) => {
  return (
    <Video style={{flex:1}} source={require('../../../images/SplashScreen.mp4')}/>
  );
};

export default SplashScreen;
