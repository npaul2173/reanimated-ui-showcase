import { Dimensions, StatusBar, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { appColors, cryptoItems } from '../constants';
import TabSelector from './tabs';
import PillMenu from './pillMenu';

export const PADDING = 20;
const { width: appWidth } = Dimensions.get('screen');
export const WATCH_SIZE = appWidth * 0.9;

// Screen code
export const Screen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={'light-content'} />
      <TabSelector />
      <PillMenu items={cryptoItems} />
    </SafeAreaView>
  );
};

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    backgroundColor: appColors.white,
  },
});
