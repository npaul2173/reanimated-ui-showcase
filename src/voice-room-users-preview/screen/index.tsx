import React from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { usersData } from '../constants';
import { UserCallPreview } from './UserCallPreview';

const PADDING = 16;

export const Screen: React.FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <UserCallPreview data={usersData} />
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
