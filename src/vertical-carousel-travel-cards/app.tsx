import {
  NavigationContainer,
  NavigationIndependentTree,
} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { OnboardingScreenScreen } from './src/OnboardingScreen';
import { WelcomeScreen } from './src/welcomeScreen';

// Define the param list for strong typing
export type CheckBoxInteractionStackParamsList = {
  welcomeScreen: undefined;
  OnboardingScreenScreen: undefined; // example param
};

const Stack = createNativeStackNavigator<CheckBoxInteractionStackParamsList>();

function Router() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName="welcomeScreen"
      >
        <Stack.Screen name="welcomeScreen" component={WelcomeScreen} />
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
        {/* <StatusBar barStyle={'dark-content'} backgroundColor={'white'} /> */}
        {/* <CreateAccoutScreen /> */}
        <Router />
      </NavigationIndependentTree>
    </>
  );
};

export default AppContainer;
