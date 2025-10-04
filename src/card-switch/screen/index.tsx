import React from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Wheel } from './wheel';
import { Wheel2 } from './wheel2';

const PADDING = 16;

export const Screen: React.FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Wheel2 />
    </SafeAreaView>
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
