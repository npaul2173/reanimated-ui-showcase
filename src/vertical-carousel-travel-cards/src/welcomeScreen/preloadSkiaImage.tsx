import { useEffect, useState } from 'react';
import { Image } from 'react-native';
import { Skia, SkImage } from '@shopify/react-native-skia';
import { WelcomeImagesProps } from '../constants';

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
          let uri: string;
          if (typeof src.image === 'number') {
            const resolved = Image.resolveAssetSource(src.image);
            uri = resolved?.uri ?? '';
            if (!uri) throw new Error('Could not resolve asset source');
          } else {
            uri = src.image;
          }

          let data;
          try {
            data = await Skia.Data.fromURI(uri);
          } catch {
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
      }
    })();

    return () => {
      mounted = false;
    };
  }, [sources]);

  return { images, loading };
}
