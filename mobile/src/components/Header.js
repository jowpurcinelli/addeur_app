import React from 'react';
import {Header} from 'react-native-custom-header';


const headerButtons = [
  {
      id: 1,
      color: '',
      content: <Text />,
      action: (navigation) => navigator.navigate(''),
  },
  {
      id: 2,
      color: '',
      content: <Text></Text>,
      action: () => alert('Second Right Button'),
  },
];


const Header = () => {
  return (
    <Header>
      
    </Header>
  )
}