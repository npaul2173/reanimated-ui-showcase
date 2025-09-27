import { Marquee } from '@animatereactnative/marquee';
import React, { useState } from 'react';
import {
  Dimensions,
  Image,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Animated, {
  FadeIn,
  FadeInUp,
  FadeOut,
  useAnimatedReaction,
  useSharedValue,
  Easing,
  FadeInDown,
  useAnimatedStyle,
  SharedValue,
  interpolate,
} from 'react-native-reanimated';
import { scheduleOnRN } from 'react-native-worklets';
import { appColors, InviteDataProps, invitesData } from '../constants';
import { fontFamily } from '../../../assets/fonts';

const { width } = Dimensions.get('screen');

const _spacing = 16;
const _itemWidth = width * 0.62;
const _itemheight = _itemWidth * 1.62;
const _itemSize = _itemWidth + _spacing;

type ItemProps = {
  item: InviteDataProps;
  index: number;
  offset: SharedValue<number>;
};

function Item({ item, index, offset }: ItemProps) {
  const animatedStyles = useAnimatedStyle(() => {
    const itemPosition = index * _itemSize - width - _itemSize / 2;
    const totalSize = invitesData.length * _itemSize;
    const range =
      ((itemPosition - (offset.value + totalSize * 1000)) % totalSize) +
      width +
      _itemSize / 2;
    return {
      transform: [
        {
          translateY: interpolate(
            range,
            [-_itemSize, (width - _itemSize) / 2, width],
            [0, -20, 0],
          ),
        },
        {
          rotate: `${interpolate(
            range,
            [-_itemSize, (width - _itemSize) / 2, width],
            [-3, 0, 3],
          )}deg`,
        },
      ],
    };
  });

  return (
    <Animated.View
      style={[{ width: _itemWidth, height: _itemheight }, animatedStyles]}
    >
      <Image source={item.image} resizeMode="cover" style={styles.itemImage} />
    </Animated.View>
  );
}

export const Screen = () => {
  const offset = useSharedValue(0);
  const [activeIndex, setActiveIndex] = useState(1);

  useAnimatedReaction(
    () => {
      const entryPortion = 1.5;
      const floatValue =
        ((offset.value + width / entryPortion) / _itemSize) %
        invitesData.length;
      return Math.abs(Math.floor(floatValue));
    },
    value => {
      scheduleOnRN(setActiveIndex, value);
    },
  );

  return (
    <View style={styles.container}>
      <StatusBar translucent backgroundColor="transparent" />
      <View style={styles.backgroundOverlay}>
        <Animated.Image
          entering={FadeIn.duration(500)}
          exiting={FadeOut.duration(500)}
          source={invitesData[activeIndex].image}
          key={`image-${activeIndex}`}
          style={styles.backgroundImage}
          blurRadius={20}
        />
      </View>

      <Marquee spacing={_spacing} position={offset}>
        <Animated.View
          entering={FadeInUp.delay(500)
            .duration(500)
            .easing(Easing.elastic(0.9))
            .withInitialValues({
              transform: [{ translateY: -_itemheight / 2 }],
            })}
          style={styles.marqueeRow}
        >
          {invitesData.map((item, index) => (
            <Item
              offset={offset}
              index={index}
              item={item}
              key={`image-${item.id}`}
            />
          ))}
        </Animated.View>
      </Marquee>

      <View style={styles.textContainer}>
        <Animated.View entering={FadeInDown.duration(300).delay(1000)}>
          <Text style={styles.welcomeText}>Welcome to</Text>
        </Animated.View>

        <Animated.View entering={FadeInDown.duration(300).delay(1300)}>
          <Text style={styles.titleText}>Reanimated UI Showcase</Text>
        </Animated.View>

        <Animated.View
          entering={FadeInDown.duration(300).delay(1600)}
          style={styles.descriptionWrapper}
        >
          <Text style={styles.descriptionText}>
            This project demonstrates different UI/UX screens and animations
            built with React Native and Reanimated.
          </Text>
        </Animated.View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: appColors.black,
    alignItems: 'center',
    justifyContent: 'center',
  },
  backgroundOverlay: {
    ...StyleSheet.absoluteFillObject,
    opacity: 0.7,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  marqueeRow: {
    flexDirection: 'row',
    gap: _spacing,
  },
  itemImage: {
    flex: 1,
    borderRadius: 16,
    width: _itemWidth,
    height: _itemheight,
  },
  textContainer: {
    paddingTop: 50,
    width: '100%',
    alignItems: 'center',
  },
  welcomeText: {
    fontFamily: fontFamily.poppins.light,
    color: appColors.white,
  },
  titleText: {
    fontFamily: fontFamily.poppins.bold,
    color: appColors.white,
    fontSize: 20,
  },
  descriptionWrapper: {
    width: width * 0.8,
  },
  descriptionText: {
    fontFamily: fontFamily.poppins.regular,
    color: appColors.white001,
    fontSize: 14,
    textAlign: 'center',
  },
});
