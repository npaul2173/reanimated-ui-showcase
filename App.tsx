/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { HomeScreen } from './src';

function App() {
  return (
    <SafeAreaProvider>
      <GestureHandlerRootView>
        <HomeScreen />
      </GestureHandlerRootView>
    </SafeAreaProvider>
  );
}

export default App;
