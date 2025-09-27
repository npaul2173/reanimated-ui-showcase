import { useMemo } from 'react';
import { Dimensions, ScrollViewProps, View } from 'react-native';
import Animated from 'react-native-reanimated';
import { AlienDataProps, appColors } from '../constants';
import { ALIEN_SIZE, PADDING, WATCH_SIZE } from '../screen';

const { width: appWidth } = Dimensions.get('screen');

type AlienScrollViewProps = Pick<ScrollViewProps, 'onScroll'> & {
  scrollRef: React.Ref<Animated.ScrollView>;
  data: AlienDataProps[];
};

export const AlienScrollView: React.FC<AlienScrollViewProps> = ({
  scrollRef,
  onScroll,
  data,
}) => {
  const randomColors = useMemo(
    () =>
      data.map(
        () =>
          `#${Math.floor(Math.random() * 0xffffff)
            .toString(16)
            .padStart(6, '0')}`,
      ),
    [data],
  );

  return (
    <Animated.ScrollView
      horizontal
      ref={scrollRef}
      pagingEnabled
      decelerationRate="fast"
      snapToInterval={WATCH_SIZE / 2}
      snapToAlignment="center"
      showsHorizontalScrollIndicator={false}
      onScroll={onScroll}
      style={{
        position: 'absolute',
        zIndex: 11,
        top: PADDING + 50, // adjust based on your circle offsets
        left: PADDING + 40,
      }}
      contentContainerStyle={{
        paddingHorizontal: (appWidth - ALIEN_SIZE) / 2, // center first & last alien
      }}
    >
      {data.map((alien, alienIndex) => {
        const AlienSubject = alien.icon;

        return (
          <View
            key={alien.name}
            style={{
              width: WATCH_SIZE / 2,
              height: WATCH_SIZE / 2,
              backgroundColor: randomColors[alienIndex],
              justifyContent: 'center',
              alignItems: 'center',
              // backgroundColor: "#77AA66",
            }}
          >
            <AlienSubject
              width={150}
              height={150}
              color={appColors.greenDarker}
            />
            {/* {alien.icon} */}
          </View>
        );
      })}
    </Animated.ScrollView>
  );
};
