import React from 'react';
import {
  View,
  ScrollView,
  TouchableOpacity,
  Text,
  StyleSheet,
} from 'react-native';
import { appColors, CalculatorTheme } from '../../constants';
import { ThemeBox } from '../ThemeBox';

type ThemeSliderProps = {
  themes: CalculatorTheme[];
  selectedThemeId: string;
  onSelect: (index: number) => void;
};

export const ThemeSlider: React.FC<ThemeSliderProps> = ({
  themes,
  selectedThemeId,
  onSelect,
}) => {
  return (
    <View style={styles.sliderContainer}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{ borderRadius: 10, overflow: 'hidden' }}
        contentContainerStyle={styles.sliderContent}
      >
        {themes.map(theme => {
          return <ThemeBox key={theme.id} theme={theme} />;
        })}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  sliderContainer: {
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  sliderContent: {
    // paddingHorizontal: 10,
    overflow: 'hidden',
    borderRadius: 10,
    // backgroundColor: 'red',
  },
  colorSwatch: {
    width: 50,
    // borderRadius: 12,
    // marginHorizontal: 6,
    // justifyContent: 'center',
    // alignItems: 'center',
    // paddingHorizontal: 6,
  },
  colorSwatchText: {
    fontSize: 10,
    fontWeight: '600',
    color: appColors.black,
    textAlign: 'center',
  },
});
