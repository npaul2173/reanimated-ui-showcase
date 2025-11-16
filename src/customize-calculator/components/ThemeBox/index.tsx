import React from 'react';
import { View, StyleSheet } from 'react-native';
import { CalculatorTheme } from '../../constants';

type ThemeBoxProps = {
  theme: CalculatorTheme;
  width?: number;
  height?: number;
};

export const ThemeBox: React.FC<ThemeBoxProps> = ({
  theme,
  width = 50,
  height = 60,
}) => {
  const stripeHeight = height / 4;
  return (
    <View style={[styles.colorSwatch, { width, height }]}>
      <View
        style={[
          styles.stripe,
          {
            height: stripeHeight,
            backgroundColor: theme.theme.tertiary.backgroundColor,
          },
        ]}
      />
      <View
        style={[
          styles.stripe,
          {
            height: stripeHeight,
            backgroundColor: theme.theme.secondary.backgroundColor,
          },
        ]}
      />
      <View
        style={[
          styles.stripe,
          {
            height: stripeHeight,
            backgroundColor: theme.theme.base.buttonColor,
          },
        ]}
      />
      <View
        style={[
          styles.stripe,
          {
            height: stripeHeight,
            backgroundColor: theme.theme.base.backgroundColor,
          },
        ]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  colorSwatch: {},
  stripe: {
    width: '100%',
  },
});
