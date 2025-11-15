import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Text,
} from 'react-native';
import Animated, { FadeIn } from 'react-native-reanimated';
import { SafeAreaView } from 'react-native-safe-area-context';
import { appColors, calculatorThemes } from '../constants';
import { Calculator } from '../Calculator';
import { ThemeSlider } from '../components/ThemeSlider';

export const Screen: React.FC = () => {
  const [selectedThemeIndex, setSelectedThemeIndex] = useState(0);
  const selectedTheme = calculatorThemes[selectedThemeIndex];

  const handleThemeSelect = (index: number) => {
    setSelectedThemeIndex(index);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
      >
        {/* Calculator */}
        <View style={styles.calculatorContainer}>
          <Calculator theme={selectedTheme.theme} />
        </View>

        {/* Color Slider */}
        <ThemeSlider
          themes={calculatorThemes}
          selectedThemeId={selectedTheme.id}
          onSelect={handleThemeSelect}
        />

        {/* Title and Subtitle */}
        <View style={styles.textContainer}>
          <Animated.Text
            entering={FadeIn.delay(300).duration(300)}
            style={styles.title}
          >
            Customize your calculator
          </Animated.Text>
          <Animated.Text
            entering={FadeIn.duration(300).delay(600)}
            style={styles.subtitle}
          >
            Currently previewing the {selectedTheme.name} palette. Swipe to
            explore more styles.
          </Animated.Text>
        </View>

        {/* Continue Button */}
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.continueButton}>
            <Text style={styles.continueButtonText}>Continue</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: appColors.creamBackground,
  },
  scrollView: {
    flex: 1,
  },
  calculatorContainer: {
    paddingHorizontal: 20,
    paddingTop: 40,
    paddingBottom: 20,
  },
  textContainer: {
    paddingHorizontal: 20,
    paddingVertical: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: appColors.darkGray,
    marginBottom: 8,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: appColors.lightGray,
    textAlign: 'center',
  },
  buttonContainer: {
    paddingHorizontal: 20,
    paddingVertical: 30,
    paddingBottom: 40,
  },
  continueButton: {
    backgroundColor: appColors.darkGray,
    borderRadius: 12,
    paddingVertical: 16,
    alignItems: 'center',
  },
  continueButtonText: {
    color: appColors.white,
    fontSize: 18,
    fontWeight: '600',
  },
});
