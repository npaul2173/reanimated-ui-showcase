import { useMemo } from 'react';
import { View } from 'react-native';
import Animated, {
  SharedValue,
  useAnimatedStyle,
  withSpring,
} from 'react-native-reanimated';
import { BreakdownItem } from './breakdownItem';
import { BreakDownDataProps, breakdownListData } from '../constants';

const PADDING_HORIZONTAL_BREAKDOWN = 16;
const ITEM_GAP = 10;

export const Body: React.FC<{
  sharedExpanded: SharedValue<number>;
  uiViewWidth: number;
  data: BreakDownDataProps[];
}> = ({ sharedExpanded, uiViewWidth, data }) => {
  // Length
  const dataLength = useMemo(() => breakdownListData.length, []);

  const animatedStyles = useAnimatedStyle(() => ({
    height: withSpring(
      sharedExpanded.value
        ? dataLength * 50 + ITEM_GAP * (dataLength - 1) + 30
        : 0,
    ),
  }));

  return (
    <View>
      <Animated.View
        style={[
          animatedStyles,
          { borderRadius: 20, paddingHorizontal: 16, gap: 10 },
        ]}
      >
        {data.map((item, index) => {
          return (
            <BreakdownItem
              key={index}
              index={index}
              data={item}
              sharedExpanded={sharedExpanded}
              uiWidth={uiViewWidth - PADDING_HORIZONTAL_BREAKDOWN * 2}
            />
          );
        })}
      </Animated.View>
    </View>
  );
};
