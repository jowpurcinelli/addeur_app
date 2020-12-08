import React, {useState} from 'react';
import { View, Button, StyleSheet, TouchableOpacity, Text } from "react-native";

const AppButton = ({ title }) => {
  const [isDisabled, setDisabled] = useState(false);

  const handlePress = () => {
    setDisabled(true);
    setTimeout(() => setDisabled(false), 3000);
  };

  return (
    <TouchableOpacity
      onPress={handlePress}
      style={[
        styles.appButtonContainer,
        isDisabled && styles.appButtonDisabled
      ]}
      disabled={isDisabled}
    >
      <Text style={styles.appButtonText}>{title}</Text>
    </TouchableOpacity>

    

  );


  
  

};


const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    justifyContent: "center",
    padding: 16
  },
  appButtonContainer: {
    elevation: 8,
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12
  },
  appButtonText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase"
  },
  appButtonDisabled: {
    backgroundColor: "#000"
  }
});