import React from 'react';
import { View, Text, StyleSheet, ViewStyle, TextStyle } from 'react-native';
import { fontFamily } from '../../../../assets/fonts';

interface DividerProps {
  text?: string;
  containerStyle?: ViewStyle;
  textStyle?: TextStyle;
  lineColor?: string;
}

export const Divider: React.FC<DividerProps> = ({
  text = '',
  containerStyle,
  textStyle,
  lineColor = '#ccc',
}) => {
  return (
    <View style={[styles.container, containerStyle]}>
      <View style={[styles.line, { backgroundColor: lineColor }]} />
      {text.length > 0 && <Text style={[styles.text, textStyle]}>{text}</Text>}
      <View style={[styles.line, { backgroundColor: lineColor }]} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    paddingVertical: 16,
  },
  line: {
    flex: 1,
    height: StyleSheet.hairlineWidth,
    backgroundColor: '#ccc',
  },
  text: {
    fontFamily: fontFamily.zolandoSans.bold,
    marginHorizontal: 8,
    fontSize: 10,
    color: '#999',
  },
});
