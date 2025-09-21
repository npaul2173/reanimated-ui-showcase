import {
  Dimensions,
  Image,
  ImageStyle,
  StyleProp,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {
  appColors,
  PADDING_HORIZONTAL_CONTAIN,
  TopLeaderDataProps,
  TOTAL_POINTS,
} from '../../constants';
import Animated, {
  Easing,
  SharedValue,
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withTiming,
} from 'react-native-reanimated';
import { useEffect, useRef } from 'react';

const { width: appWidth } = Dimensions.get('screen');
export const SPACING = 16;
export const BAR_WIDTH =
  (appWidth - PADDING_HORIZONTAL_CONTAIN * 2 - SPACING * 2) / 3;

export const LEADER_BAR_HEIGHT = 250;

// Leader graph
export const LeaderGraph: React.FC<{ data: TopLeaderDataProps[] }> = ({
  data,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.leaderBarContainer}>
        {data.map(item => {
          return <Leaderbar item={item} key={item.id} />;
        })}
      </View>
    </View>
  );
};

const Leaderbar: React.FC<{ item: TopLeaderDataProps }> = ({ item }) => {
  const height = useSharedValue(0);
  const isFirstMount = useRef(true);

  useEffect(() => {
    // Animate on mount
    // height.value = withDelay(
    //   100,
    //   withTiming((item.points / TOTAL_POINTS) * LEADER_BAR_HEIGHT, {
    //     duration: 1000,
    //     easing: Easing.out(Easing.exp),
    //   }),
    // );

    const targetHeight = (item.points / TOTAL_POINTS) * LEADER_BAR_HEIGHT;

    if (isFirstMount.current) {
      // Only add delay on the first mount
      height.value = withDelay(
        500,
        withTiming(targetHeight, {
          duration: 1000,
          easing: Easing.out(Easing.exp),
        }),
      );
      isFirstMount.current = false; // mark as done
    } else {
      // Subsequent updates (no delay)
      height.value = withTiming(targetHeight, {
        duration: 1000,
        easing: Easing.out(Easing.exp),
      });
    }
  }, [height, item.points]);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      height: height.value,
      transform: [{ translateY: -height.value }],
    };
  });

  return (
    <View style={{ alignItems: 'center' }}>
      <UserView item={item} sharedValue={height} />
      <PointView points={item.points} sharedValue={height} />
      <Animated.View style={[styles.leaderBar, animatedStyle]}>
        <Text style={styles.leaderBarPointInnerTitle}>{item.position}</Text>
      </Animated.View>
    </View>
  );
};

const POINT_BAR_POINTS_GAP = 10;
const PointView: React.FC<{
  points: number;
  sharedValue: SharedValue<number>;
}> = ({ points, sharedValue }) => {
  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: -sharedValue.value - POINT_BAR_POINTS_GAP }],
    };
  });

  return (
    <Animated.View style={[styles.leaderbarPointContainer, animatedStyle]}>
      <Text style={styles.pointsText}>{points}</Text>
    </Animated.View>
  );
};

const USER_VIEW_GAP = 20;
const UserView: React.FC<{
  item: TopLeaderDataProps;
  sharedValue: SharedValue<number>;
}> = ({ item, sharedValue }) => {
  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: -sharedValue.value - USER_VIEW_GAP }],
    };
  });

  const profileImageStyles: StyleProp<ImageStyle> = { height: 50, width: 50 };
  return (
    <Animated.View style={[styles.userViewContainer, animatedStyle]}>
      <Image
        resizeMode="contain"
        style={profileImageStyles}
        source={item.profilePicture}
      />
      <Text
        // adjustsFontSizeToFit
        ellipsizeMode="tail"
        numberOfLines={1}
        style={styles.profileText}
      >
        {item.name}
      </Text>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: LEADER_BAR_HEIGHT + 150,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  leaderBarContainer: {
    flexDirection: 'row',
    gap: SPACING,
    top: 200,
  },
  leaderBar: {
    borderRadius: 10,
    width: BAR_WIDTH,
    height: 200,
    backgroundColor: appColors.orange002,
    justifyContent: 'center',
    alignItems: 'center',
  },
  leaderBarPointInnerTitle: {
    fontSize: 30,
    letterSpacing: -2,
    fontWeight: 700,
    color: appColors.white,
  },
  pointsText: { fontWeight: 700, fontSize: 20, letterSpacing: -1 },
  leaderbarPointContainer: {
    backgroundColor: appColors.white,
    alignSelf: 'center', // 👈 makes it wrap to content
    flexDirection: 'row',
    paddingHorizontal: 10,
    paddingVertical: 3,
    borderRadius: 20,
  },
  userViewContainer: {
    // backgroundColor: 'green',
    alignSelf: 'center',
    alignItems: 'center',
    // paddingHorizontal: 10,
    // paddingVertical: 3,
    borderRadius: 20,
  },
  profileText: {
    fontSize: 15,
    fontWeight: 300,
    width: BAR_WIDTH,
    textAlign: 'center',
    // backgroundColor: 'wheat',
    color: appColors.white,
  },
});
