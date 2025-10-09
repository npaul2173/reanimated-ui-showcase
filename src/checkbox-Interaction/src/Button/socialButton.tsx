import MaterialDesignIcons from '@react-native-vector-icons/material-design-icons';
import React from 'react';
import { StyleSheet, Text, View, ViewStyle } from 'react-native';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';
import { fontFamily } from '../../../../assets/fonts';

interface SocialButtonProps {
  label: string;
  icon: 'google' | 'facebook' | 'apple'; // Any React element (e.g. an <Svg /> or <Image />)
  onPress?: () => void;
  style?: ViewStyle | ViewStyle[];
}

export const SocialButton: React.FC<SocialButtonProps> = ({
  label,
  icon,
  onPress,
  style,
}) => {
  const scale = useSharedValue(1);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
  }));

  const tap = Gesture.Tap()
    .onBegin(() => {
      scale.value = withSpring(0.95, { damping: 15, stiffness: 200 });
    })
    .onFinalize(() => {
      scale.value = withSpring(1, { damping: 15, stiffness: 200 });
    })
    .onEnd(() => {
      onPress?.();
    });

  return (
    <GestureDetector gesture={tap}>
      <Animated.View style={[styles.button, style, animatedStyle]}>
        <View style={styles.content}>
          <MaterialDesignIcons
            name={
              icon === 'apple'
                ? 'apple'
                : icon === 'facebook'
                ? 'facebook'
                : 'google'
            }
            color={'white'}
            size={20}
          />
          <Text style={styles.label}>{label}</Text>
        </View>
      </Animated.View>
    </GestureDetector>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#000',
    borderRadius: 15,
    paddingVertical: 14,
    paddingHorizontal: 20,
    height: 50,
    justifyContent: 'center',
    alignItems: 'flex-start',
    marginVertical: 6,
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {
    color: '#fff',
    fontSize: 16,
    marginLeft: 12,
    fontFamily: fontFamily.zolandoSans.medium,
  },
});
