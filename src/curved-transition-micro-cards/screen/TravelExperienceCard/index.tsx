import MaterialDesignIcons from '@react-native-vector-icons/material-design-icons';
import React, { useState } from 'react';
import {
  Dimensions,
  Image,
  Platform,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import Animated, {
  Easing,
  Extrapolation,
  interpolate,
  interpolateColor,
  SharedValue,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import { fontFamily } from '../../../../assets/fonts';
import {
  appColors,
  TravelImageItem,
  TravelInfoItemProps,
} from '../../constants';

const ARROW_CARD_HEIGHT = 60;
const { width: appWidth } = Dimensions.get('screen');
export const CARD_WIDTH = appWidth * 0.8;

export const TravelExperienceCard: React.FC<{ data: TravelInfoItemProps }> = ({
  data,
}) => {
  const progress = useSharedValue(0);
  const [secondTextSize, setSecondTextSize] = useState({ width: 0, height: 0 });

  const longPressGesture = Gesture.LongPress()
    .minDuration(150)
    .onStart(() => {
      progress.value = withTiming(1, {
        duration: 800,
        easing: Easing.out(Easing.exp),
      });
    })
    .onEnd(() => {
      progress.value = withTiming(0, {
        duration: 800,
        easing: Easing.out(Easing.exp),
      });
    });

  const containerAnimatedStyles = useAnimatedStyle(() => ({
    transform: [{ scale: interpolate(progress.value, [0, 1], [1, 0.97]) }],
  }));

  const animateIconBoxStyles = useAnimatedStyle(() => ({
    transform: [
      {
        translateX: interpolate(
          progress.value,
          [0, 1],
          [secondTextSize.width - ARROW_CARD_HEIGHT, secondTextSize.width],
          Extrapolation.CLAMP,
        ),
      },
    ],
  }));

  const animatedHikeLabel = useAnimatedStyle(() => {
    return {
      color: interpolateColor(
        progress.value,
        [0, 1], // input range
        [appColors.black, data.accentColor], // output colors
      ),
    };
  });

  return (
    <GestureDetector gesture={longPressGesture}>
      <Animated.View style={[styles.card, containerAnimatedStyles]}>
        {/* Title */}
        <View>
          <Text style={styles.title}>{data.title}</Text>

          <View style={styles.hikeRow}>
            <Animated.Text
              style={[styles.hikeLabel, animatedHikeLabel]}
              onLayout={event => {
                const { width, height } = event.nativeEvent.layout;
                setSecondTextSize({ width: width + 20, height });
              }}
            >
              {data.title2}
            </Animated.Text>

            <View style={styles.rightArrowContainer}>
              <Animated.View
                style={[
                  styles.iconBox,
                  animateIconBoxStyles,
                  { backgroundColor: data.accentColor },
                ]}
              >
                <MaterialDesignIcons
                  name="arrow-right"
                  size={60}
                  color={appColors.white}
                />
              </Animated.View>

              <Animated.View style={animateIconBoxStyles}>
                <MaterialDesignIcons name="arrow-right" size={60} />
              </Animated.View>
            </View>

            {/* White background placeholders */}
            <View style={styles.whiteBoxesRow}>
              <View
                style={[styles.whiteBoxLarge, { width: secondTextSize.width }]}
              />
              <View style={styles.whiteBoxSmall} />
            </View>
          </View>
        </View>

        {/* Micro cards */}
        <View style={styles.microCardRow}>
          {data.gallery.map((item, index) => (
            <MicroCard
              key={item.id}
              progress={progress}
              item={item}
              index={index}
            />
          ))}
        </View>

        {/* Info Row */}
        <View style={{ gap: 10 }}>
          <View style={styles.infoRow}>
            <InfoItem icon="map-check-outline" text="8 hours" />
            <InfoItem icon="clock-time-two-outline" text="8 kms" />
            <InfoItem icon="lightning-bolt-outline" text="Medium level" />
          </View>

          <Text style={styles.description}>{data.description}</Text>
        </View>
      </Animated.View>
    </GestureDetector>
  );
};

const MicroCard: React.FC<{
  progress: SharedValue<number>;
  index: number;
  item: TravelImageItem;
}> = ({ progress, index, item }) => {
  const animatedStyle = useAnimatedStyle(() => {
    const rotateDegree = interpolate(progress.value, [0, 1], [0, -index * 30]);

    return {
      transform: [
        {
          translateX: interpolate(
            progress.value,
            [0, 1],
            [-(index * 60), -(index * 10)],
          ),
        },
        {
          translateY: interpolate(
            progress.value,
            [0, 1],
            [-20, -(Math.pow(2, index) * 30) + 50],
          ),
        },
        { rotateZ: `${rotateDegree}deg` },
      ],
    };
  });

  return (
    <Animated.View style={[styles.microCard, animatedStyle]}>
      <Image
        style={styles.microCardImage}
        source={item.image}
        resizeMode="cover"
      />
    </Animated.View>
  );
};

const InfoItem: React.FC<{ icon: string; text: string }> = ({ icon, text }) => (
  <View style={styles.infoContainer}>
    {/* @ts-ignore */}
    <MaterialDesignIcons name={icon} size={15} />
    <Text style={styles.infoText}>{text}</Text>
  </View>
);

const styles = StyleSheet.create({
  card: {
    width: CARD_WIDTH,
    padding: 16,
    backgroundColor: appColors.white,
    borderRadius: 20,
    shadowColor: '#0D3B43',
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 20 },
    shadowRadius: 20,
    elevation: 10,
    gap: 40,
  },
  title: {
    fontSize: 50,
    letterSpacing: -2,
    fontFamily: fontFamily.poppins.medium,
  },
  hikeRow: {
    marginTop: Platform.OS === 'ios' ? -10 : -20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  hikeLabel: {
    position: 'absolute',
    zIndex: 200,
    fontSize: 50,
    // width: 120,
    fontFamily: fontFamily.poppins.medium,
  },
  rightArrowContainer: {
    flexDirection: 'row',
  },
  iconBox: {
    height: ARROW_CARD_HEIGHT,
    width: ARROW_CARD_HEIGHT,
  },
  whiteBoxesRow: {
    position: 'absolute',
    flexDirection: 'row',
    gap: ARROW_CARD_HEIGHT,
  },
  whiteBoxLarge: {
    backgroundColor: appColors.white,
    // backgroundColor: '#7373b381', // this is for debug purpose
    width: 100,
    height: 62,
  },
  whiteBoxSmall: {
    backgroundColor: appColors.white,
    // backgroundColor: '#7373b37b', // this is for debug purpose
    width: 60,
    height: 62,
  },
  microCardRow: {
    flexDirection: 'row',
    marginTop: 20,
  },
  microCard: {
    height: 130,
    width: 100,
    borderRadius: 20,
    shadowColor: '#0D3B43',
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 13 },
    shadowRadius: 20,
    elevation: 5,
  },
  microCardImage: {
    height: '100%',
    width: '100%',
    borderRadius: 20,
    borderWidth: 7,
    borderColor: appColors.white,
  },
  infoRow: {
    flexDirection: 'row',
    gap: 20,
  },
  infoContainer: {
    flexDirection: 'row',
    gap: 5,
  },
  infoText: {
    fontSize: 12,
    fontFamily: fontFamily.poppins.regular,
  },
  description: {
    fontFamily: fontFamily.poppins.light,
  },
});
