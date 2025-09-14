import { useCallback } from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import Animated, {
  interpolate,
  SharedValue,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated';
import { SafeAreaView } from 'react-native-safe-area-context';
import { listData, ScreensListProps } from './constants';

const { height } = Dimensions.get('window');

const ITEM_HEIGHT = 300; // height of each item + separator
const CENTER = height / 2; // middle of the screen

const ListItem: React.FC<{
  data: ScreensListProps;
  index: number;
  scrollY: SharedValue<number>;
}> = ({ index, scrollY, data }) => {
  const animatedStyle = useAnimatedStyle(() => {
    const itemCenterY = index * ITEM_HEIGHT + ITEM_HEIGHT / 2;
    const distanceFromCenter = itemCenterY - scrollY.value - CENTER;

    const scale = interpolate(
      distanceFromCenter,
      [-ITEM_HEIGHT * 2, 0, ITEM_HEIGHT * 2], // distance above, center, below
      [0.85, 1, 0.85], // smaller above/below, full size at center
    );

    return {
      transform: [{ scale }],
    };
  });

  return (
    <Animated.View
      style={[
        styles.card,
        { backgroundColor: data.bgColor, height: ITEM_HEIGHT - 16 },
        animatedStyle,
      ]}
    >
      <Text style={styles.cardTitle}>{data.title}</Text>
      <Text style={styles.cardDescription}>{data.description}</Text>
    </Animated.View>
  );
};

export const HomeScreen: React.FC = () => {
  const scrollY = useSharedValue(0);

  const scrollHandler = useAnimatedScrollHandler({
    onScroll: event => {
      scrollY.value = event.contentOffset.y;
    },
  });

  const renderItem = useCallback(
    ({ item, index }: { item: ScreensListProps; index: number }) => (
      <ListItem data={item} index={index} scrollY={scrollY} />
    ),
    [],
  );

  return (
    <SafeAreaView mode="margin" style={styles.container}>
      <View>
        <Animated.FlatList
          ItemSeparatorComponent={() => <View style={styles.separator} />}
          data={listData}
          keyExtractor={item => item.title.toString()}
          renderItem={renderItem}
          onScroll={scrollHandler}
          scrollEventThrottle={16}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </SafeAreaView>
  );
};

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EFEFEF',
    paddingHorizontal: 16,
  },
  separator: {
    height: 16,
  },
  card: {
    padding: 16,
    borderRadius: 10,
    justifyContent: 'center',
  },
  cardTitle: {
    fontSize: 50,
    fontWeight: '700',
    letterSpacing: -1,
    color: 'white',
  },
  cardDescription: {
    fontSize: 15,
    color: 'white',
  },
});
