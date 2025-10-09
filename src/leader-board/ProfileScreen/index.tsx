// ProfileScreen.tsx
import React from 'react';
import { Dimensions, ScrollView, StatusBar, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { LeaderBoardStackParamsList } from '../app';
import { appColors } from '../constants';
import { Header } from './Header';
import { PopularLanguages } from './PopularLanguages';
import { StreakView } from './StreakView';
import { Cards } from './Cards';

type Props = NativeStackScreenProps<
  LeaderBoardStackParamsList,
  'ProfileScreen'
>;

const { height: screenHeight } = Dimensions.get('screen');

const ProfileScreen: React.FC<Props> = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={appColors.wheat} barStyle="dark-content" />
      <Header onBackPress={navigation.goBack} />
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <StreakView />
        <PopularLanguages />
        <Cards />
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: appColors.wheat,
  },
  scrollContent: {
    gap: 25,
    height: screenHeight,
    paddingTop: 30,
  },
});
