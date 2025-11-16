import React, { useMemo, useRef } from 'react';
import {
  Dimensions,
  NativeScrollEvent,
  NativeSyntheticEvent,
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';
import { appColors, CalculatorTheme } from '../../constants';
import { ThemeBox } from '../ThemeBox';

const ITEM_WIDTH = 50;
const ITEM_HEIGHT = 60;
const SCREEN_WIDTH = Dimensions.get('window').width;
const SIDE_PADDING = Math.max(0, (SCREEN_WIDTH - ITEM_WIDTH - 40) / 2);

type ThemeSliderProps = {
  themes: CalculatorTheme[];
  selectedThemeId: string;
  onSelect: (index: number) => void;
};

export const ThemeSlider: React.FC<ThemeSliderProps> = ({
  themes,
  selectedThemeId,
  onSelect,
}) => {
  const scrollRef = useRef<ScrollView>(null);

  const themeIndexLookup = useMemo(() => {
    const map = new Map<string, number>();
    themes.forEach((theme, index) => map.set(theme.id, index));
    return map;
  }, [themes]);

  // useEffect(() => {
  //   const index = themeIndexLookup.get(selectedThemeId);
  //   if (index === undefined) return;
  //   scrollRef.current?.scrollTo({
  //     x: index * ITEM_WIDTH,
  //     animated: true,
  //   });
  // }, [selectedThemeId, themeIndexLookup]);

  const handleMomentumEnd = (
    event: NativeSyntheticEvent<NativeScrollEvent>,
  ) => {
    const offsetX = event.nativeEvent.contentOffset.x;
    const index = Math.round(offsetX / ITEM_WIDTH);
    const safeIndex = Math.max(0, Math.min(themes.length - 1, index));
    const currentIndex = themeIndexLookup.get(selectedThemeId);
    // If selectedThemeId is not found, or the index hasn't changed, do nothing
    if (currentIndex === safeIndex || currentIndex === undefined) return;
    onSelect(safeIndex);
  };

  return (
    <View style={styles.sliderContainer}>
      <View pointerEvents="none" style={styles.selectionBox}>
        <View style={styles.selectionBoxInner} />
      </View>
      <ScrollView
        ref={scrollRef}
        horizontal
        showsHorizontalScrollIndicator={false}
        snapToInterval={ITEM_WIDTH}
        decelerationRate="fast"
        disableIntervalMomentum
        contentContainerStyle={styles.sliderContent}
        onMomentumScrollEnd={handleMomentumEnd}
      >
        {themes.map((theme, index) => (
          <View
            key={theme.id}
            style={[
              styles.themeItem,
              index === 0 ? styles.edgeLeft : null,
              index === themes.length - 1 ? styles.edgeRight : null,
            ]}
          >
            <ThemeBox theme={theme} width={ITEM_WIDTH} height={ITEM_HEIGHT} />
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  sliderContainer: {
    position: 'relative',
    borderRadius: 12,
    overflow: 'hidden',
    // paddingHorizontal: 30,
  },
  sliderContent: {
    paddingHorizontal: SIDE_PADDING,
    alignItems: 'center',
  },
  selectionBox: {
    width: '100%',
    height: ITEM_HEIGHT,
    // backgroundColor: '#473D8B57',
    position: 'absolute',
    zIndex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  selectionBoxInner: {
    width: ITEM_WIDTH,
    height: ITEM_HEIGHT,
    // backgroundColor: '#473D8B57',
    position: 'absolute',
    zIndex: 1,
    borderWidth: 5,
    borderColor: appColors.white,
    borderRadius: 12,
  },
  themeItem: {
    width: ITEM_WIDTH,
    alignItems: 'center',
    justifyContent: 'center',
  },
  edgeLeft: {
    borderTopLeftRadius: 12,
    borderBottomLeftRadius: 12,
    overflow: 'hidden',
  },
  edgeRight: {
    borderTopRightRadius: 12,
    borderBottomRightRadius: 12,
    overflow: 'hidden',
  },
});
