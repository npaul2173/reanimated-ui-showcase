import MaterialDesignIcons from '@react-native-vector-icons/material-design-icons';
import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

import Animated, { FadeInDown, FadeInRight } from 'react-native-reanimated';
import { fontFamily } from '../../../../assets/fonts';
import {
  appColors,
  PADDING_HORIZONTAL_CONTAIN,
  streaksData,
} from '../../constants';

export const StreakView: React.FC = () => {
  return (
    <Animated.View entering={FadeInRight.delay(300)} style={styles.container}>
      <View style={styles.card}>
        {/* Streak title */}
        <View style={styles.header}>
          <Text style={styles.streakTitle}>14 days on streak!</Text>
        </View>

        {/* Streak days list */}
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={{ width: PADDING_HORIZONTAL_CONTAIN }} />
          {streaksData.map((item, index) => (
            <Animated.View
              entering={FadeInRight.delay(300 + 100 * index)}
              key={item.day}
              style={styles.streakItem}
            >
              <MaterialDesignIcons
                name="star-four-points"
                size={30}
                color={appColors.yellowGolden}
              />
              <Text style={styles.dayText}>Day {item.day}</Text>
            </Animated.View>
          ))}
        </ScrollView>

        {/* Reward button */}
        <Animated.View
          entering={FadeInDown.delay(600)}
          style={styles.rewardButton}
        >
          <Text style={styles.rewardText}>Get a reward</Text>
        </Animated.View>
      </View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: PADDING_HORIZONTAL_CONTAIN,
  },
  card: {
    backgroundColor: appColors.orange,
    borderRadius: 20,
  },
  header: {
    padding: PADDING_HORIZONTAL_CONTAIN,
  },
  streakTitle: {
    fontSize: 20,
    color: appColors.white,
    fontFamily: fontFamily.poppins.medium,
  },
  streakItem: {
    backgroundColor: appColors.orange002,
    padding: 10,
    borderRadius: 10,
    marginRight: 10,
    alignItems: 'center',
  },
  dayText: {
    fontSize: 12,
    color: appColors.white,
    fontFamily: fontFamily.poppins.medium,
  },
  rewardButton: {
    backgroundColor: appColors.white,
    marginHorizontal: 16,
    marginVertical: 16,
    paddingVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
  },
  rewardText: {
    fontSize: 18,
    color: appColors.black,
    letterSpacing: -0.5,
    fontFamily: fontFamily.poppins.bold,
  },
});
