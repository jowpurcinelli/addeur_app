import React from 'react';
import { ActivityIndicator, View } from 'react-native';

import AuthRoutes from './auth.routes';
import CarrierRoutes from '../components/Navigators/carrier.routes'
import CostumerRoutes from '../components/Navigators/costumer.routes';

import { useAuth } from '../hooks/auth';

const Routes  = () => {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color="#999" />
      </View>
    );
  };

  return user ? <AppRoutes /> : <AuthRoutes />;
};

export default Routes;
