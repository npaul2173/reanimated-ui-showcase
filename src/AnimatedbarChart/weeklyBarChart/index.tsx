/* eslint-disable react-native/no-inline-styles */
import { Dimensions, ScrollView, StyleSheet, Text, View } from 'react-native';
import { SingleBarChart } from './singlebarChart';
import { format } from 'date-fns';

type DayProps = {
  day: Date;
  value: number;
};

type Week = DayProps[];

const { width: winDowWidth } = Dimensions.get('screen');
export const WeeklyBarChart: React.FC<{
  weeks: Week[];
  activeWeekIndex: number;
  onWeekChange: (index: number) => void;
}> = ({ weeks, activeWeekIndex, onWeekChange }) => {
  const activeWeek = weeks[activeWeekIndex];
  const BarChartGap = 10;
  const BarChartWidth = winDowWidth * 0.9;
  const BarWidth = (BarChartWidth - BarChartGap * 6) / activeWeek.length;
  const MaxBarHeight = 150;
  const ScrollViewHeight = 60;
  return (
    <View
      style={{ height: ScrollViewHeight + MaxBarHeight, width: winDowWidth }}
    >
      <View
        style={{
          height: MaxBarHeight,
          flexDirection: 'row',
          gap: BarChartGap,
          alignItems: 'flex-end',
          marginHorizontal: (winDowWidth - BarChartWidth) / 2,
        }}
      >
        {activeWeek.map((day, index) => (
          <SingleBarChart
            key={index}
            maxHeight={MaxBarHeight}
            width={BarWidth}
            day={day}
          />
        ))}
      </View>

      <ScrollView
        pagingEnabled
        horizontal
        showsHorizontalScrollIndicator={false}
        onScroll={({ nativeEvent }) => {
          const scrollOffset = nativeEvent.contentOffset.x;
          const activeIndex = Math.round(scrollOffset / winDowWidth);
          onWeekChange(activeIndex);
        }}
        style={{ height: ScrollViewHeight, width: winDowWidth }}
      >
        {weeks.map((week, weekIndex) => {
          return (
            <View
              key={weekIndex}
              style={{
                height: ScrollViewHeight,
                width: winDowWidth,
                justifyContent: 'center',
                alignItems: 'center',
                // backgroundColor: 'wheat',
              }}
            >
              <Text style={styles.label}>
                {format(week[0].day, 'd MMMM')} -{' '}
                {format(week[6].day, 'd MMMM')}
              </Text>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  label: {
    color: '#006155ff',
    fontSize: 20,
    fontWeight: 700,
    letterSpacing: -1,
  },
});
