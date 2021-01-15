import * as React from 'react';
import Svg, {Circle, Rect, Path} from 'react-native-svg'


export default function WaitinIcon(props) {
  return (

    <Svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
    <Circle cx="11" cy="11" r="11" fill="#FFA564"/>
    <Path d="M11 5V11.3L16 14" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </Svg>
  )
};
