import { useState } from 'react';
import { Dimensions, Pressable, StyleSheet, Text, View } from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import { appColors, PADDING_HORIZONTAL_CONTAIN } from '../../constants';

export const TABS = ['Weekly', 'yearly', 'All time'];
const ACTIVE_BAR_PADDING = 5;
const { width } = Dimensions.get('window');
const TAB_WIDTH = (width - PADDING_HORIZONTAL_CONTAIN * 2) / TABS.length;
const TAB_HEIGHT = 60;
const ACTIVE_TAB_WIDTH = TAB_WIDTH - ACTIVE_BAR_PADDING * 2;
const ACIVE_TAB_HEIGHT = TAB_HEIGHT - ACTIVE_BAR_PADDING * 2;

// Tab bar needed
export const TabBar: React.FC<{ onTabChange: (tab: string) => void }> = ({
  onTabChange,
}) => {
  const [activeTab, setActiveTab] = useState(0);
  const translateX = useSharedValue(0);

  console.log(' activeTab.  ', activeTab);

  const onPress = (index: number) => {
    setActiveTab(index);
    translateX.value = withTiming(index * TAB_WIDTH, { duration: 300 });
    onTabChange(TABS[index]);
  };

  const indicatorStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: translateX.value + ACTIVE_BAR_PADDING,
        },
      ],
    };
  });

  return (
    <View>
      <View style={styles.tabBar}>
        {TABS.map((tab, index) => (
          <Pressable
            key={tab}
            style={styles.tabButton}
            onPress={() => onPress(index)}
          >
            <Text style={[styles.tabLabel]}>{tab}</Text>
          </Pressable>
        ))}
        <Animated.View style={[styles.indicator, indicatorStyle]}>
          <Text style={styles.activetabTitle}>{TABS[activeTab]}</Text>
        </Animated.View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  tabBar: {
    marginHorizontal: PADDING_HORIZONTAL_CONTAIN,
    borderRadius: 20,
    flexDirection: 'row',
    backgroundColor: appColors.orange002,
  },
  tabButton: {
    width: TAB_WIDTH,
    alignItems: 'center',
    justifyContent: 'center',
    height: TAB_HEIGHT,
  },
  tabLabel: {
    fontSize: 16,
    color: appColors.white,
    fontWeight: 300,
  },
  indicator: {
    position: 'absolute',
    top: ACTIVE_BAR_PADDING,
    width: ACTIVE_TAB_WIDTH,
    height: ACIVE_TAB_HEIGHT,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: appColors.wheat,
    borderRadius: 15,
  },
  activetabTitle: {
    fontWeight: 700,
    fontSize: 16,
    color: appColors.orange,
  },
});
