import React, { useCallback, useMemo } from 'react';
import { StatusBar, StyleSheet, Text, View } from 'react-native';
import Animated, {
  interpolate,
  SharedValue,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated';
import { SafeAreaView } from 'react-native-safe-area-context';
import { listData, ScreensListProps } from './constants';
import { Header } from './header';

const ITEM_HEIGHT = 300; // height of each item + separator

const ListItem: React.FC<{
  data: ScreensListProps;
  index: number;
  scrollY: SharedValue<number>;
}> = ({ data }) => {
  return (
    <Animated.View
      style={[
        styles.card,
        { backgroundColor: data.bgColor, height: ITEM_HEIGHT - 16 },
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
      // runOnJS(console.log)('scrollY:', scrollY.value); // 👈 logs to JS console
    },
  });

  const renderItem = useCallback(
    ({ item, index }: { item: ScreensListProps; index: number }) => (
      <ListItem data={item} index={index} scrollY={scrollY} />
    ),
    [scrollY],
  );

  const seperatorComponent = useMemo(() => {
    const comp: React.FC = () => <View style={styles.separator} />;
    return comp;
  }, []);

  const footerComponent = useMemo(() => {
    const comp: React.FC = () => <View style={styles.footerContainer} />;
    return comp;
  }, []);

  const listAnimatedStyles = useAnimatedStyle(() => {
    return {
      paddingTop: interpolate(scrollY.value, [0, 200], [200, 0]),
    };
  });

  return (
    <SafeAreaView mode="margin" style={styles.container}>
      <Header scrollY={scrollY} />
      <StatusBar barStyle={'dark-content'} backgroundColor={'#FFFFFF'} />

      <Animated.FlatList
        ItemSeparatorComponent={seperatorComponent}
        ListFooterComponent={footerComponent}
        data={listData}
        keyExtractor={item => item.title.toString()}
        renderItem={renderItem}
        onScroll={scrollHandler}
        scrollEventThrottle={16}
        showsVerticalScrollIndicator={false}
        style={[styles.listContainer, listAnimatedStyles]}
      />
    </SafeAreaView>
  );
};

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EFEFEF',
    // paddingHorizontal: 16,
  },
  listContainer: {
    paddingHorizontal: 16,
  },
  separator: {
    height: 16,
  },
  footerContainer: {
    height: 100,
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
