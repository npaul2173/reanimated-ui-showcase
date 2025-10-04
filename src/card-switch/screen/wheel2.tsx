import React from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withDecay,
  withSpring,
} from 'react-native-reanimated';

const { width } = Dimensions.get('window');
const WHEEL_SIZE = width * 0.7;

function Wheel2() {
  const rotation = useSharedValue(0); // Current wheel rotation
  const startRotation = useSharedValue(0); // Rotation at gesture start

  // const calculateDegree = (
  //   e: GestureUpdateEvent<PanGestureHandlerEventPayload>,
  // ) => {
  //   'worklet';
  //   const centerX = WHEEL_SIZE / 2;
  //   const centerY = WHEEL_SIZE / 2;

  //   const x = e.x - centerX;
  //   const y = e.y - centerY;

  //   return Math.atan2(y, x);
  // };

  // const dragGesture = Gesture.Pan()
  //   .onStart(e => {
  //     prevAngle.value = calculateDegree(e);
  //   })
  //   .onUpdate(e => {
  //     const newAngle = calculateDegree(e);
  //     let delta = newAngle - prevAngle.value;

  //     // Normalize delta to avoid jumps at ±π
  //     if (delta > Math.PI) delta -= 2 * Math.PI;
  //     else if (delta < -Math.PI) delta += 2 * Math.PI;

  //     rotation.value += delta;
  //     prevAngle.value = newAngle;
  //   });

  const center = { x: WHEEL_SIZE / 2, y: WHEEL_SIZE / 2 };

  const panGesture = Gesture.Pan()
    .onStart(event => {
      const dx = event.x - center.x;
      const dy = event.y - center.y;
      startRotation.value = rotation.value - Math.atan2(dy, dx);
    })
    .onUpdate(event => {
      const dx = event.x - center.x;
      const dy = event.y - center.y;
      // const angle = Math.atan2(dy, dx);
      // rotation.value = startRotation.value + angle;

      // const distance = Math.sqrt(dx * dx + dy * dy);
      // if (distance < 20) return; // ignore near center

      const angle = Math.atan2(dy, dx);
      rotation.value = withSpring(startRotation.value + angle, {
        damping: 2000,
        stiffness: 150,
      });
    })
    .onEnd(() => {
      // optional momentum spin
      startRotation.value = rotation.value;
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
          <View style={styles.sqaure} />
        </Animated.View>
      </GestureDetector>
    </View>
  );
}

export { Wheel2 };
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
  sqaure: {
    width: WHEEL_SIZE * 0.6,
    height: WHEEL_SIZE * 0.6,
    backgroundColor: '#FFFFFF',
  },
});
