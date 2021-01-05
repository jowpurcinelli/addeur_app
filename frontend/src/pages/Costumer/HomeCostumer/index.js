import react from 'react';
import {View, Image, StyleSheet, TouchableOpacity} from 'react-native';

import {Container} from './styles';
import CostumerRoutes from '../../../components/Navigators/costumer.routes';

const HomeCostumer = () => {
  return (
    <View>
      <Container>
        <CostumerRoutes />
      </Container>
    </View>
  )
}

export default HomeCostumer;
