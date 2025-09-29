import React from 'react';
import { StatusBar, StyleSheet, View } from 'react-native';
import { TypingField } from '../TypingField';

// const { width } = Dimensions.get('screen');

export const Screen = () => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle={'dark-content'} backgroundColor={'transparent'} />
      <View style={{ width: '100%' }}>
        <TypingField
          fontSize={80}
          backgroundStyles={{ backgroundColor: 'transparent' }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
    padding: 20,
  },
});
