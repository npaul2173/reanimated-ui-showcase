import React, { useState } from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { appColors } from '../../constants';
import { cryptoLogos } from '../../../../assets/images/crypto';
import PillMenuItem, { PillDropdownItem } from './pillMenuItem';
import Animated, {
  FadeIn,
  FadeOut,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from 'react-native-reanimated';

// TypeScript type for the menu items
type PillMenuItemProps = {
  id: string;
  image: any;
  name: string;
};

interface PillMenuProps {
  items: PillMenuItemProps[];
}

const { width: appWidth, height: appHeight } = Dimensions.get('screen');
export const CONTAINER_WIDTH = Math.min(appWidth * 0.9, 400);
const ITEM_GAP = 10;

const PADDING_HORIZONTAL = 20;
const ITEM_HEIGHT = 60;
const ITEM_WIDTH = (CONTAINER_WIDTH - PADDING_HORIZONTAL * 2) / 2;
const BASE_CONTAINER_HEIGHT = ITEM_HEIGHT;
const BASE_CONTAINER_WIDTH = ITEM_WIDTH + PADDING_HORIZONTAL * 2;

const PillMenu: React.FC<PillMenuProps> = ({ items }) => {
  // Animation state
  const animationState = useSharedValue<number>(0);
  const [isOpen, setIsOpen] = useState(false);

  const containerHeight =
    (ITEM_HEIGHT * (items.length + 1)) / 2 +
    (items.length / 2 - 1) * ITEM_GAP +
    PADDING_HORIZONTAL * 2 +
    100;

  const onToggle = () => {
    console.log('clicked');
    const isOpening = animationState.value === 0;
    setIsOpen(prev => !prev);
    animationState.value = isOpening
      ? withSpring(1, {
          damping: 10,
          stiffness: 120,
          mass: 0.8,
          overshootClamping: false,
        })
      : withTiming(0, {
          duration: 250,
        });
  };

  // const overlayAnimatedStyles = useAnimatedStyle(() => {
  //   return {
  //     height: interpolate(animationState.value, [0, 1], [0, appHeight]),
  //   };
  // });

  const pillAnimatedStyles = useAnimatedStyle(() => {
    return {
      height: interpolate(
        animationState.value,
        [0, 1],
        [BASE_CONTAINER_HEIGHT, containerHeight],
      ),
      width: interpolate(
        animationState.value,
        [0, 1],
        [BASE_CONTAINER_WIDTH, CONTAINER_WIDTH],
      ),
    };
  });

  const onPillDropdownItem = (_: string) => {
    onToggle();
  };

  // 🔹 Dropdown item fades out
  const dropdownAnimatedStyle = useAnimatedStyle(() => ({
    opacity: interpolate(animationState.value, [0, 0.5, 1], [1, 0.3, 0]),
    transform: [
      {
        scale: interpolate(animationState.value, [0, 1], [1, 0]),
      },
    ],
  }));

  // 🔹 Items grid fades in
  const gridAnimatedStyle = useAnimatedStyle(() => ({
    opacity: interpolate(animationState.value, [0, 0.3, 1], [0, 0.3, 1]),
    transform: [
      {
        scale: interpolate(animationState.value, [0, 1], [0.9, 1]),
      },
      {
        translateY: interpolate(animationState.value, [0, 1], [20, 0]),
      },
    ],
  }));

  return (
    <View style={[{ ...StyleSheet.absoluteFillObject }]}>
      {/* Overlay */}
      {isOpen && (
        <Animated.View
          entering={FadeIn.duration(300)}
          exiting={FadeOut.duration(300)}
          onTouchEnd={onToggle}
          style={[
            {
              ...StyleSheet.absoluteFillObject,
              backgroundColor: `${appColors.base}99`,
            },
          ]}
        />
      )}
      <View style={styles.container}>
        <Animated.View style={[styles.menuContainer, pillAnimatedStyles]}>
          <Animated.View
            style={[{ position: 'absolute' }, dropdownAnimatedStyle]}
          >
            <PillDropdownItem
              onPress={onPillDropdownItem}
              id={'dnlands879asd'}
              image={cryptoLogos.ethereumEth}
              name={'Arbitum'}
            />
          </Animated.View>

          <Animated.View
            style={[
              {
                flexDirection: 'row',
                gap: ITEM_GAP,
                flexWrap: 'wrap',
                width: CONTAINER_WIDTH,
              },
              gridAnimatedStyle,
            ]}
          >
            {items.map((item, index) => {
              return (
                <PillMenuItem
                  key={index}
                  id={item.id}
                  image={item.image}
                  name={item.name}
                />
              );
            })}
          </Animated.View>
        </Animated.View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    zIndex: 999,
    position: 'absolute',
    width: appWidth,
    alignItems: 'center',
  },
  menuContainer: {
    backgroundColor: appColors.base,
    padding: PADDING_HORIZONTAL,
    paddingVertical: PADDING_HORIZONTAL,
    borderRadius: 20,
    alignItems: 'center',
    overflow: 'hidden',
  },
});

export default PillMenu;
