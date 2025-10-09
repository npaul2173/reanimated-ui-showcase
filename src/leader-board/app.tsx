// import { StatusBar } from 'react-native';
// import LeaderBoardScreen from './LeaderBoardScreen';
// import { appColors } from './constants';

// const AppContainer = () => {
//   return (
//     <>
//       <StatusBar
//         backgroundColor={appColors.orange}
//         barStyle={'light-content'}
//       />
//       <LeaderBoardScreen />
//     </>
//   );
// };

// export default AppContainer;

import {
  NavigationContainer,
  NavigationIndependentTree,
} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LeaderBoardScreen from './LeaderBoardScreen';
import ProfileScreen from './ProfileScreen';

// Define the param list for strong typing
export type LeaderBoardStackParamsList = {
  LeaderBoardScreen: undefined;
  ProfileScreen: undefined; // example param
};

const Stack = createNativeStackNavigator<LeaderBoardStackParamsList>();

function Router() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName="LeaderBoardScreen"
      >
        <Stack.Screen name="LeaderBoardScreen" component={LeaderBoardScreen} />
        <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const AppContainer = () => {
  return (
    <>
      <NavigationIndependentTree>
        <Router />
      </NavigationIndependentTree>
    </>
  );
};

export default AppContainer;
