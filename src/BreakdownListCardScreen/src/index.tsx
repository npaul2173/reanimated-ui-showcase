import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AnimatedBreakdownList } from './component';
import { breakdownListData } from './constants';

export const Screen = () => {
  return (
    <SafeAreaView mode="margin" style={styles.container}>
      <AnimatedBreakdownList data={breakdownListData} />
    </SafeAreaView>
  );
};

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    backgroundColor: '#eaeaeaff',
    alignItems: 'center',
  },
});
