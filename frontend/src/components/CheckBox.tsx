import React from 'react'
import Icon from 'react-native-vector-icons/MaterialIcons'

import { StyleSheet } from 'react-native'


import { TouchableOpacity, Text } from 'react-native'

const CheckBox = ({ selected, onPress, style, textStyle, size = 30, color = '#FFFFF', text = 'Click to agree to Terms and Conditions', ...props}) => (
    <TouchableOpacity style={[styles.checkBox, style]} onPress={onPress} {...props}>
        <Icon
            size={size}
            color={color}
            name={ selected ? 'check-box' : 'check-box-outline-blank'}
        />

        <Text style={textStyle}> {text} </Text>
    </TouchableOpacity>
)

const styles = StyleSheet.create({
  checkBox: {
      flexDirection: 'row',
      alignItems: 'center'
  }
})


export default CheckBox;