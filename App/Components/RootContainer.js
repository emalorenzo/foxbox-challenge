import React from 'react';
import { View, StatusBar } from 'react-native';
import AppNavigation from '../Navigation/AppNavigation';
import styles from './RootContainerStyles';

const RootContainer = () => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <AppNavigation />
    </View>
  );
};

export default RootContainer;
