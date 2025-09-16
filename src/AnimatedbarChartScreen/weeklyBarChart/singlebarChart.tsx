import { format } from 'date-fns';
import { Text, View } from 'react-native';
import Animated, {
  useAnimatedStyle,
  withTiming,
} from 'react-native-reanimated';

export type Day = {
  day: Date;
  value: number; // 0 - 1
};

type SingleBarChartProps = {
  maxHeight: number;
  width: number;
  day: Day;
};

export const SingleBarChart = ({
  maxHeight,
  width,
  day,
}: SingleBarChartProps) => {
  const rStyle = useAnimatedStyle(() => {
    return {
      height: withTiming(maxHeight * day.value),
      opacity: withTiming(day.value),
    };
  }, [day.value, maxHeight]);

  return (
    <View>
      <Animated.View
        style={[
          {
            width: width,
            backgroundColor: '#00a292ff',
            borderRadius: 15,
            borderCurve: 'continuous',
          },
          rStyle,
        ]}
      />
      <Text
        style={{
          width: width,
          textAlign: 'center',
          fontSize: 20,
          marginTop: 5,
          fontWeight: 700,
          color: '#00a292ff',
          fontFamily: 'FiraCode-Regular',
          textTransform: 'uppercase',
        }}
      >
        {format(day.day, 'eeeee')}
      </Text>
    </View>
  );
};
