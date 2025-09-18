import { Ionicons } from '@react-native-vector-icons/ionicons';
import { StyleSheet } from 'react-native';
import Animated, {
  FadeIn,
  FadeInDown,
  FadeOut,
  LinearTransition,
  useAnimatedStyle,
  withTiming,
} from 'react-native-reanimated';
import { fontFamily } from '../../../../assets/fonts';

const ACTIVE_COLOR = '#D7EC29';
const INACTIVE_COLOR = '#FFFFFF';
const ACTIVE_BORDER_COLOR = '#D7EC29';
const INACTIVE_BORDER_COLOR = '#AAAAAA';

type CheckboxProps = {
  label: string;
  checked: boolean;
  index: number;
  onPress: () => void;
};

const TimingConfig = {
  duration: 150,
};

export const Checkbox: React.FC<CheckboxProps> = ({
  label,
  checked,
  onPress,
  index,
}) => {
  const rContainerStyle = useAnimatedStyle(() => {
    return {
      backgroundColor: withTiming(
        checked ? ACTIVE_COLOR : INACTIVE_COLOR,
        TimingConfig,
      ),
      borderColor: withTiming(
        checked ? ACTIVE_BORDER_COLOR : INACTIVE_BORDER_COLOR,
        TimingConfig,
      ),
      paddingLeft: 20,
      paddingRight: !checked ? 20 : 14,
    };
  }, [checked]);

  return (
    <Animated.View
      entering={FadeInDown.delay(800 + index * 50)}
      layout={LinearTransition.springify().mass(0.8)}
      style={[styles.container, rContainerStyle]}
      onTouchEnd={onPress}
    >
      <Animated.Text style={[styles.label]}>{label}</Animated.Text>

      {checked && (
        <Animated.View entering={FadeIn.duration(350)} exiting={FadeOut}>
          <Ionicons size={20} name="checkmark-circle" />
        </Animated.View>
      )}
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 12,
    gap: 8,
    borderWidth: 1,
    borderColor: '#fff',
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {
    fontSize: 18,
    fontWeight: 500,
    fontFamily: fontFamily.zolandoSans.regular,
  },
});
