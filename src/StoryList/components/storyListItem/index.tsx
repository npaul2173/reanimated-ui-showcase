import React from 'react';
import { Dimensions, Image } from 'react-native';
import Animated, {
  Extrapolation,
  interpolate,
  SharedValue,
  useAnimatedStyle,
} from 'react-native-reanimated';

export const WindowWidth = Dimensions.get('window').width;

export const listItemWidth = WindowWidth * 0.8;
export const listItemHeight = (listItemWidth / 3) * 4;

export type StoryListItemProps = {
  item: any;
  index: any;
  scrollViewOffset: SharedValue<number>;
};
export const StoryListItem: React.FC<StoryListItemProps> = ({
  item,
  index,
  scrollViewOffset,
}) => {
  const rContainerStyle = useAnimatedStyle(() => {
    const activeIndex = scrollViewOffset.value / listItemWidth;

    const paddingLeft = (WindowWidth - listItemWidth) / 4;

    const translateX = interpolate(
      activeIndex,
      [index - 2, index - 1, index, index + 1], // input range [-1 ,0 , 1]
      [120, 60, 0, -listItemWidth - paddingLeft * 2], // output range
      Extrapolation.CLAMP,
    );

    const scale = interpolate(
      activeIndex,
      [index - 2, index - 1, index, index + 1],
      [0.8, 0.9, 1, 1], // output range
      Extrapolation.CLAMP,
    );

    return {
      left: paddingLeft,
      transform: [
        {
          translateX: scrollViewOffset.value + translateX,
        },
        { scale },
      ],
    };
  }, []);
  return (
    <Animated.View
      style={[
        {
          zIndex: -index,
        },
        rContainerStyle,
      ]}
    >
      <Image
        source={item.image}
        style={{
          width: listItemWidth,
          height: listItemHeight,
          position: 'absolute',
          borderRadius: 25,
        }}
      />
    </Animated.View>
  );
};
