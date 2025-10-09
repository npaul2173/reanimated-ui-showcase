import { StatusBar } from 'react-native';
import { CreateAccoutScreen } from './src/CreateAccount';
import {
  NavigationContainer,
  NavigationIndependentTree,
} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { OnboardingScreenScreen } from './src/OnboardingScreen';

// Define the param list for strong typing
export type CheckBoxInteractionStackParamsList = {
  CreateAccoutScreen: undefined;
  OnboardingScreenScreen: undefined; // example param
};

const Stack = createNativeStackNavigator<CheckBoxInteractionStackParamsList>();

function Router() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName="CreateAccoutScreen"
      >
        <Stack.Screen
          name="CreateAccoutScreen"
          component={CreateAccoutScreen}
        />
        <Stack.Screen
          name="OnboardingScreenScreen"
          component={OnboardingScreenScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const AppContainer = () => {
  return (
    <>
      <NavigationIndependentTree>
        <StatusBar barStyle={'dark-content'} backgroundColor={'white'} />
        {/* <CreateAccoutScreen /> */}
        <Router />
      </NavigationIndependentTree>
    </>
  );
};

export default AppContainer;
