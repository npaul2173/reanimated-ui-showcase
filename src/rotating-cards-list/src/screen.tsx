import { Dimensions, StatusBar, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { appColors } from '../constants';
import { fontFamily } from '../../../assets/fonts';
import SportifySvg from "../assets/svg/Spotify_icon.svg"
import { RotatoryList } from './RotatoryList';
import { singersData } from '../constants';
export const PADDING = 20;
const { width: appWidth } = Dimensions.get('screen');

// Screen code
export const Screen = () => {
  return (
    <SafeAreaView style={[styles.container]}>
      <StatusBar barStyle={'light-content'} backgroundColor={appColors.black} />
      <View style={{ alignItems: 'flex-start', paddingHorizontal: PADDING, paddingVertical: PADDING }}>
        <Text style={styles.text}>Connect Your</Text>
        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 5, marginTop: -15 }}>
          <SportifySvg style={{ width: 50, height: 50 }} />
          <Text style={styles.text}>Spotify</Text>
        </View>

      </View>

      <View style={{ marginTop: 16 }}>
        <RotatoryList data={singersData} />
      </View>
    </SafeAreaView>
  );
};

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: appColors.black,
  },

  text: {
    color: appColors.white,
    fontSize: 50,
    fontFamily: fontFamily.manrope.bold
    ,
    letterSpacing: -2,
  }
});
