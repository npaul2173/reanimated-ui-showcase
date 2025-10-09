import Ionicons from '@react-native-vector-icons/ionicons';
import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {
  appColors,
  PADDING_HORIZONTAL_CONTAIN,
  PlayerStat,
} from '../../constants';
import Animated, { FadeIn } from 'react-native-reanimated';

const { width: appWidth, height: appHeight } = Dimensions.get('screen');
export const BOTTOM_SHEET_HEIGHT = appHeight * 0.36;
export const BottomSheet: React.FC<{ playerStats: PlayerStat[] }> = ({
  playerStats,
}) => {
  return (
    <View style={styles.container}>
      <UserStats playerStats={playerStats} />
    </View>
  );
};

const UserStats: React.FC<{ playerStats: PlayerStat[] }> = ({
  playerStats,
}) => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      {/* Header */}
      <View style={styles.headerSpacer} />

      {/* Base */}
      {playerStats.map((item, index) => {
        const isPlayerDownTrend = item.state === 'down';
        return (
          <Animated.View
            entering={index < 6 ? FadeIn.delay(400 + 50 * index) : undefined}
            key={item.id}
          >
            <View style={styles.rowContainer}>
              {/* Left section */}
              <View style={styles.playerInfo}>
                <Text style={styles.positionText}>
                  {item.position >= 10 ? item.position : `0${item.position}`}
                </Text>
                <Image
                  source={item.profilePicture}
                  resizeMode="contain"
                  style={styles.profileImage}
                />
                <View>
                  <Text style={styles.playerName}>{item.name}</Text>
                  <Text style={styles.playerPoints}>{item.points} pts</Text>
                </View>
              </View>

              {/* Right section */}
              <Ionicons
                name={
                  isPlayerDownTrend ? 'caret-up-outline' : 'caret-down-outline'
                }
                size={20}
                color={isPlayerDownTrend ? '#0e8841ff' : '#a51324ff'}
              />
            </View>

            {/* Divider */}
            <View style={styles.divider} />
          </Animated.View>
        );
      })}

      {/* Footer */}
      <View style={styles.footerSpacer} />
    </ScrollView>
  );
};

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: BOTTOM_SHEET_HEIGHT,
    position: 'absolute',
    bottom: 0,
    borderTopEndRadius: 20,
    borderTopStartRadius: 20,
    backgroundColor: appColors.wheat,
  },
  headerSpacer: {
    height: 30,
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: PADDING_HORIZONTAL_CONTAIN,
  },
  playerInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  positionText: {
    fontWeight: '700',
    color: '#444444',
    fontSize: 18,
  },
  profileImage: {
    height: 40,
    width: 40,
  },
  playerName: {
    fontWeight: '700',
    color: appColors.orange,
    fontSize: 18,
  },
  playerPoints: {
    fontWeight: '700',
    color: '#444444',
    fontSize: 18,
  },
  divider: {
    width: appWidth,
    height: 2,
    backgroundColor: appColors.wheatDark,
  },
  footerSpacer: {
    height: 50,
  },
});
