import React from 'react';
import { Image, StyleSheet, Text } from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';

// const { width: appWidth } = Dimensions.get('screen');

export const Screen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>asdasd</Text>

      <Image
        resizeMode="cover"
        style={{ height: 100, width: 100, borderRadius: 100 }}
        source={require('../images/male001.jpg')}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d2d2d2ff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
