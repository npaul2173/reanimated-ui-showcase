import React, { ReactNode } from 'react';
import { Dimensions } from 'react-native';
import {
  Canvas,
  Fill,
  ImageShader,
  LinearGradient,
  vec,
} from '@shopify/react-native-skia';
import { BlurMask } from '../BlurMask';

const { width, height } = Dimensions.get('screen');

interface WelcomeCanvasProps {
  image: any; // SkImage | null
}

interface BlurGradientProps {
  children: ReactNode | ReactNode[];
}

export const BlurGradient = ({ children }: BlurGradientProps) => {
  return <Fill>{children}</Fill>;
};

export const WelcomeCanvas: React.FC<WelcomeCanvasProps> = ({ image }) => {
  if (!image) return null;

  return (
    <Canvas style={{ flex: 1 }}>
      <BlurMask
        mask={
          <LinearGradient
            start={vec(0, height * 0.3)}
            end={vec(0, height)}
            colors={['transparent', 'black']}
          />
        }
      >
        <BlurGradient>
          <ImageShader
            image={image}
            x={0}
            y={0}
            fit="cover"
            width={width}
            height={height}
            tx="clamp"
            ty="clamp"
          />
        </BlurGradient>
      </BlurMask>
    </Canvas>
  );
};
