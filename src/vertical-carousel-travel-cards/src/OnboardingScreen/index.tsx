import MaterialDesignIcons from '@react-native-vector-icons/material-design-icons';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { StyleSheet, Text } from 'react-native';
import Animated, { FadeInRight } from 'react-native-reanimated';
import { SafeAreaView } from 'react-native-safe-area-context';
import { fontFamily } from '../../../../assets/fonts';
import { CheckBoxInteractionStackParamsList } from '../../app';
import { PADDING_HORIZONTAL_CONTAIN } from '../constants';

type Props = NativeStackScreenProps<
  CheckBoxInteractionStackParamsList,
  'OnboardingScreenScreen'
>;
export const OnboardingScreenScreen: React.FC<Props> = ({ navigation }) => {
  return (
    <SafeAreaView mode="margin" style={styles.container}>
      <Animated.View
        onTouchEnd={() => {
          navigation.goBack();
        }}
        entering={FadeInRight.delay(300)}
        style={styles.appheader}
      >
        <MaterialDesignIcons name="arrow-left-thin" size={40} />
      </Animated.View>
      <Animated.View entering={FadeInRight.delay(500)} style={styles.header}>
        <Text style={styles.title}>What do you want to learn?</Text>
        <Text style={styles.subtitle}>
          Select your areas of courses you would like to learn
        </Text>
      </Animated.View>
    </SafeAreaView>
  );
};

export const styles = StyleSheet.create({
  appheader: {
    paddingHorizontal: PADDING_HORIZONTAL_CONTAIN,
    paddingTop: 20,
    paddingBottom: 10,
  },
  buttonContainer: {
    padding: PADDING_HORIZONTAL_CONTAIN,
    paddingBottom: 30,
  },
  container: {
    flex: 1,
    // paddingTop: 40,
    backgroundColor: '#ffffffff',
  },
  header: {
    paddingHorizontal: PADDING_HORIZONTAL_CONTAIN,
    paddingBottom: 20,
  },
  title: {
    // fontWeight: '700',
    fontSize: 40,
    letterSpacing: -1,
    fontFamily: fontFamily.zolandoSans.bold,
  },
  subtitle: {
    fontSize: 18,
    color: '#9c9c9cff',
    fontFamily: fontFamily.zolandoSans.regular,
  },
});
