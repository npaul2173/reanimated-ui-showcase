import { Button, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  createStaticNavigation,
  useNavigation,
} from '@react-navigation/native';
import { HomeScreen } from './Home';

// export const HomeScreen: React.FC = () => {
//   const { navigate } = useNavigation();
//   return (
//     <SafeAreaView mode="margin" style={styles.container}>
//       <View>
//         <Text>List</Text>
//         <Button
//           title="Nav"
//           onPress={() => {
//             navigate('profile');
//           }}
//         />
//       </View>
//     </SafeAreaView>
//   );
// };

export const ProfileScreen: React.FC = () => {
  return (
    <SafeAreaView mode="margin" style={styles.container}>
      <View>
        <Text>List</Text>
      </View>
    </SafeAreaView>
  );
};

const RootStack = createNativeStackNavigator({
  screenOptions: { headerShown: false },
  screens: {
    Home: HomeScreen,
    profile: ProfileScreen,
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
