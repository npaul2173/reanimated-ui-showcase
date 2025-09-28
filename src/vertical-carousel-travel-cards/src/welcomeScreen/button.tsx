import React from 'react';
import { Pressable, View, StyleSheet, Text, ViewStyle } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

type GradientBorderButtonProps = {
  colors: string[];
  onPress?: () => void;
  style?: ViewStyle;
  title: string;
  innerColor?: string; // background color of inner button
  borderRadius?: number; // for outer & inner
  borderWidth?: number; // width of the gradient border
};

export default function GradientBorderButton({
  colors,
  onPress,
  style,
  innerColor = '#111111',
  borderRadius = 12,
  borderWidth = 2,
  title,
}: GradientBorderButtonProps) {
  return (
    <LinearGradient
      colors={colors}
      style={[styles.outer, { borderRadius }, style]}
    >
      <Pressable onPress={onPress}>
        <View
          style={{
            margin: borderWidth,
            borderRadius: borderRadius - borderWidth,
            backgroundColor: innerColor,
            justifyContent: 'center',
            alignItems: 'center',
            paddingVertical: 10,
            paddingHorizontal: 20,
          }}
        >
          <Text style={styles.text}>{title}</Text>
        </View>
      </Pressable>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  outer: {
    overflow: 'hidden',
  },
  text: {
    color: '#fff',
    fontWeight: '600',
  },
});
