import { StyleSheet, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export const Screen = () => {
  return (
    <SafeAreaView mode="margin" style={styles.container}>
      <Text>Checkbox interactions list</Text>
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
});
