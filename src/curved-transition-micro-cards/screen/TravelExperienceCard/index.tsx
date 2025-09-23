import MaterialDesignIcons from '@react-native-vector-icons/material-design-icons';
import React from 'react';
import { Dimensions, Image, StyleSheet, Text, View } from 'react-native';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import Animated, {
  Easing,
  interpolate,
  SharedValue,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import { fontFamily } from '../../../../assets/fonts';
import { appColors, TravelInfoItems, travelInfoItems } from '../../constants';

const { width: appWidth } = Dimensions.get('screen');
export const CARD_WIDTH = appWidth * 0.8;
export const TravelExperienceCard: React.FC = () => {
  const progress = useSharedValue(0);

  const longPressGesture = Gesture.LongPress()
    .minDuration(150) // hold duration in ms
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

  const containerAnimatedStyles = useAnimatedStyle(() => {
    return {
      transform: [{ scale: interpolate(progress.value, [0, 1], [1, 0.97]) }],
    };
  });

  const animateIconBoxStyles = useAnimatedStyle(() => ({
    // opacity: interpolate(progress.value, [0, 1], [1, 0]), // fade out
    transform: [
      {
        translateX: interpolate(progress.value, [0, 1], [-60, 0]), // slide left out
      },
    ],
  }));

  return (
    <GestureDetector gesture={longPressGesture}>
      <Animated.View style={[styles.card, containerAnimatedStyles]}>
        <View>
          <Text style={styles.title}>Mountain</Text>
          <View
            style={{
              marginTop: -20,
              flexDirection: 'row',
              gap: 10,
              alignItems: 'center',
            }}
          >
            <Text
              style={[
                styles.title,
                { color: 'red', position: 'absolute', zIndex: 200 },
              ]}
            >
              Hike
            </Text>
            <View
              style={{ transform: [{ translateX: 100 }], flexDirection: 'row' }}
            >
              <Animated.View
                style={[
                  {
                    height: 60,
                    width: 60,
                    backgroundColor: appColors.blue001,
                  },
                  animateIconBoxStyles,
                ]}
              >
                <MaterialDesignIcons
                  name="arrow-right"
                  size={60}
                  color={appColors.white}
                />
              </Animated.View>

              <Animated.View style={[animateIconBoxStyles]}>
                <MaterialDesignIcons name="arrow-right" size={60} />
              </Animated.View>
            </View>

            <View
              style={{
                position: 'absolute',
                flexDirection: 'row',
                gap: 60,
              }}
            >
              <View
                style={{
                  backgroundColor: appColors.white,
                  width: 100,
                  height: 62,
                }}
              />
              <View
                style={{
                  backgroundColor: appColors.white,
                  width: 60,
                  height: 62,
                }}
              />
            </View>
          </View>
        </View>

        <View style={styles.microCardRow}>
          {travelInfoItems.map((item, index) => (
            <MicroCard
              key={item.id}
              progress={progress}
              item={item}
              index={index}
            />
          ))}
        </View>

        <View>
          <View style={{ flexDirection: 'row', gap: 20 }}>
            <View style={styles.infoContainer}>
              <MaterialDesignIcons name="map-check-outline" size={15} />
              <Text style={styles.infoText}>8 hours</Text>
            </View>

            <View style={styles.infoContainer}>
              <MaterialDesignIcons name="clock-time-two-outline" size={15} />
              <Text style={styles.infoText}>8 kms</Text>
            </View>

            <View style={styles.infoContainer}>
              <MaterialDesignIcons name="lightning-bolt-outline" size={15} />
              <Text style={styles.infoText}>Medium level</Text>
            </View>
          </View>
          <Text style={{ fontFamily: fontFamily.poppins.light }}>
            Hiking on a mountain blends physical challenge with natural beauty,
            offering sweeping views.
          </Text>
        </View>
      </Animated.View>
    </GestureDetector>
  );
};

const MicroCard: React.FC<{
  progress: SharedValue<number>;
  index: number;
  item: TravelInfoItems;
}> = ({ progress, index, item }) => {
  const animatedStyle = useAnimatedStyle(() => {
    const rotateDegree = interpolate(
      progress.value,
      [0, 1],
      [0, -index * 30],
      //   Extrapolation.CLAMP,
    );

    return {
      transform: [
        {
          translateX: interpolate(
            progress.value,
            [0, 1],
            [-(index * 90), -(index * 20)],
          ),
        },
        {
          translateY: interpolate(progress.value, [0, 1], [0, -(index * 30)]),
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
  microCardRow: {
    flexDirection: 'row',
    marginTop: 20,
  },
  microCard: {
    height: 130,
    width: 100,
    borderRadius: 20,
    // overflow: 'hidden',
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
  infoContainer: {
    flexDirection: 'row',
    gap: 5,
  },
  infoText: {
    fontSize: 12,
    fontFamily: fontFamily.poppins.regular,
  },
});
