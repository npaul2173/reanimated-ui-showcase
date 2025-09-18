import React from 'react';
import { Text, StyleSheet } from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
} from 'react-native-reanimated';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import MaterialDesignIcons from '@react-native-vector-icons/material-design-icons';
import { fontFamily } from '../../../../assets/fonts';

interface DefaultButtonProps {
  title: string;
  onPress?: () => void;
}

export const DefaultButton: React.FC<DefaultButtonProps> = ({
  title,
  onPress,
}) => {
  const scale = useSharedValue(1);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
  }));

  const tap = Gesture.Tap()
    .onBegin(() => {
      // shrink slightly on press in
      scale.value = withSpring(0.95, { damping: 15, stiffness: 200 });
    })
    .onFinalize(() => {
      // release back to normal
      scale.value = withSpring(1, { damping: 15, stiffness: 200 });
    })
    .onEnd(() => {
      if (onPress) onPress();
    });

  return (
    <GestureDetector gesture={tap}>
      <Animated.View style={[styles.button, animatedStyle]}>
        <Text style={styles.label}>{title}</Text>
        <MaterialDesignIcons
          name="arrow-right-thin"
          size={30}
          color={'white'}
        />
      </Animated.View>
    </GestureDetector>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#000',
    borderRadius: 15,
    paddingHorizontal: 20,
    paddingVertical: 12,
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  label: {
    color: '#fff',
    fontSize: 16,
    fontFamily: fontFamily.zolandoSans.medium,
  },
});
