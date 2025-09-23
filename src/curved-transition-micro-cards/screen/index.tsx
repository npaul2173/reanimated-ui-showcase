import {
  Dimensions,
  FlatList,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';
import Video from 'react-native-video';
import { travelInfoItems } from '../constants';
import { CARD_WIDTH, TravelExperienceCard } from './TravelExperienceCard';

const { width: appWidth, height: appHeight } = Dimensions.get('screen');

export const Screen = () => {
  return (
    <View style={[styles.container]}>
      <StatusBar translucent hidden />

      <View style={{ position: 'absolute', zIndex: 0 }}>
        <Video
          repeat
          source={require('../video/clouds001.mp4')}
          style={{ width: appWidth, height: appHeight, aspectRatio: 16 / 9 }}
          controls={false}
        />
      </View>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{ flexGrow: 0, paddingVertical: 30 }}
        pagingEnabled
        decelerationRate={'fast'}
        snapToInterval={CARD_WIDTH + 30}
        contentContainerStyle={{
          gap: 30,
          paddingHorizontal: (appWidth - CARD_WIDTH) / 2,
        }}
        data={travelInfoItems}
        renderItem={() => {
          return <TravelExperienceCard />;
        }}
      />
      {/* <TravelExperienceCard /> */}
      {/* </ImageBackground> */}
    </View>
  );
};

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    // paddingTop: 40,
    backgroundColor: '#eaeaeaff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  subcontainer: {
    flex: 1,
    width: '100%',
    // padding: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontWeight: 700,
    fontSize: 40,
    color: '#333333',
    letterSpacing: -2,
    paddingBottom: 20,
  },
});
