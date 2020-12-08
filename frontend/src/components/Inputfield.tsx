import React, {useState} from 'react';
import { View, Button, StyleSheet, TouchableOpacity, Text } from "react-native";


const [isEnabled, setIsEnabled] = useState(false);

const key = 

const Input: React.FC<{ 
  title: string,
  key: string,
  > = ({ title }) => {
  return 
    <Button
      key={key.id}
      title={title}
      onPress={setIsEnabled}
    >

    </Button>;
}

export default Input;