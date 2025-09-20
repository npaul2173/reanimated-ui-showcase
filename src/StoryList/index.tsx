// AnimatedbarChart.tsx
import React from 'react';
import { StyleSheet, View } from 'react-native';
import Animated, {
  useAnimatedRef,
  useDerivedValue,
  useScrollOffset,
} from 'react-native-reanimated';
import { SafeAreaView } from 'react-native-safe-area-context';
import {
  listItemHeight,
  listItemWidth,
  StoryListItem,
  WindowWidth,
} from './components/storyListItem';
import { stories } from './constants';

function StoryList(): React.ReactElement {
  const animatedScrollRef = useAnimatedRef<Animated.ScrollView>();
  const scrollOffset = useScrollOffset(animatedScrollRef);

  useDerivedValue(() => {
    console.log(scrollOffset.value);
  });

  const ListPadding = WindowWidth - listItemWidth;

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.scrollViewContainer}>
        <Animated.ScrollView
          ref={animatedScrollRef}
          horizontal
          snapToInterval={listItemWidth}
          decelerationRate={'fast'}
          disableIntervalMomentum
          showsHorizontalScrollIndicator={false}
          scrollEventThrottle={16} // 1/60fps = 16ms
          contentContainerStyle={{
            width: listItemWidth * stories.length + ListPadding,
          }}
        >
          {stories.map((item, index) => {
            return (
              <StoryListItem
                scrollViewOffset={scrollOffset}
                key={item.key}
                index={index}
                item={item}
              />
            );
          })}
        </Animated.ScrollView>
      </View>
    </SafeAreaView>
  );
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111111',
    justifyContent: 'center',
    alignItems: 'center',
  },

  scrollViewContainer: {
    height: listItemHeight,
    width: '100%',
  },
});
export default StoryList;
