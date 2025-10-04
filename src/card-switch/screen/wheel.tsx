import React from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated';

const { width } = Dimensions.get('window');
const WHEEL_SIZE = width * 0.7;

export default function Wheel() {
  const rotation = useSharedValue(0); // total rotation
  const startAngle = useSharedValue(0); // angle offset

  const panGesture = Gesture.Pan()
    .onBegin(event => {
      const centerX = WHEEL_SIZE / 2;
      const centerY = WHEEL_SIZE / 2;

      const x = event.x - centerX;
      const y = event.y - centerY;

      // Store difference between current angle and rotation
      startAngle.value = Math.atan2(y, x) - rotation.value;
    })
    .onUpdate(event => {
      const centerX = WHEEL_SIZE / 2;
      const centerY = WHEEL_SIZE / 2;

      const x = event.x - centerX;
      const y = event.y - centerY;

      const angle = Math.atan2(y, x);

      // update rotation relative to initial offset
      rotation.value = angle - startAngle.value;
    });

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ rotate: `${rotation.value}rad` }],
    };
  });

  return (
    <View style={styles.container}>
      <GestureDetector gesture={panGesture}>
        <Animated.View style={[styles.wheel, animatedStyle]}>
          <View style={styles.square} />
        </Animated.View>
      </GestureDetector>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  wheel: {
    width: WHEEL_SIZE,
    height: WHEEL_SIZE,
    borderRadius: WHEEL_SIZE / 2,
    backgroundColor: '#4A90E2',
    borderWidth: 8,
    borderColor: '#333',
    justifyContent: 'center',
    alignItems: 'center',
  },
  square: {
    width: WHEEL_SIZE * 0.7,
    height: WHEEL_SIZE * 0.7,
    backgroundColor: '#405369ff',
  },
});
