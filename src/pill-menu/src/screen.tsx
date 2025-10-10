import { useState } from 'react';
import { Dimensions, StatusBar, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { appColors, cryptoItems } from '../constants';
import PillMenu from './pillMenu';

export const PADDING = 20;
const { width: appWidth } = Dimensions.get('screen');
export const WATCH_SIZE = appWidth * 0.9;

// Screen code
export const Screen = () => {
  const [selectedCryptoId, setSelectedCryptoId] = useState(cryptoItems[0].id);
  return (
    <SafeAreaView style={[styles.container]}>
      <StatusBar barStyle={'light-content'} />
      <PillMenu
        items={cryptoItems}
        selectedCryptoId={selectedCryptoId}
        setSelectedCryptoId={setSelectedCryptoId}
      />
    </SafeAreaView>
  );
};

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    // paddingTop: 80,
    backgroundColor: appColors.white,
  },
});
