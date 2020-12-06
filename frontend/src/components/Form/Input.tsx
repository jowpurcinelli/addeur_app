import React from 'react';
import {useField} from '@unform/core'
// import { Container } from './styles';

interface name {
  
}


const Input: React.FC = ({name}) => {
  const field = useField(name)
  
  return (
    <div />
  );
}

export default Input;