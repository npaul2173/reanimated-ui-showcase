import React, { useCallback, useEffect, useRef, useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  LayoutRectangle,
} from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from 'react-native-reanimated';
import { styles } from './styles';

const TABS = ['Art', 'Music', 'Collectible objects', 'Double'];

export default function TabSelector() {
  const [activeTab, setActiveTab] = useState(0);
  const [layoutsMeasured, setLayoutsMeasured] = useState(false);

  const indicatorPosition = useSharedValue(0);
  const indicatorWidth = useSharedValue(0);

  const tabLayouts = useRef<Record<number, LayoutRectangle>>({});

  const onTabPress = useCallback(
    (index: number) => {
      const layout = tabLayouts.current[index];
      if (layout) {
        setActiveTab(index);
        indicatorPosition.value = withTiming(layout.x, { duration: 250 });
        indicatorWidth.value = withTiming(layout.width, { duration: 250 });
      }
    },
    [indicatorPosition, indicatorWidth],
  );

  // Trigger animation after all layouts are measured
  useEffect(() => {
    if (layoutsMeasured) {
      onTabPress(0);
    }
  }, [layoutsMeasured, onTabPress]);

  const animatedIndicatorStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: indicatorPosition.value }],
    width: indicatorWidth.value,
  }));

  return (
    <View style={styles.container}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollView}
      >
        <View style={styles.tabContainer}>
          <Animated.View
            style={[styles.animatedIndicator, animatedIndicatorStyle]}
          />
          {TABS.map((tab, index) => (
            <TouchableOpacity
              key={index}
              onLayout={e => {
                const layout = e.nativeEvent.layout;
                tabLayouts.current[index] = layout;

                // Check if all tabs are measured
                if (Object.keys(tabLayouts.current).length === TABS.length) {
                  setLayoutsMeasured(true);
                }
              }}
              onPress={() => onTabPress(index)}
              style={styles.tabButton}
            >
              <Text
                style={[
                  styles.tabText,
                  activeTab === index && styles.activeTabText,
                ]}
              >
                {tab}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}
