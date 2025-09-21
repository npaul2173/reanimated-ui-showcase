import MaterialDesignIcons from '@react-native-vector-icons/material-design-icons';
import { Animated, StyleSheet, Text, View } from 'react-native';
import { appColors, PADDING_HORIZONTAL_CONTAIN } from '../../constants';

export const Header: React.FC<{ onBackPress: () => void }> = () => {
  return (
    <Animated.View
      onTouchEnd={() => {
        // navigation.goBack();
      }}
      // entering={FadeInRight.delay(300)}
      style={styles.appheader}
    >
      <View
        style={{
          //   backgroundColor: 'black',
          position: 'absolute',
          left: PADDING_HORIZONTAL_CONTAIN,
        }}
      >
        <MaterialDesignIcons
          name="arrow-left-thin"
          size={40}
          color={appColors.white}
        />
      </View>

      <Text style={styles.title}>Leaderboard</Text>
    </Animated.View>
  );
};

export const styles = StyleSheet.create({
  appheader: {
    width: '100%',
    // paddingHorizontal: PADDING_HORIZONTAL_CONTAIN,
    // paddingTop: 20,
    // paddingBottom: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    marginBottom: 30,
    // backgroundColor: 'red',
  },
  title: {
    fontSize: 18,
    fontWeight: 700,
    color: appColors.white,
  },
});
