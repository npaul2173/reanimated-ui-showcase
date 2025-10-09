import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';
import MaterialDesignIcons from '@react-native-vector-icons/material-design-icons';
import { appColors } from '../../constants';
import { fontFamily } from '../../../../assets/fonts';
import { getRoundedStyles } from '../../../common/util/styling';

const { width: appWidth } = Dimensions.get('screen');

const CONTAINER_WIDTH = Math.min(appWidth * 0.9, 400);
const PADDING_HORIZONTAL = 20;
const ITEM_HEIGHT = 60;
const ITEM_WIDTH = (CONTAINER_WIDTH - PADDING_HORIZONTAL * 3) / 2;

// TypeScript type for the menu item
type PillMenuItemProps = {
  id: string;
  image: any;
  name: string;
  onPress?: (id: string) => void;
};
console.log('ITEM_WIDTH', { ITEM_WIDTH }, { CONTAINER_WIDTH });

const PillMenuItem: React.FC<PillMenuItemProps> = ({
  image,
  name,
  id,
  onPress,
}) => {
  return (
    <View onTouchEnd={() => onPress?.(id)} style={styles.pillItemContainer}>
      <View style={{ flexDirection: 'row' }}>
        <Image
          source={image}
          style={[styles.pillImage, getRoundedStyles(24)]}
        />
        <Text style={styles.pillText}>{name}</Text>
      </View>

      <MaterialDesignIcons name="menu-right" color={appColors.pillText} />
    </View>
  );
};

export const PillDropdownItem: React.FC<PillMenuItemProps> = ({
  image,
  name,
  onPress,
  id,
}) => {
  return (
    <View
      onTouchEnd={() => onPress?.(id)}
      style={styles.pillDropdownItemContainer}
    >
      <View style={{ flexDirection: 'row' }}>
        <Image
          source={image}
          style={[styles.pillImage, getRoundedStyles(24)]}
        />
        <Text style={styles.pillText}>{name}</Text>
      </View>

      <MaterialDesignIcons name="menu-down" color={appColors.pillText} />
    </View>
  );
};

const styles = StyleSheet.create({
  pillItemContainer: {
    backgroundColor: appColors.baseLighter,
    width: ITEM_WIDTH, // Adjust for responsiveness
    height: ITEM_HEIGHT,
    paddingHorizontal: 12,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  pillImage: {
    marginRight: 8,
    backgroundColor: appColors.white,
  },
  pillText: {
    color: appColors.pillText,
    fontSize: 14,
    fontFamily: fontFamily.Lexend.medium,
  },

  pillDropdownItemContainer: {
    width: ITEM_WIDTH,
    height: 60,
    paddingHorizontal: 12,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});

export default PillMenuItem;
