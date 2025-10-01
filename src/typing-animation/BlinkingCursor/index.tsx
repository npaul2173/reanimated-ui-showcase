import React from 'react';
import { ViewStyle } from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
} from 'react-native-reanimated';

type CursorProps = {
  color?: string;
  width?: number;
  height?: number;
  style?: ViewStyle;
};

export const BlinkingCursor: React.FC<CursorProps> = ({
  color = '#000',
  width = 2,
  height = 20,
  style,
}) => {
  const opacity = useSharedValue(1);

  // run blinking loop
  React.useEffect(() => {
    opacity.value = withRepeat(withTiming(0, { duration: 600 }), -1, true);
  }, [opacity]);

  const animatedStyle = useAnimatedStyle(() => ({
    opacity: opacity.value,
  }));

  return (
    <Animated.View
      style={[
        {
          backgroundColor: color,
          width,
          height,
        },
        animatedStyle,
        style,
      ]}
    />
  );
};

// const styles = StyleSheet.create({
//   container: {
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
// });
