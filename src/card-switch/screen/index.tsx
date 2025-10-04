import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Wheel from './wheel';

const PADDING = 16;

export const Screen: React.FC = () => {
  return (
    // <SafeAreaView style={styles.container}>
    //   <Text>asd</Text>
    // </SafeAreaView>
    <Wheel />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: PADDING,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
