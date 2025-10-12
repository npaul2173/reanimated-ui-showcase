import MaterialDesignIcons from '@react-native-vector-icons/material-design-icons';
import React, { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import Animated, { FadeInUp, FadeOutUp } from 'react-native-reanimated';
import { fontFamily } from '../../../../assets/fonts';
import { getRoundedStyles } from '../../../common/util/styling';
import { appColors, COMMON_PADDING_HORIZONTAL } from '../../constants';

type ShuffleViewProps = {
  pinnedItems: Map<string, boolean>;
  currentPinnedText?: string;
  onScrollPinned: (direction: 'up' | 'down') => void;
};

const GAP = 10;
export const ShuffleView: React.FC<ShuffleViewProps> = ({
  pinnedItems,
  currentPinnedText,
  onScrollPinned,
}) => {
  const isPinnedItemsAvailable = pinnedItems.size > 0;
  const [cardWidth, setCardWidth] = useState<number>(0); // store width dynamically

  if (!isPinnedItemsAvailable) return null;

  return (
    <Animated.View
      entering={FadeInUp.duration(300)}
      exiting={FadeOutUp.duration(300)}
      style={styles.container}
    >
      <View
        onLayout={event => {
          const { width } = event.nativeEvent.layout; // get actual width
          setCardWidth(width);
        }}
        style={styles.textContainer}
      >
        <View style={[styles.iconWrapper, { marginRight: GAP }]}>
          <MaterialDesignIcons name="pin" size={25} color={appColors.grey003} />
        </View>
        {currentPinnedText && (
          <Text
            style={[styles.text, { width: cardWidth - (50 + GAP) }]}
            numberOfLines={1}
            ellipsizeMode="tail"
          >
            {currentPinnedText}
          </Text>
        )}
      </View>

      {/* 🔹 Up/Down scroll buttons */}
      <View style={styles.iconWrapper}>
        <Pressable onPress={() => onScrollPinned('up')}>
          <MaterialDesignIcons
            name="chevron-up"
            size={25}
            color={appColors.grey003}
          />
        </Pressable>
        <Pressable onPress={() => onScrollPinned('down')}>
          <MaterialDesignIcons
            name="chevron-down"
            size={25}
            color={appColors.grey003}
          />
        </Pressable>
      </View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: appColors.grey005,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: COMMON_PADDING_HORIZONTAL,
    paddingHorizontal: 4,
    paddingVertical: 4,
    borderRadius: 50,
  },
  textContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  iconWrapper: {
    ...getRoundedStyles(50),
    backgroundColor: appColors.white,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: appColors.grey001,
    fontFamily: fontFamily.manrope.semiBold,
    fontSize: 16,
  },
});
