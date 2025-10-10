import React, { useState, useMemo } from 'react';
import { View, StyleSheet, Dimensions, Platform } from 'react-native';
import Animated, {
  FadeIn,
  FadeOut,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from 'react-native-reanimated';
import PillMenuItem, { PillDropdownItem } from './pillMenuItem';
import { appColors, cryptoItems } from '../../constants';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const { width: appWidth } = Dimensions.get('screen');

// 🔹 Layout Constants
const CONTAINER_WIDTH = Math.min(appWidth * 0.9, 400);
const ITEM_GAP = 10;
const PADDING_HORIZONTAL = 20;
const ITEM_HEIGHT = 60;
const ITEM_WIDTH = (CONTAINER_WIDTH - PADDING_HORIZONTAL * 2) / 2;
const BASE_CONTAINER_HEIGHT = ITEM_HEIGHT;
const BASE_CONTAINER_WIDTH = ITEM_WIDTH;

// 🔹 Types
export type PillMenuItemProps = {
  id: string;
  image: any;
  name: string;
};

interface PillMenuProps {
  items: PillMenuItemProps[];
  selectedCryptoId: string;
  setSelectedCryptoId: (id: string) => void;
}

const PillMenu: React.FC<PillMenuProps> = ({
  items,
  selectedCryptoId,
  setSelectedCryptoId,
}) => {
  const animationState = useSharedValue(0);
  const [isOpen, setIsOpen] = useState(false);

  const selectedCrypto = useMemo(
    () => cryptoItems.find(item => item.id === selectedCryptoId),
    [selectedCryptoId],
  );

  const containerHeight = useMemo(() => {
    return (
      (ITEM_HEIGHT * items.length) / 2 +
      (items.length / 2 - 1) * ITEM_GAP +
      PADDING_HORIZONTAL * 2
    );
  }, [items.length]);

  const toggleMenu = () => {
    const isOpening = animationState.value === 0;
    setIsOpen(isOpening);
    animationState.value = isOpening
      ? withSpring(1, { damping: 10, stiffness: 120, mass: 0.8 })
      : withTiming(0, { duration: 250 });
  };

  // 🔹 Animated styles
  const pillAnimatedStyle = useAnimatedStyle(() => ({
    height: interpolate(
      animationState.value,
      [0, 1],
      [BASE_CONTAINER_HEIGHT, containerHeight],
    ),
    borderRadius: interpolate(animationState.value, [0, 1], [60, 20]),
    width: interpolate(
      animationState.value,
      [0, 1],
      [BASE_CONTAINER_WIDTH, CONTAINER_WIDTH],
    ),
  }));

  const dropdownAnimatedStyle = useAnimatedStyle(() => ({
    alignItems: 'center',
    opacity: interpolate(animationState.value, [0, 0.5, 1], [1, 0.3, 0]),
    transform: [{ scale: interpolate(animationState.value, [0, 1], [1, 0]) }],
  }));

  const gridAnimatedStyle = useAnimatedStyle(() => ({
    opacity: interpolate(animationState.value, [0, 0.3, 1], [0, 0.3, 1]),
    transform: [
      { scale: interpolate(animationState.value, [0, 1], [0.9, 1]) },
      { translateY: interpolate(animationState.value, [0, 1], [20, 0]) },
    ],
  }));
  const { top } = useSafeAreaInsets();

  const getBaseContainer = () => {
    if (isOpen) return { ...StyleSheet.absoluteFillObject };
    else return { position: 'absolute', backgroundColor: 'aqua' };
  };

  const baseContainer = getBaseContainer();

  return (
    // @ts-ignore
    <View style={baseContainer}>
      {/* 🔹 Overlay */}
      {isOpen && (
        <Animated.View
          entering={FadeIn.duration(300)}
          exiting={FadeOut.duration(300)}
          onTouchEnd={toggleMenu}
          style={[StyleSheet.absoluteFill, styles.overlay]}
        />
      )}

      {/* 🔹 Main Container */}
      <View style={[styles.container, { top }]}>
        <Animated.View style={[styles.menuContainer, pillAnimatedStyle]}>
          {/* 🔹 Collapsed Pill */}
          {selectedCrypto && (
            <Animated.View
              style={[StyleSheet.absoluteFill, dropdownAnimatedStyle]}
            >
              <PillDropdownItem onPress={toggleMenu} {...selectedCrypto} />
            </Animated.View>
          )}

          {/* 🔹 Expanded Grid */}
          <Animated.View style={[styles.gridContainer, gridAnimatedStyle]}>
            {items.map(item => (
              <PillMenuItem
                key={item.id}
                id={item.id}
                image={item.image}
                name={item.name}
                onPress={id => {
                  setSelectedCryptoId(id);
                  toggleMenu();
                }}
              />
            ))}
          </Animated.View>
        </Animated.View>
      </View>
    </View>
  );
};

// 🔹 Styles
const styles = StyleSheet.create({
  container: {
    zIndex: 999,
    position: 'absolute',
    alignItems: 'center',
    width: appWidth,
    paddingTop: Platform.OS === 'ios' ? 0 : 20,
  },
  overlay: {
    backgroundColor: `${appColors.base}99`,
  },
  menuContainer: {
    backgroundColor: appColors.base,
    padding: PADDING_HORIZONTAL,
    borderRadius: 20,
    alignItems: 'center',
    overflow: 'hidden',
  },
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: ITEM_GAP,
    width: CONTAINER_WIDTH,
    justifyContent: 'center',
  },
});

export default PillMenu;
export { CONTAINER_WIDTH };
