import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AnimatedBreakdownList } from './component';
import { breakdownListData } from './constants';

export const Screen = () => {
  return (
    <SafeAreaView mode="margin" style={styles.container}>
      <View style={styles.subcontainer}>
        <Text style={styles.title}>Breakdown list</Text>
        <AnimatedBreakdownList data={breakdownListData} />
      </View>
    </SafeAreaView>
  );
};

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    backgroundColor: '#eaeaeaff',
    alignItems: 'center',
  },
  subcontainer: {
    padding: 16,
    alignItems: 'center',
  },
  title: {
    fontWeight: 700,
    fontSize: 40,
    color: '#333333',
    letterSpacing: -2,
    paddingBottom: 20,
  },
});
