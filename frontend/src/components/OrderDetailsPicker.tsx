import React from 'react';
import RNPickerSelect from '@expo/react-native-picker-select';

export const OrderDetailsPicker = (name, ) => {
    return (
        <RNPickerSelect
            onValueChange={(value) => console.log(value)}
            items={[
                { label: 'Product Category', value: 'Fruits and Vegs' },
                { label: 'Product Type', value: 'Chinese Cabage' },
                { label: 'Product Weight', value: '20 tons' },
                { label: 'Product Size', value: 'Height'  },
                { label: 'Package Style', value: 'Wood Wrapped'}
            ]}
        />
    );
};