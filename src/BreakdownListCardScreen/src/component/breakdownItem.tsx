import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import AntDesign from '@react-native-vector-icons/ant-design';
import Animated, {
  SharedValue,
  useAnimatedStyle,
  withSpring,
  withDelay,
  withTiming,
} from 'react-native-reanimated';
import { BreakDownDataProps } from '../constants';

export const BreakdownItem: React.FC<{
  sharedExpanded: SharedValue<number>;
  data: BreakDownDataProps;
  uiWidth: number;
  index: number;
}> = ({ data, uiWidth, sharedExpanded, index }) => {
  // Animate the bar width
  const animatedWidth = useAnimatedStyle(() => {
    // I want the bar to animate to my will only when the value of the shared is 1 else not
    if (sharedExpanded.value === 1) {
      return {
        width: withDelay(
          500 + index * 100,
          withSpring(sharedExpanded.value ? (data.value / 100) * uiWidth : 0),
        ),
      };
    } else {
      return {
        width: 0,
      };
    }
  });

  // Animate opacity + scale on expand/collapse
  const scaleFade = useAnimatedStyle(() => {
    const delay = index * 120;
    if (sharedExpanded.value === 1) {
      // expanding: animate in
      return {
        opacity: withDelay(delay, withTiming(1, { duration: 400 })),
        transform: [
          { scale: withDelay(delay, withTiming(1, { duration: 400 })) },
        ],
      };
    }

    // collapsing: instantly hide (no animation)
    return {
      opacity: 0,
      transform: [{ scale: 0 }], // keep full size so layout doesn't shrink
    };
  });

  return (
    <Animated.View style={[styles.container, scaleFade]}>
      <Animated.View
        style={[
          styles.barBackground,
          { width: (data.value / 100) * uiWidth },
          animatedWidth,
        ]}
      />
      <View style={styles.rowContainer}>
        <View style={styles.row}>
          <View style={styles.iconWrapper}>
            <AntDesign name={data.icon as any} size={20} color="#838383ff" />
          </View>
          <Text>{data.title}</Text>
        </View>
        <Text>{data.value}%</Text>
      </View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#e6e6e6ff',
    height: 50,
    overflow: 'hidden',
  },
  barBackground: {
    position: 'absolute',
    height: 50,
    backgroundColor: '#e6e6e6ff',
  },
  rowContainer: {
    flexDirection: 'row',
    height: 50,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 10,
  },

  iconWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
