import { useEffect, useRef } from 'react';
import Sound from 'react-native-sound';

export const useBGSoundLoop = () => {
  const soundRef = useRef<Sound | null>(null);

  useEffect(() => {
    // Load the mp3 file from assets/bundle
    const sound = new Sound('continous_beep.mp3', Sound.MAIN_BUNDLE, error => {
      if (error) {
        console.log('Failed to load the sound', error);
        return;
      }
      sound.setNumberOfLoops(-1); // loop indefinitely
      sound.play(); // start playing
    });

    soundRef.current = sound;

    return () => {
      // cleanup on unmount
      if (soundRef.current) {
        soundRef.current.stop();
        soundRef.current.release();
      }
    };
  }, []);
};
