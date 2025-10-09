import React from 'react';
import { StyleSheet, View } from 'react-native';
import Animated, {
  SharedValue,
  useAnimatedStyle,
  withSpring,
} from 'react-native-reanimated';
import { BreakdownItem } from './breakdownItem';
import { BreakDownDataProps } from '../constants';

const PADDING_HORIZONTAL = 16;
const ITEM_HEIGHT = 50;
const ITEM_GAP = 10;

interface BodyProps {
  sharedExpanded: SharedValue<number>;
  uiViewWidth: number;
  data: BreakDownDataProps[];
}

export const Body: React.FC<BodyProps> = ({
  sharedExpanded,
  uiViewWidth,
  data,
}) => {
  const dataLength = data.length;

  const animatedStyles = useAnimatedStyle(() => {
    const targetHeight = sharedExpanded.value
      ? dataLength * ITEM_HEIGHT + ITEM_GAP * (dataLength - 1) + 30
      : 0;

    return {
      height: withSpring(targetHeight, {
        damping: sharedExpanded.value === 1 ? 40 : undefined, // ↓ lower = more oscillation/bounce
        stiffness: 500,
      }),
    };
  }, [dataLength]);

  const contentWidth = uiViewWidth - PADDING_HORIZONTAL * 2;

  return (
    <View>
      <Animated.View style={[styles.listContainer, animatedStyles]}>
        {data.map((item, index) => (
          <BreakdownItem
            key={item.title ?? index}
            index={index}
            data={item}
            sharedExpanded={sharedExpanded}
            uiWidth={contentWidth}
          />
        ))}
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  listContainer: {
    borderRadius: 20,
    paddingHorizontal: PADDING_HORIZONTAL,
    gap: ITEM_GAP,
  },
});
