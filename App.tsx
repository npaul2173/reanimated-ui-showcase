/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Navigation } from './src';
import { StatusBar } from 'react-native';

function App() {
  return (
    <SafeAreaProvider>
      <GestureHandlerRootView>
        <StatusBar backgroundColor={'#EFEFEF'} />
        <Navigation />
      </GestureHandlerRootView>
    </SafeAreaProvider>
  );
}

export default App;
