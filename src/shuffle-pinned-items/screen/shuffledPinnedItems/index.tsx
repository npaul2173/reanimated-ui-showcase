import React, { useRef, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Animated, {
  Easing,
  FadeIn,
  LinearTransition,
} from 'react-native-reanimated';
import { fontFamily } from '../../../../assets/fonts';
import { appColors, COMMON_PADDING_HORIZONTAL } from '../../constants';
import { ShuffleView } from './shuffle';
import ShuffleItem from './shuffleItem';

const TOP_PADDING = 10;
const GAP_SHUFFLEVIEW_FROM_LISTVIEW = 30;
const SCROLLVIEW_INNER_TOP_PADDING = 50;
const OFFSET_SCROLL_EXTRA = 100; // To scroll offset the scrolled item at the center of the ScrollView. Maybe we can do something better rather this this.

export type ShuffleItemDataProps = {
  id: string;
  text: string;
};

export type ShufflePinnedListProps = {
  items: ShuffleItemDataProps[];
  height?: number;
  pinnedItems: Map<string, boolean>;
  onTogglePin: (id: string) => void;
};

const ShufflePinnedList: React.FC<ShufflePinnedListProps> = ({
  items,
  height = 400,
  pinnedItems,
  onTogglePin,
}) => {
  const scrollRef = useRef<any>(null);
  const [currentPinnedIndex, setCurrentPinnedIndex] = useState(0);

  const pinnedItemIds = Array.from(pinnedItems.keys());
  const currentPinnedId = pinnedItemIds[currentPinnedIndex];
  const currentPinnedText = items.find(
    item => item.id === currentPinnedId,
  )?.text;
  const isSomePinned = pinnedItemIds.length > 0;

  const scrollToPinnedItem = (direction: 'up' | 'down') => {
    if (!pinnedItemIds.length) return;

    console.log(
      'currentPinnedIndex === pinnedItems.size-1',
      currentPinnedIndex,
      pinnedItems.size - 1,
      currentPinnedIndex === pinnedItems.size - 1,
    );

    /**
     * This logic handles 3 situations
     *
     */
    let nextIndex =
      currentPinnedIndex === pinnedItems.size - 1
        ? 0
        : currentPinnedIndex === 0 && direction === 'up'
        ? pinnedItems.size - 1
        : currentPinnedIndex + (direction === 'down' ? 1 : -1);

    console.log('nextIndex.  ', { currentPinnedIndex, nextIndex });

    if (nextIndex < 0) nextIndex = 0;
    if (nextIndex >= pinnedItemIds.length) nextIndex = pinnedItemIds.length - 1;

    setCurrentPinnedIndex(nextIndex);

    const itemId = pinnedItemIds[nextIndex];
    const itemIndex = items.findIndex(item => item.id === itemId);
    if (itemIndex !== -1 && scrollRef.current) {
      scrollRef.current.scrollTo({
        y: itemIndex * 60 - OFFSET_SCROLL_EXTRA,
        animated: true,
      });
    }
  };

  return (
    <View style={[styles.card, { height }]}>
      <View style={styles.headerContainer}>
        <ShuffleView
          pinnedItems={pinnedItems}
          currentPinnedText={currentPinnedText}
          onScrollPinned={scrollToPinnedItem}
        />

        {!isSomePinned && (
          <Animated.View entering={FadeIn.duration(500)} style={styles.header}>
            <Text style={styles.title}>Today</Text>
            <Text style={styles.subtitle}>Tap to pin</Text>
          </Animated.View>
        )}
      </View>

      <Animated.View
        // eslint-disable-next-line react-native/no-inline-styles
        style={{ marginTop: isSomePinned ? GAP_SHUFFLEVIEW_FROM_LISTVIEW : 0 }}
        layout={LinearTransition.easing(Easing.ease).duration(300)}
      >
        <LinearGradient
          colors={['#ffffff', '#ffffffe2', 'rgba(255,255,255,0)']}
          style={styles.topFade}
          pointerEvents="none"
        />

        <Animated.ScrollView
          ref={scrollRef}
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
        >
          {items.map(item => (
            <ShuffleItem
              key={item.id}
              item={item}
              isPinned={!!pinnedItems.get(item.id)}
              onToggle={() => onTogglePin(item.id)}
              isFocused={currentPinnedId === item.id} // highlight if this item is current
            />
          ))}
        </Animated.ScrollView>
      </Animated.View>
    </View>
  );
};

export default ShufflePinnedList;

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 24,
    borderWidth: 1,
    borderColor: appColors.grey003,
    width: '100%',
    alignSelf: 'center',
    overflow: 'hidden',
    paddingTop: 10,
  },
  headerContainer: {
    paddingTop: TOP_PADDING,
    position: 'absolute',
    zIndex: 200,
    width: '100%',
  },
  header: {
    paddingHorizontal: COMMON_PADDING_HORIZONTAL,
  },
  title: {
    fontWeight: '700',
    fontSize: 14,
    color: appColors.grey002,
    fontFamily: fontFamily.manrope.semiBold,
  },
  subtitle: {
    fontWeight: '500',
    fontSize: 12,
    color: appColors.grey002,
    fontFamily: fontFamily.manrope.regular,
  },
  scrollContent: {
    paddingBottom: 100,
    paddingTop: SCROLLVIEW_INNER_TOP_PADDING,
  },
  topFade: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1,
    height: 70,
  },
});
