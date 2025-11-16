import MaterialDesignIcons from '@react-native-vector-icons/material-design-icons';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import {
  BUTTON_SIZE,
  CalculatorButton,
  CalculatorTheme,
  CalculatorThemeKey,
  buttonLayout,
} from '../constants';

export interface CalculatorProps {
  theme: CalculatorTheme['theme'];
}

export const Calculator: React.FC<CalculatorProps> = ({ theme }) => {
  const getPalette = (themeType: CalculatorThemeKey) => theme[themeType];

  const renderButton = (
    button: CalculatorButton,
    index: number,
    rowIndex: number,
  ) => {
    if (button.type === 'null') {
      return <View key={`${rowIndex}-${index}`} style={styles.emptyCell} />;
    }

    const palette = getPalette(button.themeType);
    const isZeroButton = button.value === '0';
    const buttonWidth = BUTTON_SIZE;

    console.log(
      'palette.buttonBorderColor',
      palette.buttonBorderColor,
      palette.buttonBorderColor === null,
    );
    const isButtonBorderExists = palette.buttonBorderColor !== null;
    console.log('isButtonBorderExists', isButtonBorderExists);

    return (
      <TouchableOpacity
        key={`${rowIndex}-${index}`}
        style={[
          styles.button,
          {
            width: buttonWidth,
            backgroundColor: palette.buttonColor,
            borderColor: palette.buttonBorderColor ?? 'transparent',
            borderWidth: isButtonBorderExists ? 1 : 0,
          },
        ]}
        disabled
      >
        <Text style={[styles.buttonText, { color: palette.buttonTextColor }]}>
          {button.value}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: theme.base.backgroundColor },
      ]}
    >
      {/* Display Area */}
      <View style={styles.displayContainer}>
        <Text style={[styles.displayText, { color: theme.textColor }]}>0</Text>
        <View style={[styles.memoryIcon]}>
          <MaterialDesignIcons
            name={'backspace-outline'}
            size={30} // icon smaller than button
            color={theme.textColor}
          />
        </View>
      </View>

      {/* Button Grid */}
      <View style={styles.buttonGrid}>
        {buttonLayout.map((row, rowIndex) => (
          <View key={rowIndex} style={styles.buttonRow}>
            {row.map((button, index) => renderButton(button, index, rowIndex))}
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    // height: 400,
    borderRadius: 20,
    padding: 20,
    justifyContent: 'space-between',
  },
  displayContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 20,
  },
  displayText: {
    fontSize: 48,
    fontWeight: '300',
    marginRight: 10,
  },
  memoryIcon: {
    // width: 20,
    // height: 20,
    // borderRadius: 4,
  },
  buttonGrid: {
    flex: 1,
    justifyContent: 'space-between',
    paddingTop: 20,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  button: {
    width: BUTTON_SIZE,
    height: BUTTON_SIZE,
    borderRadius: BUTTON_SIZE / 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyCell: {
    width: BUTTON_SIZE,
    height: BUTTON_SIZE,
  },
  buttonText: {
    fontSize: 24,
    fontWeight: '500',
  },
});
