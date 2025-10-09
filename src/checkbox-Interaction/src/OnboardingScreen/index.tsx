import MaterialDesignIcons from '@react-native-vector-icons/material-design-icons';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useState } from 'react';
import { StyleSheet, Text } from 'react-native';
import Animated, {
  FadeInRight,
  SlideInDown,
  SlideOutDown,
} from 'react-native-reanimated';
import { SafeAreaView } from 'react-native-safe-area-context';
import { fontFamily } from '../../../../assets/fonts';
import { CheckBoxInteractionStackParamsList } from '../../app';
import { DefaultButton } from '../Button/defaultButton';
import { Checkbox } from '../checkBox';
import { checkboxItems, PADDING_HORIZONTAL_CONTAIN } from '../constants';

type Props = NativeStackScreenProps<
  CheckBoxInteractionStackParamsList,
  'OnboardingScreenScreen'
>;
export const OnboardingScreenScreen: React.FC<Props> = ({ navigation }) => {
  const [checkedList, setCheckedList] = useState<Set<string>>(new Set());

  const onTouchEnd = (key: string) => {
    setCheckedList(prev => {
      const newSet = new Set(prev);
      if (newSet.has(key)) {
        newSet.delete(key);
      } else {
        newSet.add(key);
      }
      return newSet;
    });
  };
  const isButtonVisible = checkedList.size > 0;
  console.log({ isButtonVisible });

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
      <Animated.ScrollView>
        <Animated.View style={styles.checkboxContainer}>
          {checkboxItems.map((item, index) => {
            const isSelected = checkedList.has(item.key);
            return (
              <Checkbox
                index={index}
                label={item.title}
                key={item.key}
                checked={isSelected}
                onPress={() => onTouchEnd(item.key)}
              />
            );
          })}
        </Animated.View>
      </Animated.ScrollView>
      {isButtonVisible && (
        <Animated.View
          entering={SlideInDown}
          exiting={SlideOutDown}
          style={styles.buttonContainer}
        >
          <DefaultButton title="Continue" />
        </Animated.View>
      )}
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
  checkboxContainer: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    paddingHorizontal: PADDING_HORIZONTAL_CONTAIN,
    gap: 16,
    paddingBottom: 200,
  },
});
