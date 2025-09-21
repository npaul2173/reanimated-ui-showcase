// AnimatedbarChart.tsx
import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import {
  WeeklyTopLeaderData,
  allTimePlayerStats,
  allTimeTopLeaderData,
  weeklyPlayerStats,
  yearlyPlayerStats,
  yearlyTopLeaderData,
} from '../constants';
import { Header } from './Header';
import { LeaderGraph } from './LeaderGraph';
import { TabBar } from './TabBar';
import { BottomSheet } from './BottomSheet';

// Select Leader Graph data based on tab
const getLeaderData = (tabState: string) => {
  switch (tabState) {
    case 'Weekly':
      return WeeklyTopLeaderData;
    case 'yearly':
      return yearlyTopLeaderData;
    case 'All time':
      return allTimeTopLeaderData;
  }
};

// Select Player Stats data based on tab
const getPlayerStats = (tabState: string) => {
  switch (tabState) {
    case 'Weekly':
      return weeklyPlayerStats;
    case 'yearly':
      return yearlyPlayerStats;
    case 'All time':
      return allTimePlayerStats;
  }
};

function LeaderBoardScreen(): React.ReactElement {
  const [tabState, setTabState] = useState<'Weekly' | 'Yearly' | 'All Time'>(
    'Weekly',
  );

  const playerStats = getPlayerStats(tabState);
  const topLeaderStats = getLeaderData(tabState);

  console.log({ playerStats, topLeaderStats, tabState });

  return (
    <SafeAreaView style={styles.container}>
      <Header onBackPress={() => {}} />
      {/* @ts-ignore */}
      <TabBar onTabChange={setTabState} />
      <LeaderGraph data={topLeaderStats || []} />
      <BottomSheet playerStats={playerStats || []} />
    </SafeAreaView>
  );
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FF591B',
    // justifyContent: 'center',
    // alignItems: 'center',
  },
});
export default LeaderBoardScreen;
