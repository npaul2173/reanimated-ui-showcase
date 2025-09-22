import AntDesign from '@react-native-vector-icons/ant-design';
import MaterialDesignIcons from '@react-native-vector-icons/material-design-icons';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { appColors, PADDING_HORIZONTAL_CONTAIN } from '../../constants';

export const Header: React.FC<{ onBackPress: () => void }> = ({
  onBackPress,
}) => {
  return (
    <View style={styles.appheader}>
      <View style={styles.leftSection}>
        <TouchableOpacity onPress={onBackPress}>
          <AntDesign name="caret-left" size={20} color={appColors.black} />
        </TouchableOpacity>

        <Image
          style={styles.avatar}
          resizeMode="contain"
          source={require('../../images/user009.png')}
        />

        <View>
          <Text style={styles.userName}>Robert Walker</Text>
          <Text style={styles.userLevel}>Level 6</Text>
        </View>
      </View>
      <View style={styles.pointsContainer}>
        <Text style={styles.pointsText}>228</Text>
        <MaterialDesignIcons
          name="star-four-points"
          size={20}
          color={appColors.yellowGolden}
        />
      </View>
    </View>
  );
};

export const styles = StyleSheet.create({
  appheader: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: PADDING_HORIZONTAL_CONTAIN,
    paddingVertical: 10,
    // backgroundColor: 'red',
  },
  leftSection: {
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
  },
  avatar: {
    width: 40,
    height: 40,
    backgroundColor: appColors.orange002,
    borderRadius: 99,
  },
  userName: {
    fontWeight: '700',
    fontSize: 18,
    color: appColors.black,
  },
  userLevel: {
    fontWeight: '500',
    color: appColors.black,
  },
  pointsContainer: {
    flexDirection: 'row',
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 10,
    backgroundColor: appColors.orange,
    alignItems: 'center',
    marginLeft: 10,
  },
  pointsText: {
    fontWeight: '700',
    color: appColors.wheat,
    marginRight: 5,
  },
});
