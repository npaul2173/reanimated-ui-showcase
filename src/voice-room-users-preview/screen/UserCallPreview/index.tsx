import MaterialDesignIcons from '@react-native-vector-icons/material-design-icons';
import LottieView from 'lottie-react-native';
import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import Animated, {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import {
  AUDIO_ANIMATION_SIZE,
  AVATAR_IMAGE_SIZE,
  CARD_WIDTH,
  CHEVRON_ICON_SIZE,
  CONTAINER_HEIGHT,
  CONTAINER_PADDING,
  INNER_PADDING,
  UserDataProps,
} from '../../constants';
import { Avatar } from './Avatar';

export const UserCallPreview: React.FC<{ data: UserDataProps[] }> = ({
  data,
}) => {
  const sharedProgress = useSharedValue(0);

  const toggleAnimation = () => {
    sharedProgress.value = withTiming(sharedProgress.value === 1 ? 0 : 1, {
      duration: 300,
    });
  };

  const headerStyle = useAnimatedStyle(() => ({
    height: interpolate(sharedProgress.value, [0, 1], [40, 0]),
  }));

  const containerStyle = useAnimatedStyle(() => ({
    width: interpolate(
      sharedProgress.value,
      [0, 1],
      [CARD_WIDTH, CARD_WIDTH * 0.8],
    ),
    borderRadius: interpolate(sharedProgress.value, [0, 1], [20, 100]),
    height: interpolate(
      sharedProgress.value,
      [0, 1],
      [CONTAINER_HEIGHT, AVATAR_IMAGE_SIZE + CONTAINER_PADDING],
    ),
  }));

  const audioWaveStyle = useAnimatedStyle(() => ({
    opacity: interpolate(sharedProgress.value, [0, 0.5, 1], [0, 0.1, 1]),
  }));

  const avatarContainerStyle = useAnimatedStyle(() => ({
    paddingHorizontal: interpolate(
      sharedProgress.value,
      [0, 1],
      [INNER_PADDING, INNER_PADDING * 1.5],
    ),
    paddingVertical: interpolate(
      sharedProgress.value,
      [0, 1],
      [INNER_PADDING, INNER_PADDING / 2],
    ),
  }));

  return (
    <View>
      {/* Background Audio Wave */}
      <Animated.View style={[styles.audioWaveContainer, audioWaveStyle]}>
        <AudioWave />
      </Animated.View>

      {/* Toggle Chevron */}
      <Animated.View
        onTouchEnd={toggleAnimation}
        style={[styles.chevronButtonContainer, audioWaveStyle]}
      >
        <View style={styles.chevronButton}>
          <MaterialDesignIcons
            name="chevron-down"
            size={CHEVRON_ICON_SIZE * 0.7}
            color="#737373ff"
          />
        </View>
      </Animated.View>

      {/* Card */}
      <Animated.View style={[styles.card, containerStyle]}>
        {/* Header */}
        <Animated.View style={[styles.header, headerStyle]}>
          <Text style={styles.headerTitle}>Voice chat</Text>
          <Pressable onPress={toggleAnimation}>
            <View style={styles.closeButton}>
              <MaterialDesignIcons name="close" size={24} color="#737373ff" />
            </View>
          </Pressable>
        </Animated.View>

        {/* Avatars */}
        <Animated.View style={[styles.avatarContainer, avatarContainerStyle]}>
          {data.map(item => (
            <Avatar
              sharedProgress={sharedProgress}
              item={item}
              key={`${item.firstName}${item.lastName}`}
            />
          ))}
        </Animated.View>

        {/* Footer */}
        <View style={styles.footer}>
          <Pressable style={styles.joinButton}>
            <Text style={styles.joinButtonText}>Join now</Text>
          </Pressable>
        </View>

        <Text style={styles.micInfo}>Mic will be muted initially</Text>
      </Animated.View>
    </View>
  );
};

export const AudioWave: React.FC = () => (
  <View style={styles.audioWave}>
    <LottieView
      source={require('../../lottie/soundWaveLight.json')}
      autoPlay
      loop
      style={{ width: AUDIO_ANIMATION_SIZE, height: AUDIO_ANIMATION_SIZE }}
    />
  </View>
);

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#e5e5e5ff',
    overflow: 'hidden',
  },
  header: {
    paddingHorizontal: 10,
    height: 45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ecececff',
    overflow: 'hidden',
  },
  headerTitle: {
    flex: 1,
    textAlign: 'center',
  },
  audioWaveContainer: {
    position: 'absolute',
    zIndex: 200,
    top: -AUDIO_ANIMATION_SIZE * 0.4,
    left: -AUDIO_ANIMATION_SIZE * 0.4,
  },
  closeButton: {
    width: 36,
    height: 36,
    borderRadius: 36,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e2e2e2ff',
  },
  chevronButtonContainer: {
    position: 'absolute',
    zIndex: 200,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    right: INNER_PADDING * 0.5,
    top: AVATAR_IMAGE_SIZE - CHEVRON_ICON_SIZE,
  },
  chevronButton: {
    flexDirection: 'row',
    width: CHEVRON_ICON_SIZE,
    height: CHEVRON_ICON_SIZE,
    borderRadius: CHEVRON_ICON_SIZE,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e2e2e2ff',
  },
  avatarContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    rowGap: 5,
    columnGap: 10,
  },
  audioWave: {
    width: AUDIO_ANIMATION_SIZE,
    height: AUDIO_ANIMATION_SIZE,
    borderRadius: AUDIO_ANIMATION_SIZE,
    backgroundColor: '#000',
  },
  footer: {
    padding: INNER_PADDING,
  },
  joinButton: {
    height: 50,
    width: '100%',
    backgroundColor: '#111',
    flexDirection: 'row',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  joinButtonText: {
    color: '#fff',
  },
  micInfo: {
    padding: 10,
    textAlign: 'center',
  },
});
