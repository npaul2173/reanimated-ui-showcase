/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import LottieView from 'lottie-react-native';

import { SafeAreaView } from 'react-native-safe-area-context';
import { UserDataProps, usersData } from '../constants';
import Animated, { useSharedValue } from 'react-native-reanimated';
import MaterialDesignIcons from '@react-native-vector-icons/material-design-icons';

// const { width: appWidth } = Dimensions.get('screen');

const PADDING = 16;
export const Screen = () => {
  const animationState = useSharedValue(0);

  const onCrossClick = () => {};
  return (
    <SafeAreaView style={styles.container}>
      <Text>asdasd</Text>

      {/* <Image
        resizeMode="cover"
        style={{ height: 100, width: 100, borderRadius: 100 }}
        source={require('../images/male001.jpg')}
      /> */}

      <View
        style={{
          backgroundColor: '#FFFFFF',
          borderRadius: 20,
          borderWidth: 1,
          borderColor: '#e5e5e5ff',
          width: '100%',
        }}
      >
        <View
          style={{
            padding: 10,
            height: 45,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            borderTopRightRadius: 20,
            borderTopLeftRadius: 20,
            backgroundColor: '#ecececff',
            // width: '100%',
            // flex: 1,
          }}
        >
          <Text>Voice chat</Text>
          <Pressable>
            <View
              style={{
                width: 40,
                height: 40,
                borderRadius: 40,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#cececeff',
                // position: 'absolute',
                // right: PADDING,
                // left: PADDING,
                // backgroundColor: 'wheat',
              }}
            >
              <MaterialDesignIcons name="close" size={30} color={'#737373ff'} />
            </View>
          </Pressable>
        </View>

        {/* BODY */}
        <View
          style={{
            // backgroundColor: 'wheat',
            flexWrap: 'wrap',
            flexDirection: 'row',
            rowGap: 5,
            columnGap: 10,
            padding: PADDING,
          }}
        >
          {usersData.map(item => {
            return <Avatar item={item} key={item.firstName} />;
          })}
        </View>

        <AudioAnimation />
        <AudioWave />
        {/* FOOTER */}
        <View style={{ padding: PADDING }}>
          <Pressable
            style={{
              height: 50,
              width: '100%',
              backgroundColor: '#111111',
              flexDirection: 'row',
              borderRadius: 10,
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Text
              style={{
                color: 'white',
              }}
            >
              Join now
            </Text>
          </Pressable>
        </View>
        <Text style={{ padding: 10, textAlign: 'center' }}>
          Mic will be muted initially
        </Text>
      </View>
    </SafeAreaView>
  );
};

export const AVATAR_IMAGE_SIZE = 70;
export const Avatar: React.FC<{ item: UserDataProps }> = ({ item }) => {
  return (
    <Animated.View style={{ alignItems: 'center' }}>
      <View
        style={{
          height: AVATAR_IMAGE_SIZE,
          width: AVATAR_IMAGE_SIZE,
          borderRadius: AVATAR_IMAGE_SIZE,
          borderWidth: 1,
          justifyContent: 'center',
          alignItems: 'center',
          borderColor: '#e8e8e8ff',
        }}
      >
        <Image
          resizeMode="cover"
          style={{
            height: AVATAR_IMAGE_SIZE - 10,
            width: AVATAR_IMAGE_SIZE - 10,
            borderRadius: AVATAR_IMAGE_SIZE,
          }}
          source={item.image}
        />
      </View>

      <Text>{item.firstName}</Text>
    </Animated.View>
  );
};

const ANIMATION_SIZE = 50;
const AudioAnimation: React.FC = () => {
  return (
    <View
      style={{
        width: ANIMATION_SIZE,
        height: ANIMATION_SIZE,
        borderRadius: ANIMATION_SIZE,
        borderWidth: 1,
        backgroundColor: '#FFFFFF',
        borderColor: '#d9d9d9ff',
        shadowOffset: { width: 5, height: 5 },
        shadowOpacity: 1,
        shadowRadius: 10,
        shadowColor: 'black',
        elevation: 2,
      }}
    >
      <LottieView
        source={require('../lottie/soundWave.json')}
        autoPlay
        loop
        style={{ width: ANIMATION_SIZE, height: ANIMATION_SIZE }}
      />
    </View>
  );
};

const AUDIO_ANIMATION = 60;
export const AudioWave: React.FC = () => {
  return (
    <View
      style={{
        width: AUDIO_ANIMATION,
        height: AUDIO_ANIMATION,
        borderRadius: AUDIO_ANIMATION,
        backgroundColor: '#000000ff',
        shadowOffset: { width: 5, height: 5 },
        shadowOpacity: 1,
        shadowRadius: 10,
        shadowColor: 'black',
        elevation: 2,
      }}
    >
      <LottieView
        source={require('../lottie/soundWaveLight.json')}
        autoPlay
        loop
        style={{ width: AUDIO_ANIMATION, height: AUDIO_ANIMATION }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    flex: 1,
    backgroundColor: '#ffffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
