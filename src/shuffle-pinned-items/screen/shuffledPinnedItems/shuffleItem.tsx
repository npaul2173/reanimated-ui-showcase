import Ionicons from '@react-native-vector-icons/ionicons';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ShuffleItemDataProps } from '.';
import { fontFamily } from '../../../../assets/fonts';
import { appColors, COMMON_PADDING_HORIZONTAL } from '../../constants';
import MaterialDesignIcons from '@react-native-vector-icons/material-design-icons';
import { getRoundedStyles } from '../../../common/util/styling';

interface ShuffleItemProps {
  item: ShuffleItemDataProps;
}

const ShuffleItem: React.FC<ShuffleItemProps> = ({ item }) => {
  return (
    <View style={styles.container}>
      <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
        <View
          style={{
            ...getRoundedStyles(40),
            borderWidth: 1,
            borderColor: appColors.grey003,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Ionicons
            name="chatbubble"
            size={20}
            color={appColors.grey003}
            style={styles.icon}
          />
        </View>

        <Text style={styles.text}>{item.text}</Text>
      </View>

      <MaterialDesignIcons
        name="pin"
        size={30}
        color={appColors.grey003}
        style={styles.icon}
      />
    </View>
  );
};

export default ShuffleItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 10,
    paddingHorizontal: COMMON_PADDING_HORIZONTAL,
    borderRadius: 12,
  },
  icon: {
    // marginRight: 12,
  },
  text: {
    fontSize: 16,
    color: appColors.black,
    fontFamily: fontFamily.manrope.semiBold,
  },
});
