import React from 'react';
import {
  Pressable,
  Text,
  View,
  ViewStyle,
  StyleSheet,
  GestureResponderEvent,
} from 'react-native';
import MaskedView from '@react-native-masked-view/masked-view';
import LinearGradient from 'react-native-linear-gradient';

type AdvancedButtonProps = {
  colors: string[];
  onPress?: (event: GestureResponderEvent) => void;
  style?: ViewStyle;
  title: string;
  innerColor?: string; // background color of inner button
  borderRadius?: number;
  borderWidth?: number;
  textColor?: string;
};

export function AdvancedButton({
  colors,
  onPress,
  style,
  title,
  borderRadius = 16,
  borderWidth = 3,
  textColor,
}: AdvancedButtonProps) {
  return (
    <View>
      <Pressable
        onPress={onPress}
        style={[
          StyleSheet.absoluteFill,
          {
            borderRadius: borderRadius - borderWidth,
            margin: borderWidth,
            backgroundColor: 'transparent',
            justifyContent: 'center',
            alignItems: 'center',
          },
        ]}
      >
        <Text style={[styles.text, { color: textColor }]}>{title}</Text>
      </Pressable>
      <MaskedView
        style={[styles.maskedContainer, style]}
        maskElement={
          <View
            pointerEvents="none"
            style={{
              flex: 1,
              borderRadius,
              borderWidth,
              // backgroundColor: 'transparent',
            }}
          />
        }
      >
        {/* Gradient border */}
        <LinearGradient
          colors={colors}
          style={StyleSheet.absoluteFill}
          pointerEvents="none"
        />
      </MaskedView>
    </View>
  );
}

const styles = StyleSheet.create({
  maskedContainer: {
    overflow: 'hidden',
    width: 200,
    height: 50,
  },
  text: {
    fontWeight: '600',
    fontSize: 16,
    color: '#ffffffff',
  },
});
