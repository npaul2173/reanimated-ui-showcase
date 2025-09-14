/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Navigation } from './src';

function App() {
  return (
    <SafeAreaProvider>
      <GestureHandlerRootView>
        <Navigation />
      </GestureHandlerRootView>
    </SafeAreaProvider>
  );
}

export default App;
