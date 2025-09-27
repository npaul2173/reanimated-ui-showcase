// AnimatedbarChart.tsx
import { RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { RootStackParamList } from '../navigation/router';
import { data } from './constants';
import { WeeklyBarChart } from './weeklyBarChart';

type AnimatedbarChartNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'AnimatedbarChart'
>;

type AnimatedbarChartRouteProp = RouteProp<
  RootStackParamList,
  'AnimatedbarChart'
>;

type Props = {
  navigation: AnimatedbarChartNavigationProp;
  route: AnimatedbarChartRouteProp;
};

function AnimatedbarChartScreen({}: Props): React.ReactElement {
  const [activeWeekIndex, setActiveWeekIndex] = useState(0);

  return (
    <SafeAreaView style={styles.container}>
      <WeeklyBarChart
        weeks={data}
        activeWeekIndex={activeWeekIndex}
        onWeekChange={setActiveWeekIndex}
      />
    </SafeAreaView>
  );
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EFEFEF',
    justifyContent: 'center',
    alignItems: 'center',
    // paddingHorizontal: 16,
  },
});
export default AnimatedbarChartScreen;
