import LottieView from 'lottie-react-native';
import { Image, StyleSheet, View } from 'react-native';
import Animated, {
  interpolate,
  SharedValue,
  useAnimatedStyle,
} from 'react-native-reanimated';
import {
  ANIMATION_SIZE,
  AVATAR_IMAGE_SIZE,
  UserDataProps,
} from '../../../constants';

export const Avatar: React.FC<{
  item: UserDataProps;
  sharedProgress: SharedValue<number>;
}> = ({ item, sharedProgress }) => {
  const avatarStyle = useAnimatedStyle(() => ({
    marginLeft: interpolate(sharedProgress.value, [0, 1], [0, -20]),
  }));

  const textStyle = useAnimatedStyle(() => ({
    opacity: interpolate(sharedProgress.value, [0, 1], [1, 0]),
  }));

  return (
    <Animated.View style={[styles.avatar, avatarStyle]}>
      {item.isSpeaking && (
        <View style={styles.avatarAudioIndicator}>
          <ActiveAudioIndicator />
        </View>
      )}
      <View style={styles.avatarImageWrapper}>
        <Image
          resizeMode="cover"
          style={styles.avatarImage}
          source={item.image}
        />
      </View>
      <Animated.Text style={textStyle}>{item.firstName}</Animated.Text>
    </Animated.View>
  );
};

export const ActiveAudioIndicator: React.FC = () => (
  <View style={styles.audioAnimation}>
    <LottieView
      source={require('../../../lottie/soundWave.json')}
      autoPlay
      loop
      style={{ width: ANIMATION_SIZE, height: ANIMATION_SIZE }}
    />
  </View>
);

const styles = StyleSheet.create({
  avatar: {
    alignItems: 'center',
  },
  avatarAudioIndicator: {
    position: 'absolute',
    top: 2,
    right: 0,
    zIndex: 20,
  },
  avatarImageWrapper: {
    height: AVATAR_IMAGE_SIZE,
    width: AVATAR_IMAGE_SIZE,
    borderRadius: AVATAR_IMAGE_SIZE,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#e8e8e8ff',
    backgroundColor: '#fff',
  },
  avatarImage: {
    height: AVATAR_IMAGE_SIZE - 10,
    width: AVATAR_IMAGE_SIZE - 10,
    borderRadius: AVATAR_IMAGE_SIZE,
  },
  audioAnimation: {
    width: ANIMATION_SIZE,
    height: ANIMATION_SIZE,
    borderRadius: ANIMATION_SIZE,
    borderWidth: 1,
    backgroundColor: '#fff',
    borderColor: '#d9d9d9ff',
    shadowOffset: { width: 5, height: 5 },
    shadowOpacity: 1,
    shadowRadius: 10,
    shadowColor: 'black',
    elevation: 2,
  },
});
