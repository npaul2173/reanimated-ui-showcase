import { useCallback, useEffect, useRef, useState } from 'react';
import {
  StyleProp,
  StyleSheet,
  TextInput,
  View,
  ViewStyle,
} from 'react-native';
import Animated, {
  interpolate,
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
};

export const TypingField: React.FC<TypingFieldProps> = ({
  fontSize = FONT_SIZE,
  backgroundStyles,
}) => {
  const [active, setActive] = useState(false);
  const [value, setValue] = useState<string>('');
  const inputRef = useRef<TextInput>(null);

  const onTextFocus = () => {
    setActive(true);
  };

  const onBlurFocus = () => {
    setActive(false);
  };

  return (
    <View
      onTouchEnd={() => inputRef.current?.focus()}
      style={[
        styles.wrapper,
        backgroundStyles,
        { height: fontSize + PADDING * 2, paddingHorizontal: PADDING },
      ]}
    >
      <View style={[styles.container, { height: fontSize }]}>
        {value.split('').map((char, index) => (
          <AnimatedText
            key={`${char}-${index}`}
            character={char}
            fontSize={fontSize}
            cursorWidth={CURSOR_WIDTH}
          />
        ))}

        {active && <BlinkingCursor height={fontSize} width={CURSOR_WIDTH} />}
      </View>

      {/* Hidden TextInput */}
      <TextInput
        ref={inputRef}
        keyboardType="decimal-pad"
        style={styles.hiddenInput}
        value={value}
        onFocus={onTextFocus}
        onBlur={onBlurFocus}
        onChangeText={setValue}
        autoFocus={false}
      />
    </View>
  );
};

const AnimatedText: React.FC<{
  character: string;
  fontSize: number;
  cursorWidth: number;
}> = ({ character, fontSize, cursorWidth }) => {
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
        { fontSize, lineHeight: fontSize },
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
