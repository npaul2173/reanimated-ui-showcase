import React from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import ShufflePinnedList from './shuffledPinnedItems';
import { data } from '../constants';

const PADDING = 16;

export const Screen: React.FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ShufflePinnedList items={data} />
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
