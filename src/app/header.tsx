import { Dimensions, StyleSheet, Text, View } from 'react-native';
import Animated, {
  Extrapolation,
  interpolate,
  SharedValue,
  useAnimatedStyle,
} from 'react-native-reanimated';

const { width: appWidth } = Dimensions.get('screen');
export const Header: React.FC<{ scrollY: SharedValue<number> }> = ({
  scrollY,
}) => {
  // Background fade
  const backgroundStyle = useAnimatedStyle(() => ({
    opacity: interpolate(scrollY.value, [0, 10], [0, 0.7], Extrapolation.CLAMP),
  }));

  // Subtitle shrink from left-middle
  const subtitleAnimatedStyle = useAnimatedStyle(() => {
    // Pivot point: left-middle of the bubble
    const PIVOT_X = 84; // left edge
    const PIVOT_Y = 25; // approx. half of subtitle height (adjust as needed)

    const scale = interpolate(
      scrollY.value,
      [0, 50],
      [1, 0.5],
      Extrapolation.CLAMP,
    );
    const translateX = interpolate(
      scrollY.value,
      [0, 50],
      [0, -PIVOT_X],
      Extrapolation.CLAMP,
    );

    const translateY = interpolate(
      scrollY.value,
      [0, 50],
      [-10, -PIVOT_Y],
      Extrapolation.CLAMP,
    );

    return {
      transform: [{ translateX }, { translateY }, { scale }],
    };
  });

  // Subtitle shrink from left-middle
  const titleAnimatedStyle = useAnimatedStyle(() => {
    // Pivot point: left-middle of the bubble
    const PIVOT_X = 35; // left edge

    const scale = interpolate(
      scrollY.value,
      [0, 50],
      [1, 0.8],
      Extrapolation.CLAMP,
    );
    const translateX = interpolate(
      scrollY.value,
      [0, 50],
      [0, -PIVOT_X],
      Extrapolation.CLAMP,
    );

    return {
      transform: [{ translateX }, { scale }],
    };
  });

  return (
    <Animated.View style={styles.container}>
      <View>
        <Animated.View style={[titleAnimatedStyle]}>
          <Text style={[styles.title]}>Reanimated</Text>
        </Animated.View>
        <Animated.View
          style={[styles.subtitleContainer, subtitleAnimatedStyle]}
        >
          <Text style={styles.subtitle}>UI showcase</Text>
        </Animated.View>
      </View>

      {/* Background overlay */}
      <Animated.View style={[styles.backgroundOverlay, backgroundStyle]} />
    </Animated.View>
  );
};

export const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 16,
    width: '100%',
    position: 'absolute',
    zIndex: 100,
  },
  title: {
    color: 'black',
    fontSize: 30,
    fontWeight: '500',
    letterSpacing: -1,
  },
  subtitleContainer: {
    backgroundColor: '#8755a0ff',
    padding: 10,
    borderRadius: 10,
    alignSelf: 'flex-start',
  },
  subtitle: {
    color: 'white',
    fontSize: 40,
    fontWeight: '700',
    letterSpacing: -3,
    lineHeight: 40,
  },
  backgroundOverlay: {
    backgroundColor: 'white',
    width: appWidth,
    height: 100,
    position: 'absolute',
    top: 0,
    zIndex: -100,
  },
});
