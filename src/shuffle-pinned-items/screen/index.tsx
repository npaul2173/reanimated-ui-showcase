import React, { useState } from 'react';
import { StatusBar, StyleSheet, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import ShufflePinnedList from './shuffledPinnedItems';
import { appColors, data } from '../constants';
import { fontFamily } from '../../../assets/fonts';

const PADDING = 30;

export const Screen: React.FC = () => {
  const [pinnedItems, setPinnedItems] = useState<Map<string, boolean>>(
    new Map(),
  );

  const handleTogglePin = (id: string) => {
    setPinnedItems(prev => {
      const updated = new Map(prev);
      if (updated.has(id)) updated.delete(id);
      else updated.set(id, true);
      return updated;
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        backgroundColor={appColors.greenLight}
        barStyle={'dark-content'}
      />
      <Text style={styles.textComponent}>{`Shuffled\nlist`}</Text>
      <ShufflePinnedList
        items={data}
        pinnedItems={pinnedItems}
        onTogglePin={handleTogglePin}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: PADDING,
    backgroundColor: appColors.greenLight,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textComponent: {
    width: '100%',
    fontSize: 50,
    fontFamily: fontFamily.manrope.extraBold,
    letterSpacing: -3,
    textAlign: 'left',
    color: appColors.green,
    lineHeight: 50,
    paddingBottom: 20,
  },
});
