/* eslint-disable react-native/no-inline-styles */
import { useRef, useState } from 'react';
import { Dimensions, StatusBar, StyleSheet, View } from 'react-native';
import Animated, {
  useAnimatedScrollHandler,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import { SafeAreaView } from 'react-native-safe-area-context';
import Sound from 'react-native-sound';
import { scheduleOnRN } from 'react-native-worklets';
import { AlienInfo } from './AlienInfo';
import { AlienScrollView } from './AlienScrollView';
import { alienData, AlienDataProps, appColors } from './constants';
import { GreenRim } from './GreenRim';
import { MainOuterCircle } from './MainOuterCircle';
import { RingElements } from './RingElements';
import { SubtarctScope } from './SubtarctScope';

export const PADDING = 20;
const { width: appWidth } = Dimensions.get('screen');
export const WATCH_SIZE = appWidth * 0.9;

// Screen code
export const Screen = () => {
  const scrollRef = useRef<Animated.FlatList<AlienDataProps>>(null);

  const rotation = useSharedValue(0);
  const progress = useSharedValue(0); // <--- shared value
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const totalItems = alienData.length;
  console.log({ activeIndex });

  // const animatedStyle = useAnimatedStyle(() => ({
  //   transform: [{ rotate: `${rotation.value}deg` }],
  // }));

  // Enable playback in background and when screen is locked
  // Sound.setCategory('Playback');

  const whoosh = new Sound('watch_clutch.mp3', Sound.MAIN_BUNDLE, error => {
    if (error) {
      console.log('failed to load the sound', error);
      return;
    }
    // loaded successfully
    console.log(
      'duration in seconds: ' +
        whoosh.getDuration() +
        'number of channels: ' +
        whoosh.getNumberOfChannels(),
    );

    // Play the sound with an onEnd callback
    // whoosh.play(success => {
    //   if (success) {
    //     console.log('successfully finished playing');
    //   } else {
    //     console.log('playback failed due to audio decoding errors');
    //   }
    //   // Release the audio player resource once playback is complete
    //   whoosh.release();
    // });
  });

  const scrollHandler = useAnimatedScrollHandler({
    onScroll: event => {
      const offsetX = event.contentOffset.x;
      const fractionalIndex = offsetX / WATCH_SIZE; // Use visible item width
      progress.value = fractionalIndex; // update animated progress
    },
    onMomentumEnd: event => {
      const offsetX = event.contentOffset.x;
      const index = Math.round(offsetX / WATCH_SIZE);
      // runOnJS(setActiveIndex)(index); // ensure exact page index
      scheduleOnRN(setActiveIndex, index);
    },
  });

  const paginateButton = (direction: 'next' | 'back') => {
    let newIndex = activeIndex;
    if (direction === 'next') {
      newIndex = Math.min(activeIndex + 1, totalItems - 1); // don't go past end
    } else if (direction === 'back') {
      newIndex = Math.max(activeIndex - 1, 0); // don't go before start
    }

    // update state
    setActiveIndex(newIndex);

    // scroll FlatList programmatically
    scrollRef.current?.scrollToOffset({
      offset: newIndex * WATCH_SIZE, // item width
      animated: true,
    });

    rotation.value = withTiming(
      rotation.value + (direction === 'next' ? 45 : -45),
      {
        duration: 200,
      },
    );

    whoosh.play();
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        barStyle={'light-content'}
        backgroundColor={appColors.baseBlueDarker}
      />

      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <View
          style={{
            width: WATCH_SIZE,
            height: WATCH_SIZE,
          }}
        >
          <MainOuterCircle />
          <GreenRim />
          <AlienScrollView
            data={alienData}
            onScroll={scrollHandler}
            scrollRef={scrollRef}
            progress={progress}
          />
          <SubtarctScope />
          <RingElements rotation={rotation} />
        </View>
      </View>

      <AlienInfo
        activeIndex={activeIndex}
        totalItems={totalItems}
        aliens={alienData}
        paginateButton={paginateButton}
      />
    </SafeAreaView>
  );
};

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    backgroundColor: appColors.baseBlueDarker,
  },
});
