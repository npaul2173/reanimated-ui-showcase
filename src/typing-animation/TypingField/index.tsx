import { useCallback, useEffect, useRef, useState } from 'react';
import {
  StyleProp,
  StyleSheet,
  TextInput,
  View,
  ViewStyle,
} from 'react-native';
import Animated, {
  interpolateColor,
  SharedValue,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import { fontFamily } from '../../../assets/fonts';
import { BlinkingCursor } from '../BlinkingCursor';

const FONT_SIZE = 100;
const PADDING = 20;
const CURSOR_WIDTH = 10;

type TypingFieldProps = {
  fontSize?: number;
  backgroundStyles?: StyleProp<ViewStyle>;
  value: string;
  onChangeText: (text: string) => void;
  isFocused?: boolean;
};

export const TypingField: React.FC<TypingFieldProps> = ({
  fontSize = FONT_SIZE,
  backgroundStyles,
  value,
  onChangeText,
  isFocused,
}) => {
  const [active, setActive] = useState(isFocused);
  const inputRef = useRef<TextInput>(null);
  const isFocusedShared = useSharedValue(0); // 0 = not focused, 1 = focused

  // useEffect(() => {
  //   if (!active && value === '0.00') {
  //     onChangeText('0');
  //   }
  // }, [active]);

  const onTextFocus = () => {
    if (value === '0.00') onChangeText('0');
    setActive(true);
    isFocusedShared.value = withTiming(1, { duration: 300 });
  };

  const onBlurFocus = () => {
    setActive(false);
    isFocusedShared.value = withTiming(0, { duration: 300 });
  };

  const onChangeCallback = (text: string) => {
    console.log({ text, value }, !/^\d*\.?\d*$/.test(text));
    if (!/^\d*\.?\d*$/.test(text)) return;

    // Split on decimal and validate precision
    const [_, decimalPart] = text.split('.');
    if (decimalPart && decimalPart.length > 2) return;
    else {
      console.log('parseFloat(value) ', parseFloat(value), text);
      if (value === '0' && text.charAt(0) === '0' && text.length > 1) {
        onChangeText(text.charAt(1)); // Replace "0" with new digit
        return;
      } else if (text === '') onChangeText('0');
      else {
        onChangeText(text);
      }
    }
  };

  useEffect(() => {
    if (isFocused) {
    }
  }, [isFocused]);

  const animatedStyles = useAnimatedStyle(() => ({
    transform: [
      {
        translateX: withTiming(active ? 0 : value.length * 10, {
          duration: 300,
        }),
      },
      { scale: withTiming(active ? 1 : 0.4, { duration: 300 }) }, // Scale based on focus
    ],
  }));

  return (
    <View
      onTouchEnd={() => inputRef.current?.focus()}
      style={[
        styles.wrapper,
        backgroundStyles,
        { height: fontSize + PADDING * 2, paddingHorizontal: PADDING },
      ]}
    >
      <View
        style={{
          // backgroundColor: 'red',
          alignItems: 'flex-end',
        }}
      >
        <Animated.View
          style={[styles.container, { height: fontSize }, animatedStyles]}
        >
          {value.split('').map((char, index) => (
            <AnimatedText
              key={`${char}-${index}`}
              character={char}
              fontSize={fontSize}
              cursorWidth={CURSOR_WIDTH}
              isFocusedShared={isFocusedShared}
            />
          ))}
          {active && <BlinkingCursor height={fontSize} width={CURSOR_WIDTH} />}
        </Animated.View>
      </View>

      {/* Hidden TextInput */}
      <TextInput
        ref={inputRef}
        keyboardType="decimal-pad"
        style={styles.hiddenInput}
        value={value}
        onFocus={onTextFocus}
        onBlur={onBlurFocus}
        onChangeText={onChangeCallback}
        autoFocus={isFocused}
      />
    </View>
  );
};

const AnimatedText: React.FC<{
  character: string;
  fontSize: number;
  cursorWidth: number;
  isFocusedShared: SharedValue<number>;
}> = ({ isFocusedShared, character, fontSize, cursorWidth }) => {
  const animationProgress = useSharedValue(0);
  const pivotX = fontSize;
  const pivotY = fontSize;

  const animationCallback = useCallback(() => {
    animationProgress.value = withTiming(1, { duration: 300 });
  }, [animationProgress]);

  useEffect(() => {
    animationCallback();
  }, [animationCallback]);

  const animatedStyles = useAnimatedStyle(() => ({
    color: interpolateColor(
      isFocusedShared.value,
      [1, 0],
      ['#000000', '#888888'], // black to grey
    ),
    transform: [
      { translateX: pivotX / 2 - cursorWidth },
      { translateY: pivotY / 2 - cursorWidth },
      { scale: animationProgress.value },
      { translateX: -(pivotX / 2) + cursorWidth },
      { translateY: -(pivotY / 2) + cursorWidth },
    ],
  }));

  return (
    <Animated.Text
      style={[
        styles.inputText,
        { fontSize, lineHeight: fontSize + 10 },
        animatedStyles,
      ]}
    >
      {character}
    </Animated.Text>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    minWidth: 100,
    borderRadius: 20,
    backgroundColor: '#f4f4f4ff',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  container: {
    flexDirection: 'row',
  },
  inputText: {
    fontFamily: fontFamily.poppins.bold,
    letterSpacing: -5,
    fontVariant: ['tabular-nums'],
  },
  hiddenInput: {
    position: 'absolute',
    opacity: 0,
  },
});
