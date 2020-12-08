import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";


function useSelectionChange(items) {
    const [selectionMode, setSelectionMode] = useState(null);
    useEffect(() => {
      if (items.filter(i => i.selected).length > 0) {
        setSelectionMode(true);
      } else {
        setSelectionMode(false);
      }
    });
    return selectionMode;
  }

  function Main() {
    const [items, setItems] = useState([]);
    const selectionMode = useSelectionChange(items);
  
    const toggleSelect = item => {
      setItems(
        items.map(i => {
          if (item === i) {
            i.selected = !i.selected;
          }
          return i;
        }),
      );
    };
  
    const clearSelection = () => {
      setItems(
        items.map(i => {
        i.selected = false;
        return i;
        }),
      );
    };
  
    const onPress = item => {
      if (selectionMode) {
        toggleSelect(item);
      } else {
        pressItem(item);
      }
    };
  

  
    const pressItem = item => {
      console.log(JSON.stringify(item) + " pressed");
    };
    
    const renderItem = item => {
      return (
        <TouchableOpacity
          onPress={() => onPress(item)}
          key={item.id}
          style={[item.selected]}>
            <Text>{item.name}</Text>
        </TouchableOpacity>
      );
    };
  

    }
    
        
 export default useSelectionChange;