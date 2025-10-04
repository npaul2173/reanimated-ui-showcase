import Animated, {
  SharedValue,
  useAnimatedStyle,
} from 'react-native-reanimated';
import RingElementsSvg from '../../svgs/watchElements/ringElements.svg';
import { WATCH_SIZE } from '../screen';
import { StyleSheet } from 'react-native';

export const RingElements: React.FC<{ rotation: SharedValue<number> }> = ({
  rotation,
}) => {
  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ rotate: `${rotation.value}deg` }],
    };
  });
  return (
    <Animated.View style={[styles.container, animatedStyle]}>
      <RingElementsSvg width={WATCH_SIZE} height={WATCH_SIZE} />
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    pointerEvents: 'none',
    position: 'absolute',
    zIndex: 100,
    top: 0,
    left: 0,
    width: WATCH_SIZE,
    height: WATCH_SIZE,
  },
});
