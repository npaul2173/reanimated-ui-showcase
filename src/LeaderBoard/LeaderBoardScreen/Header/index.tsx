import {
  Animated,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { appColors, PADDING_HORIZONTAL_CONTAIN } from '../../constants';

export const Header: React.FC<{ onProfilePress: () => void }> = ({
  onProfilePress,
}) => {
  return (
    <View style={styles.appheader}>
      <TouchableOpacity
        onPress={onProfilePress}
        style={{
          position: 'absolute',
          right: PADDING_HORIZONTAL_CONTAIN,
        }}
      >
        <View
          style={{
            position: 'absolute',
            top: -5,
            left: -5,
            width: 50,
            height: 50,
            borderWidth: 2,
            borderColor: appColors.white,
            // backgroundColor: appColors.orange002,
            borderRadius: 99,
          }}
        />
        <Image
          style={{
            width: 40,
            height: 40,
            backgroundColor: appColors.orange002,
            borderRadius: 99,
          }}
          resizeMode="contain"
          source={require('../../images/user009.png')}
        />
        {/* <MaterialDesignIcons
          name="arrow-left-thin"
          size={40}
          color={appColors.white}
        /> */}
      </TouchableOpacity>

      <Text style={styles.title}>Leaderboard</Text>
    </View>
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
