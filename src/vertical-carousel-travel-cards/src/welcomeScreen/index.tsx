import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useEffect, useState } from 'react';
import { StatusBar, StyleSheet, View } from 'react-native';
import Animated, { FadeIn, FadeOut } from 'react-native-reanimated';
import { CheckBoxInteractionStackParamsList } from '../../app';
import { Footer } from './footer';
import { welcomeImages } from '../constants';
import { usePreloadSkiaImages } from './preloadSkiaImage';
import { WelcomeCanvas } from './canvas';

type Props = NativeStackScreenProps<
  CheckBoxInteractionStackParamsList,
  'welcomeScreen'
>;

export const WelcomeScreen: React.FC<Props> = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const { images, loading } = usePreloadSkiaImages(welcomeImages);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex(prev =>
        prev === welcomeImages.length - 1 ? 0 : prev + 1,
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="light-content"
        translucent
        backgroundColor="transparent"
      />
      <Footer />

      <View
        style={[
          StyleSheet.absoluteFillObject,
          { backgroundColor: '#4e3d2bff' },
        ]}
      >
        {!loading && (
          <Animated.View
            entering={FadeIn.duration(500)}
            exiting={FadeOut.duration(500)}
            key={`image-${activeIndex}`}
            style={{ width: '100%', height: '100%' }}
          >
            <WelcomeCanvas image={images[activeIndex]} />
          </Animated.View>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
