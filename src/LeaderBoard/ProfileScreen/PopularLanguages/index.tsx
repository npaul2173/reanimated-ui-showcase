import React from 'react';
import { View, Text, ScrollView, Image, StyleSheet } from 'react-native';
import { fontFamily } from '../../../../assets/fonts';
import { PADDING_HORIZONTAL_CONTAIN, flags, appColors } from '../../constants';
import Animated, { FadeInRight } from 'react-native-reanimated';

export const PopularLanguages: React.FC = () => {
  return (
    <View style={styles.container}>
      <Animated.View entering={FadeInRight.delay(1000)}>
        <Text style={styles.title}>Popular languages</Text>
      </Animated.View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {flags.map((item, index) => (
          <Animated.View
            entering={FadeInRight.delay(1000 + 100 * index)}
            key={index}
            style={styles.flagContainer}
          >
            <Image
              source={item.image}
              style={styles.flagImage}
              resizeMode="contain"
            />
          </Animated.View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: PADDING_HORIZONTAL_CONTAIN,
  },
  title: {
    fontSize: 20,
    letterSpacing: -0.7,
    fontFamily: fontFamily.poppins.medium,
    marginBottom: 10,
  },
  scrollContent: {
    gap: 10,
  },
  flagContainer: {
    padding: 10,
    borderWidth: 2,
    borderRadius: 99,
    borderColor: appColors.wheatDarker,
  },
  flagImage: {
    height: 40,
    width: 40,
  },
});
