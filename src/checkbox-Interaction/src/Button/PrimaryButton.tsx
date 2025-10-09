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
import { runOnJS } from 'react-native-worklets';

interface PrimaryButtonProps {
  title: string;
  onPress?: () => void;
  icon?: string;
}

export const PrimaryButton: React.FC<PrimaryButtonProps> = ({
  title,
  onPress,
  icon,
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
      // @ts-ignore
      runOnJS(onPress)(); // ✅ back to JS thread
    });

  return (
    <GestureDetector gesture={tap}>
      <Animated.View
        style={[
          icon
            ? { ...styles.button }
            : { ...styles.button, ...styles.buttonWithoutIconContainer },
          animatedStyle,
        ]}
      >
        <Text style={[styles.label]}>{title}</Text>
        {icon && (
          <MaterialDesignIcons
            name="arrow-right-thin"
            size={30}
            color={'#171717ff'}
          />
        )}
      </Animated.View>
    </GestureDetector>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#D7EC29',
    borderRadius: 15,
    paddingHorizontal: 20,
    paddingVertical: 12,
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  buttonWithoutIconContainer: { justifyContent: 'center' },
  label: {
    color: '#171717ff',
    fontSize: 16,
    fontFamily: fontFamily.zolandoSans.bold,
  },
});
