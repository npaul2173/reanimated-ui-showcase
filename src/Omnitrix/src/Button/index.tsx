import MaterialDesignIcons from '@react-native-vector-icons/material-design-icons';
import React from 'react';
import {
  StyleProp,
  StyleSheet,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';

type DiamondButtonProps = {
  onPress: () => void;
  direction: 'next' | 'back';
  size?: number; // optional size
  disabled: boolean;
};

export const DiamondButton: React.FC<DiamondButtonProps> = ({
  onPress,
  direction,
  size = 40,
  disabled,
}) => {
  const iconName =
    direction === 'next' ? 'arrow-right-thin' : 'arrow-left-thin';

  const bgStylesButton: StyleProp<ViewStyle> = {
    backgroundColor: disabled ? '#4a5548ff' : '#E3F326',
  };
  return (
    <TouchableOpacity disabled={disabled} onPress={onPress} activeOpacity={0.8}>
      <View
        style={[
          styles.button,
          {
            width: size,
            height: size,
            transform: [{ rotate: '45deg' }],
          },
          bgStylesButton,
        ]}
      >
        <MaterialDesignIcons
          name={iconName}
          size={size * 0.5} // icon smaller than button
          color="#000000ff"
          style={{ transform: [{ rotate: '-45deg' }] }} // rotate back icon
        />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    // width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
  },
});
