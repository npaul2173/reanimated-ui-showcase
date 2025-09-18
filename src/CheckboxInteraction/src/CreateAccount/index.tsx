import MaterialDesignIcons from '@react-native-vector-icons/material-design-icons';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { StyleSheet, Text, View } from 'react-native';
import Animated, { FadeInDown, FadeInRight } from 'react-native-reanimated';
import { SafeAreaView } from 'react-native-safe-area-context';
import { fontFamily } from '../../../../assets/fonts';
import { CheckBoxInteractionStackParamsList } from '../../app';
import { PrimaryButton } from '../Button/PrimaryButton';
import { SocialButton } from '../Button/socialButton';
import { Divider } from '../Divider';
import { InputField } from '../InputField';
import { PADDING_HORIZONTAL_CONTAIN } from '../constants';

const withDelay = (delay: number) => FadeInDown.delay(delay).duration(400);
const withDelayInputFields = (delay: number) =>
  FadeInRight.delay(delay).duration(400);

type Props = NativeStackScreenProps<
  CheckBoxInteractionStackParamsList,
  'CreateAccoutScreen'
>;

export const CreateAccoutScreen: React.FC<Props> = ({ navigation }) => {
  return (
    <SafeAreaView mode="margin" style={styles.container}>
      <Animated.View entering={FadeInRight.delay(100)} style={styles.appheader}>
        <View>
          <View style={styles.logoContainer} />
          <MaterialDesignIcons
            name="star-four-points-box"
            size={50}
            color={'#D7EC29'}
          />
        </View>
      </Animated.View>
      <Animated.View entering={FadeInRight.delay(200)} style={styles.header}>
        <Text style={styles.title}>Create an account</Text>
        <Text style={styles.subtitle}>
          Create your account, it takes less than a minute. Enter your email and
          password.
        </Text>
      </Animated.View>

      <View style={[styles.spaceContainer]}>
        <Animated.View entering={withDelayInputFields(400)}>
          <InputField placeholder="Email" keyboardType="email-address" />
          <InputField placeholder="Password" isPassword />
        </Animated.View>
      </View>
      <View style={styles.buttonContainer}>
        <Animated.View entering={withDelay(800)}>
          <PrimaryButton
            title="Create an account"
            onPress={() => {
              navigation.navigate('OnboardingScreenScreen');
            }}
          />
        </Animated.View>

        <Animated.View entering={withDelayInputFields(850)}>
          <Divider text="OR" />
        </Animated.View>

        <Animated.View entering={withDelay(1000)}>
          <SocialButton icon="google" label="Continue with Google" />
        </Animated.View>

        <Animated.View entering={withDelay(1100)}>
          <SocialButton icon="facebook" label="Continue with Facebook" />
        </Animated.View>
        <Animated.View entering={withDelay(1200)}>
          <SocialButton icon="apple" label="Continue with Apple" />
        </Animated.View>
      </View>

      <Animated.View entering={withDelay(1400)} style={styles.footerComponent}>
        <Text style={styles.accountFooterText}>Already have an account?</Text>
        <Text style={styles.accountFooterText2}> Log In</Text>
      </Animated.View>
    </SafeAreaView>
  );
};

export const styles = StyleSheet.create({
  logoContainer: {
    position: 'absolute',
    top: 10,
    left: 10,
    backgroundColor: '#000000',
    width: 30,
    height: 30,
    borderRadius: 5,
  },
  appheader: {
    paddingHorizontal: PADDING_HORIZONTAL_CONTAIN,
    paddingTop: 20,
    paddingBottom: 10,
  },
  buttonContainer: {
    padding: PADDING_HORIZONTAL_CONTAIN,
    paddingBottom: 30,
  },
  container: {
    flex: 1,
    // paddingTop: 40,
    backgroundColor: '#ffffffff',
  },
  header: {
    gap: 10,
    paddingTop: 20,
    paddingHorizontal: PADDING_HORIZONTAL_CONTAIN,
    paddingBottom: 20,
  },
  title: {
    // fontWeight: '700',
    fontSize: 30,
    letterSpacing: -1,
    fontFamily: fontFamily.zolandoSans.medium,
  },
  spaceContainer: { paddingHorizontal: PADDING_HORIZONTAL_CONTAIN },
  subtitle: {
    fontSize: 16,
    color: '#9c9c9cff',
    fontFamily: fontFamily.zolandoSans.regular,
  },

  accountFooterText: {
    fontFamily: fontFamily.zolandoSans.bold,
    fontSize: 14,
    color: '#000000ff',
  },
  accountFooterText2: {
    fontFamily: fontFamily.zolandoSans.bold,
    fontSize: 14,
    color: '#b4c424ff',
  },
  footerComponent: {
    flexDirection: 'row',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 50,
    width: '100%',
  },
});
