import React from 'react';
import Video from 'react-native-video';

export default class SplashScreen extends React.Component {
  render(){
  return (
    <Video 
      style={{flex:1}}
      source={require('../../images/SplashScreen.mp4')}
      ref={(ref) => {
        this.player = ref
      }}                                      // Store reference
      onBuffer={this.onBuffer}                // Callback when remote video is buffering
      onEnd={this.onEnd}                      // Callback when playback finishes
      onError={this.videoError}    
    />

  )};
};







