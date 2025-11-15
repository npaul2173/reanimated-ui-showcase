import React from 'react';
import { View, StyleSheet } from 'react-native';
import { CalculatorTheme } from '../../constants';

type ThemeBoxProps = {
  theme: CalculatorTheme;
};

export const ThemeBox: React.FC<ThemeBoxProps> = ({ theme }) => {
  return (
    <View style={styles.colorSwatch}>
      <View
        style={[
          styles.stripe,
          { backgroundColor: theme.theme.tertiary.backgroundColor },
        ]}
      />
      <View
        style={[
          styles.stripe,
          { backgroundColor: theme.theme.secondary.backgroundColor },
        ]}
      />
      <View
        style={[
          styles.stripe,
          { backgroundColor: theme.theme.base.buttonColor },
        ]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  colorSwatch: {
    width: 50,
  },
  stripe: {
    width: '100%',
    height: 20,
  },
});
