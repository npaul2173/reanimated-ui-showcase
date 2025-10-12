import Ionicons from '@react-native-vector-icons/ionicons';
import MaterialDesignIcons from '@react-native-vector-icons/material-design-icons';
import React, { useEffect } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import Animated, {
  Easing,
  interpolateColor,
  Keyframe,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
} from 'react-native-reanimated';
import { ShuffleItemDataProps } from '.';
import { fontFamily } from '../../../../assets/fonts';
import { getRoundedStyles } from '../../../common/util/styling';
import { appColors, COMMON_PADDING_HORIZONTAL } from '../../constants';

const BLINK_TIMES = 3;
interface ShuffleItemProps {
  item: ShuffleItemDataProps;
  isPinned: boolean;
  onToggle: () => void;
  isFocused: boolean;
}

const FadeScaleInKeyframes = new Keyframe({
  0: {
    opacity: 0,
    transform: [{ scale: 0 }],
  },

  100: {
    opacity: 1,
    transform: [{ scale: 1 }],
  },
});

const FadeScaleDownKeyframes = new Keyframe({
  0: {
    opacity: 1,
    transform: [{ scale: 1 }],
  },

  100: {
    opacity: 0,
    transform: [{ scale: 0 }],
  },
});

const ShuffleItem: React.FC<ShuffleItemProps> = ({
  item,
  isPinned,
  onToggle,
  isFocused,
}) => {
  const blink = useSharedValue(0);

  // Start blinking when this item is the current one
  useEffect(() => {
    if (isFocused) {
      blink.value = withRepeat(
        withTiming(1, { duration: 300, easing: Easing.linear }),
        BLINK_TIMES * 2 - 1, // Basically  0 to 1 is considered as one blink, so 3 will take 5 transitions  1 -> 0 -> 1 -> 0 -> 1
        true,
      );
    } else {
      blink.value = withTiming(0, { duration: 100 });
    }
  }, [blink, isFocused]);

  const animatedStyle = useAnimatedStyle(() => {
    const backgroundColor = interpolateColor(
      blink.value,
      [1, 0],
      [appColors.grey005, appColors.white],
    );
    return { backgroundColor };
  });
  return (
    <Pressable onPress={onToggle}>
      <Animated.View style={[styles.container, animatedStyle]}>
        <View style={styles.left}>
          <View style={styles.chatBubble}>
            <Ionicons name="chatbubble" size={20} color={appColors.grey003} />
          </View>
          <Text style={styles.text}>{item.text}</Text>
        </View>

        {isPinned && (
          <Animated.View
            entering={FadeScaleInKeyframes.duration(100)}
            exiting={FadeScaleDownKeyframes.duration(100)}
          >
            <Pressable onPress={onToggle}>
              <MaterialDesignIcons
                name="pin"
                size={30}
                color={appColors.grey003}
              />
            </Pressable>
          </Animated.View>
        )}
      </Animated.View>
    </Pressable>
  );
};

export default ShuffleItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 10,
    paddingHorizontal: COMMON_PADDING_HORIZONTAL,
  },
  left: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  chatBubble: {
    ...getRoundedStyles(40),
    borderWidth: 1,
    borderColor: appColors.grey003,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 16,
    color: appColors.black,
    fontFamily: fontFamily.manrope.semiBold,
  },
});
