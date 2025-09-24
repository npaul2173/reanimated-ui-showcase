import React, { useRef, useState } from 'react';
import {
  Dimensions,
  FlatList,
  StatusBar,
  StyleProp,
  StyleSheet,
  View,
  ViewStyle,
} from 'react-native';
import Animated, {
  AnimatedStyle,
  FadeIn,
  FadeOut,
  useAnimatedScrollHandler,
  useSharedValue,
} from 'react-native-reanimated';

import { scheduleOnRN } from 'react-native-worklets';
import { travelInfoItems } from '../constants';
import { CARD_WIDTH, TravelExperienceCard } from './TravelExperienceCard';

const { width: appWidth } = Dimensions.get('screen');
const SPACING = 30; // consistent spacing

const flatListStyles: StyleProp<AnimatedStyle<StyleProp<ViewStyle>>> = {
  flexGrow: 0,
  paddingVertical: 40,
};
export const Screen = () => {
  const flatListRef = useRef<FlatList>(null);
  const progress = useSharedValue(0); // <--- shared value
  const [activeIndex, setActiveIndex] = useState<number>(0);

  // Animated scroll handler
  const scrollHandler = useAnimatedScrollHandler({
    onScroll: event => {
      const offsetX = event.contentOffset.x;
      const offsetCAlculated = offsetX / (CARD_WIDTH + SPACING); // fractional index
      progress.value = offsetCAlculated; // fractional index
      scheduleOnRN(setActiveIndex, Math.round(offsetCAlculated));
    },
  });

  return (
    <View style={styles.container}>
      <StatusBar translucent hidden />

      {/* Background Image */}
      <Animated.Image
        key={`activeIndex-${activeIndex}`}
        entering={FadeIn.duration(500)}
        exiting={FadeOut.duration(500)}
        source={travelInfoItems[activeIndex].gallery[0].image}
        style={styles.backgroundImage}
      />

      {/* Animated FlatList */}
      <Animated.FlatList
        ref={flatListRef}
        data={travelInfoItems}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        decelerationRate="fast"
        snapToInterval={CARD_WIDTH + SPACING}
        style={flatListStyles}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item }) => <TravelExperienceCard data={item} />}
        contentContainerStyle={{
          gap: SPACING,
          paddingHorizontal: (appWidth - CARD_WIDTH) / 2,
        }}
        onScroll={scrollHandler}
        scrollEventThrottle={16}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eaeaea',
    alignItems: 'center',
    justifyContent: 'center',
  },
  backgroundImage: {
    ...StyleSheet.absoluteFillObject,
    resizeMode: 'cover',
  },
});
