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
      // sound.setNumberOfLoops(-1); // loop indefinitely
      // sound.play(); // start playing

      sound.play(success => {
        if (success) {
          console.log('successfully finished playing');
        } else {
          console.log('playback failed due to audio decoding errors');
        }
        // Release the audio player resource once playback is complete
        sound.release();
      });
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
