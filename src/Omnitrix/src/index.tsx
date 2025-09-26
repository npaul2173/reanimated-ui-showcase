/* eslint-disable react-native/no-inline-styles */
import { useRef, useState } from 'react';
import { Button, Dimensions, StatusBar, StyleSheet, View } from 'react-native';
import Animated, {
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import { SafeAreaView } from 'react-native-safe-area-context';
import Sound from 'react-native-sound';
import { scheduleOnRN } from 'react-native-worklets';
import GreenRim from '../svgs/watchElements/greenRim.svg';
import MainOuterCircle from '../svgs/watchElements/mainOuterCircle.svg';
import RingElements from '../svgs/watchElements/ringElements.svg';
import SubtarctScope from '../svgs/watchElements/subtarctScope.svg';
import { alienData } from './constants';

const appColors = {
  primeGreen: '#E3F326',
  greenDarker: '#183334ff',
  baseBlueDark: '#28314D',
  baseBlueDarker: '#171b29ff',
};

const PADDING = 20;
const { width: appWidth } = Dimensions.get('screen');
const WATCH_SIZE = appWidth - PADDING * 2;
// const HEIGHT =
const ALIEN_SIZE = appWidth - 250;

// Screen code
export const Screen = () => {
  const scrollRef = useRef<Animated.ScrollView>(null);

  // const loopBacgroundEffect = useBGSoundLoop();
  const rotation = useSharedValue(0);
  const progress = useSharedValue(0); // <--- shared value
  const [_activeIndex, setActiveIndex] = useState<number>(0);

  console.log({ _activeIndex });

  // const AlienSubject = AlienAssets['Forearms'];
  const rotateCircle = (direction: 'next' | 'back') => {
    rotation.value = withTiming(
      rotation.value + (direction === 'next' ? 45 : -45),
      {
        duration: 200,
      },
    );
    // whoosh.play();

    const nextIndex =
      direction === 'next'
        ? Math.min(_activeIndex + 1, alienData.length - 1)
        : Math.max(_activeIndex - 1, 0);

    setActiveIndex(nextIndex);

    // // Animate rotation
    // rotation.value = withTiming(
    //   rotation.value + (direction === 'next' ? 45 : -45),
    //   { duration: 200 },
    // );

    // Scroll to the new alien
    scrollRef.current?.scrollTo({
      x: nextIndex * (ALIEN_SIZE + 50), // same as snapToInterval
      animated: true,
    });

    whoosh.play();
  };

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ rotate: `${rotation.value}deg` }],
  }));

  // Enable playback in background and when screen is locked
  Sound.setCategory('Playback');

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

  // useEffect(() => {
  //   Sound.setCategory('Playback');

  //   // Load the mp3 file
  //   bgSound.current = new Sound(
  //     require('../soundEffects/continousBeep.mp3'),
  //     error => {
  //       if (error) {
  //         console.log('Failed to load sound', error);
  //         return;
  //       }
  //       // Set loop to infinite (-1 = infinite loop)
  //       bgSound.current?.setNumberOfLoops(-1);
  //     },
  //   );

  //   return () => {
  //     bgSound.current?.release(); // cleanup when unmount
  //   };
  // }, []);

  const scrollHandler = useAnimatedScrollHandler({
    onScroll: event => {
      const offsetX = event.contentOffset.x;
      const offsetCAlculated = offsetX / (ALIEN_SIZE + 50); // fractional index
      progress.value = offsetCAlculated; // fractional index
      scheduleOnRN(setActiveIndex, Math.round(offsetCAlculated));
    },
  });

  return (
    <SafeAreaView mode="margin" style={styles.container}>
      <StatusBar
        barStyle={'light-content'}
        backgroundColor={appColors.baseBlueDarker}
      />

      {/* <View style={styles.subcontainer}>
        <Text style={styles.title}>Omnitrix</Text>
      </View> */}

      {/* <View>
        <Forearms
          width={ALIEN_SIZE}
          height={ALIEN_SIZE}
          color={appColors.primeGreen}
        />
      </View> */}

      <View style={{ backgroundColor: '#000000ff00' }}>
        <View
          style={{
            // @ts-ignore
            // ...StyleSheet.absoluteFill,
            // backgroundColor: 'wheat',
            width: appWidth,
            height: appWidth,
          }}
        >
          {/* <AlienSubject
              width={ALIEN_SIZE}
              height={ALIEN_SIZE}
              color={appColors.baseBlueDark}
            /> */}

          <Animated.ScrollView
            horizontal
            ref={scrollRef}
            pagingEnabled
            decelerationRate="fast"
            snapToInterval={ALIEN_SIZE}
            snapToAlignment="center"
            showsHorizontalScrollIndicator={false}
            onScroll={scrollHandler}
            // style={{
            //   position: 'absolute',
            //   top: PADDING + 20, // adjust based on your circle offsets
            //   left: PADDING + 40,
            //   width: WATCH_SIZE - 80,
            //   height: WATCH_SIZE - 80,
            //   zIndex: 11, // between GreenRim (11) and SubtarctScope (12)
            //   alignItems: 'center',
            //   justifyContent: 'center',
            // }}
            style={{
              position: 'absolute',
              zIndex: 11,
              top: PADDING + 50, // adjust based on your circle offsets
              left: PADDING + 40,
            }}
            contentContainerStyle={{
              // position: 'absolute',
              // top: PADDING + 20, // adjust based on your circle offsets
              // left: PADDING + 40,
              // width: WATCH_SIZE - 80,
              // height: WATCH_SIZE - 80,
              // zIndex: 100, // between GreenRim (11) and SubtarctScope (12)
              // alignItems: 'center',
              // justifyContent: 'center',
              paddingHorizontal: (appWidth - ALIEN_SIZE) / 2, // center first & last alien
            }}
          >
            {alienData.map(alien => {
              const AlienSubject = alien.icon;

              return (
                <View
                  key={alien.name}
                  style={{
                    width: ALIEN_SIZE,
                    height: ALIEN_SIZE,
                    // backgroundColor: 'wheat',
                  }}
                >
                  <AlienSubject
                    // width={ALIEN_SIZE}
                    // height={ALIEN_SIZE}
                    width={'100%'}
                    height={'100%'}
                    color={appColors.greenDarker}
                  />
                  {/* {alien.icon} */}
                </View>
              );
            })}
          </Animated.ScrollView>
          {/* <View
            style={{
              pointerEvents: 'none',
              backgroundColor: 'wheat',
              position: 'absolute',
              top: PADDING + 80,
              left: PADDING + 100,
              zIndex: 12,
            }}
          ></View> */}

          <View
            style={[
              {
                pointerEvents: 'none',
                position: 'absolute',
                top: 0,
                left: PADDING,
                zIndex: 20,
              },
            ]}
          >
            <Animated.View style={animatedStyle}>
              <RingElements width={WATCH_SIZE} height={WATCH_SIZE} />
            </Animated.View>
          </View>

          <View
            style={{
              pointerEvents: 'none',
              position: 'absolute',
              top: 0,
              left: PADDING,
              zIndex: 9,
            }}
          >
            <MainOuterCircle width={WATCH_SIZE} height={WATCH_SIZE} />
          </View>

          <View
            style={{
              pointerEvents: 'none',

              position: 'absolute',
              zIndex: 10,
              top: PADDING + 20,
              left: PADDING + 40,
            }}
          >
            <GreenRim width={WATCH_SIZE - 80} height={WATCH_SIZE - 80} />
          </View>

          <View
            style={{
              pointerEvents: 'none',

              position: 'absolute',
              top: PADDING + 25,
              left: PADDING + 45,
              zIndex: 12,
            }}
          >
            <SubtarctScope width={WATCH_SIZE - 90} height={WATCH_SIZE - 90} />
          </View>
        </View>
      </View>

      <View style={styles.buttonRow}>
        <Button
          title="Back"
          onPress={() => {
            rotateCircle('back');
          }}
        />
        <Button
          title="Next"
          onPress={() => {
            rotateCircle('next');
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    backgroundColor: appColors.baseBlueDarker,
    // alignItems: 'center',
  },
  subcontainer: {
    // padding: 100,
    alignItems: 'center',
  },
  title: {
    fontWeight: 700,
    fontSize: 40,
    color: '#c2ff0aff',
    letterSpacing: -2,
    paddingBottom: 20,
  },
  buttonRow: { flexDirection: 'row', marginTop: 40, gap: 20 },
});
