import { ListRenderItem, StyleSheet } from 'react-native';
import Animated, {
  Extrapolate,
  interpolate,
  SharedValue,
  useAnimatedStyle,
} from 'react-native-reanimated';
import { AlienDataProps, appColors } from '../constants';
import { WATCH_SIZE } from '../screen';

export const ALIEN_SIZE = WATCH_SIZE * 0.45;

type AlienProps = {
  alien: AlienDataProps;
  index: number;
  progress: SharedValue<number>;
};

const Alien: React.FC<AlienProps> = ({ alien, index, progress }) => {
  const AlienSubject = alien.icon;

  const animatedStyle = useAnimatedStyle(() => {
    const distance = Math.abs(progress.value - index);
    const scale = interpolate(
      distance,
      [0, 0.5, 1],
      [1, 0, 0],
      Extrapolate.CLAMP,
    );
    const opacity = interpolate(
      distance,
      [0, 0.5, 1],
      [1, 0, 0],
      Extrapolate.CLAMP,
    );
    return { transform: [{ scale }], opacity };
  });

  return (
    <Animated.View style={[styles.item, animatedStyle]}>
      <AlienSubject
        width={ALIEN_SIZE}
        height={ALIEN_SIZE}
        color={appColors.greenDarker}
        style={{ transform: [{ scale: alien.ratio }] }}
      />
    </Animated.View>
  );
};

type AlienScrollViewProps = {
  data: AlienDataProps[];
  progress: SharedValue<number>;
  scrollRef: React.Ref<Animated.FlatList<AlienDataProps>>;
  onScroll: (event: any) => void;
};

export const AlienScrollView: React.FC<AlienScrollViewProps> = ({
  data,
  progress,
  scrollRef,
  onScroll,
}) => {
  const renderItem: ListRenderItem<AlienDataProps> = ({ item, index }) => (
    <Alien alien={item} index={index} progress={progress} />
  );

  return (
    <Animated.FlatList
      horizontal
      ref={scrollRef}
      scrollEnabled={false}
      data={data}
      renderItem={renderItem}
      keyExtractor={item => item.name}
      pagingEnabled
      decelerationRate="fast"
      snapToInterval={WATCH_SIZE}
      snapToAlignment="center"
      showsHorizontalScrollIndicator={false}
      scrollEventThrottle={16}
      onScroll={onScroll}
      style={styles.scrollView}
      contentContainerStyle={styles.contentContainer}
    />
  );
};

const styles = StyleSheet.create({
  scrollView: {
    width: WATCH_SIZE,
    height: WATCH_SIZE,
    position: 'absolute',
    zIndex: 50,
    top: 0,
    left: 0,
  },
  contentContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  item: {
    width: WATCH_SIZE,
    height: WATCH_SIZE,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
