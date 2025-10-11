import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import MaterialDesignIcons from '@react-native-vector-icons/material-design-icons';
import { appColors, COMMON_PADDING_HORIZONTAL } from '../../constants';
import { getRoundedStyles } from '../../../common/util/styling';
import { fontFamily } from '../../../../assets/fonts';

export const ShuffleView: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <View style={styles.iconWrapper}>
          <MaterialDesignIcons name="pin" size={25} color={appColors.grey003} />
        </View>
        <Text style={styles.text}>Hello IOS Guide</Text>
      </View>

      {/* Scroll pins buttons */}
      <View style={styles.iconWrapper}>
        <Pressable
          onPress={() => {
            console.log('Up');
          }}
        >
          <MaterialDesignIcons
            name="chevron-up"
            size={25}
            color={appColors.grey003}
          />
        </Pressable>
        <Pressable
          onPress={() => {
            console.log('Down');
          }}
        >
          <MaterialDesignIcons
            name="chevron-down"
            size={25}
            color={appColors.grey003}
          />
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: appColors.grey005,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: COMMON_PADDING_HORIZONTAL,
    paddingHorizontal: 4,
    paddingVertical: 4,
    borderRadius: 50,
    gap: 10,
  },
  iconWrapper: {
    ...getRoundedStyles(50),
    backgroundColor: appColors.white,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: appColors.grey001,
    fontFamily: fontFamily.manrope.semiBold,
    fontSize: 16,
  },
});
