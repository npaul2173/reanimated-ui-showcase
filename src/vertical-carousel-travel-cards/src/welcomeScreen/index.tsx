import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { BlurView } from '@sbaiahmed1/react-native-blur';
import {
  Canvas,
  Fill,
  ImageShader,
  LinearGradient,
  Skia,
  SkImage,
  vec,
} from '@shopify/react-native-skia';
import { ReactNode, useEffect, useState } from 'react';
import {
  Dimensions,
  Image,
  Linking,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Animated, { FadeIn, FadeOut } from 'react-native-reanimated';
import { fontFamily } from '../../../../assets/fonts';
import { CheckBoxInteractionStackParamsList } from '../../app';
import { welcomeImages, WelcomeImagesProps } from '../constants';
import { BlurMask } from '../BlurMask';
import { Footer } from './footer';

export function usePreloadSkiaImages(sources: WelcomeImagesProps[]) {
  const [images, setImages] = useState<(SkImage | null)[]>(() =>
    sources.map(() => null),
  );
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;
    setLoading(true);

    (async () => {
      const out: (SkImage | null)[] = [];
      for (const src of sources) {
        try {
          // Resolve local require() to actual URI, or use string directly
          let uri: string;
          if (typeof src.image === 'number') {
            const resolved = Image.resolveAssetSource(src.image);
            uri = resolved?.uri ?? '';
            if (!uri) throw new Error('could not resolve asset source');
            // Android bundle assets sometimes need special handling — fromURI usually works
          } else {
            uri = src.image;
            console.log(src);
          }
          console.log({ uri }, typeof src);

          // Prefer Skia.Data.fromURI (handles file:// and http(s) in many setups)
          // Fallback to fetch() -> Data.fromBytes if needed.
          let data;
          try {
            data = await Skia.Data.fromURI(uri);
          } catch (err) {
            // fallback: download bytes then create Skia.Data
            const res = await fetch(uri);
            const ab = await res.arrayBuffer();
            data = Skia.Data.fromBytes(new Uint8Array(ab));
          }

          const skImg = Skia.Image.MakeImageFromEncoded(data);
          out.push(skImg);
        } catch (e) {
          console.warn('Skia preload failed for', src, e);
          out.push(null);
        }
      }

      if (mounted) {
        setImages(out);
        setLoading(false);
      } else {
        // optional cleanup: dispose images if needed (see RN Skia docs/issues)
      }
    })();

    return () => {
      mounted = false;
      // optional: dispose images to free native memory (some Skia versions expose dispose)
    };
  }, [sources]); // IMPORTANT: sources should be a stable reference (useMemo or static const)

  return { images, loading };
}
// const withDelay = (delay: number) => FadeInDown.delay(delay).duration(400);
// const withDelayInputFields = (delay: number) =>
//   FadeInRight.delay(delay).duration(400);

const { width, height } = Dimensions.get('screen');
interface BlurGradientProps {
  children: ReactNode | ReactNode[];
}
const BlurGradient = ({ children }: BlurGradientProps) => {
  return <Fill>{children}</Fill>;
};
type Props = NativeStackScreenProps<
  CheckBoxInteractionStackParamsList,
  'welcomeScreen'
>;

export const WelcomeScreen: React.FC<Props> = ({}) => {
  const [activeIndex, setActiveIndex] = useState(0);

  console.log(
    'welcomeImageswelcomeImageswelcomeImageswelcomeImages',
    welcomeImages,
  );

  const { images, loading } = usePreloadSkiaImages(welcomeImages);
  console.log({ images, loading });

  useEffect(() => {
    const interval = setInterval(() => {
      // Looping the list after every interval
      setActiveIndex(prevIndex =>
        prevIndex === welcomeImages.length - 1 ? 0 : prevIndex + 1,
      );
    }, 3000); // 2000ms = 2s

    return () => clearInterval(interval);
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar
        barStyle={'light-content'}
        translucent
        backgroundColor={'transparent'}
      />

      <Footer />
      <View
        style={[StyleSheet.absoluteFillObject, { backgroundColor: 'black' }]}
      >
        <Animated.View
          entering={FadeIn.duration(500)}
          exiting={FadeOut.duration(500)}
          key={`image-${activeIndex}`}
          style={{ width: '100%', height: '100%' }}
        >
          <Canvas style={{ flex: 1 }}>
            <BlurMask
              mask={
                <LinearGradient
                  start={vec(0, height * 0.8)}
                  end={vec(0, height)}
                  colors={['transparent', 'black']}
                />
              }
            >
              <BlurGradient>
                <ImageShader
                  image={images[activeIndex]}
                  x={0}
                  y={0}
                  fit={'cover'}
                  width={width}
                  height={height}
                  tx="clamp"
                  ty="clamp"
                />
              </BlurGradient>
            </BlurMask>
          </Canvas>
        </Animated.View>
      </View>
    </View>
  );
};

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    // paddingTop: 40,
    backgroundColor: '#ffffffff',
  },
});
