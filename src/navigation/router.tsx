import { createStaticNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet } from 'react-native';
import { HomeScreen } from '../app';
import AnimatedbarChartScreen from '../AnimatedbarChartScreen';

/**
 * Define the RootStackParamList.
 *
 * This Root stack is an index for all the Showcase UI examples, nothing else
 */

export type RootStackParamList = {
  Home: undefined; // no params
  AnimatedbarChartScreen: undefined;
};

const RootStack = createNativeStackNavigator<RootStackParamList>({
  screenOptions: { headerShown: false },
  screens: {
    Home: HomeScreen,
    AnimatedbarChartScreen,
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
