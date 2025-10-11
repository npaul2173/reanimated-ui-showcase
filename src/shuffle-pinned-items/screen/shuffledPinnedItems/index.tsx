import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { fontFamily } from '../../../../assets/fonts';
import { appColors, COMMON_PADDING_HORIZONTAL } from '../../constants';
import { ShuffleView } from './shuffle';
import ShuffleItem from './shuffleItem';

export type ShuffleItemDataProps = {
  id: string;
  text: string;
};

export type ShufflePinnedListProps = {
  items: ShuffleItemDataProps[];
  height?: number;
};

const ShufflePinnedList: React.FC<ShufflePinnedListProps> = ({
  items,
  height = 400,
}) => {
  return (
    <View style={[styles.card, { height, gap: 20 }]}>
      <ShuffleView />
      <View style={styles.header}>
        <Text style={styles.title}>Today</Text>
        <Text style={styles.subtitle}>Tap to pin</Text>
      </View>
      {/* Scrollable area */}
      <View style={{ flex: 1, position: 'relative' }}>
        <ScrollView
          style={styles.scrollArea}
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
        >
          {items.map(item => (
            <ShuffleItem key={item.id} item={item} />
          ))}
        </ScrollView>

        {/* Fade effect at top */}
        {/* <LinearGradient
          colors={['#ffffff', '#ffffffca', 'rgba(255,255,255,0)']}
          style={styles.topFade}
          pointerEvents="none"
        /> */}
      </View>
    </View>
  );
};

export default ShufflePinnedList;

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 24,
    borderWidth: 1,
    borderColor: appColors.grey003,
    width: '90%',
    alignSelf: 'center',
    overflow: 'hidden',
    paddingTop: 10,
  },
  header: {
    paddingHorizontal: COMMON_PADDING_HORIZONTAL,
  },
  title: {
    fontWeight: '700',
    fontSize: 14,
    color: appColors.grey002,
    fontFamily: fontFamily.manrope.semiBold,
  },
  subtitle: {
    fontWeight: '500',
    fontSize: 12,
    color: appColors.grey002,
    fontFamily: fontFamily.manrope.regular,
  },
  scrollArea: {
    flex: 1,
    // paddingTop: 70,
  },
  scrollContent: {
    paddingBottom: 100,
    paddingTop: 50,
  },
  topFade: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 70, // adjust for stronger or softer fade
  },
});
