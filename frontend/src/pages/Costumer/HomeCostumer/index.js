import react from 'react';
import {View, Image, StyleSheet, TouchableOpacity} from 'react-native';

import {Container} from './styles';
import CostumerRoutes from '../../../components/Navigators/routes.costumer';

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
