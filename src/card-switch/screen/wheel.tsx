import React from 'react';
import { StyleSheet } from 'react-native';
import {
  Gesture,
  GestureDetector,
  GestureHandlerRootView,
} from 'react-native-gesture-handler';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
} from 'react-native-reanimated';

function Wheel() {
  const angle = useSharedValue(0);
  const startAngle = useSharedValue(0);

  const rotation = Gesture.Rotation()
    .onStart(() => {
      startAngle.value = angle.value;
    })
    .onUpdate(event => {
      angle.value = startAngle.value + event.rotation;
    });

  const boxAnimatedStyles = useAnimatedStyle(() => ({
    transform: [{ rotate: `${angle.value}rad` }],
  }));

  return (
    <GestureHandlerRootView style={styles.container}>
      <GestureDetector gesture={rotation}>
        <Animated.View style={[styles.box, boxAnimatedStyles]} />
      </GestureDetector>
    </GestureHandlerRootView>
  );
}

export { Wheel };
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 300,
    height: 300,
    borderRadius: 20,
    backgroundColor: '#b58df1',
  },
  dot: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: '#ccc',
    position: 'absolute',
    left: '50%',
    top: '50%',
  },
});
