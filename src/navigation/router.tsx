import { createStaticNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet } from 'react-native';
import { HomeScreen } from '../app';
import AnimatedbarChart from '../AnimatedbarChart';
import BreakdownListCard from '../BreakdownListCard/app';
import CheckboxInteraction from '../CheckboxInteraction/app';
import StoryList from '../StoryList/app';
import leaderBoard from '../LeaderBoard/app';
import curvedTransitionMicroCards from '../curved-transition-micro-cards/app';
import voiceRoomUsersPreview from '../voice-room-users-preview/app';

import appleInvites from '../apple-invites/app';
/**
 * Define the RootStackParamList.
 *
 * This Root stack is an index for all the Showcase UI examples, nothing else
 */

export type RootStackParamList = {
  Home: undefined; // no params
  AnimatedbarChart: undefined;
  BreakdownListCard: undefined;
  CheckboxInteraction: undefined;
  StoryList: undefined;
  leaderBoard: undefined;
  curvedTransitionMicroCards: undefined;
  voiceRoomUsersPreview: undefined;
  appleInvites: undefined;
};

const RootStack = createNativeStackNavigator<RootStackParamList>({
  screenOptions: { headerShown: false },
  screens: {
    Home: HomeScreen,
    AnimatedbarChart,
    BreakdownListCard,
    CheckboxInteraction,
    StoryList,
    leaderBoard,
    curvedTransitionMicroCards,
    voiceRoomUsersPreview,
    appleInvites,
  },
});

export const Navigation = createStaticNavigation(RootStack);

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 16,
  },
});
