import React from 'react';
import { Linking, StyleSheet, Text, View } from 'react-native';
import { fontFamily } from '../../../../assets/fonts';
import { AdvancedButton } from './button';

export const Footer: React.FC = () => {
  const handleOpenTerms = () =>
    Linking.openURL('https://cl.pinterest.com/pin/466685580157336704/');

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View>
          <Text style={styles.title}>Welcome</Text>
          <Text style={[styles.title, styles.titleSpacing]}>to Saudi</Text>
        </View>

        <Text style={styles.subtitle}>
          Enjoy your stay in the future{'\n'}and invest in shaping it
        </Text>

        <View style={styles.button}>
          <AdvancedButton
            title="Get standard"
            colors={['#9e7b43ff', '#00000000']}
            onPress={() => console.log('Pressed!')}
            borderWidth={1}
            borderRadius={20}
            textColor={'#baa178ff'}
          />
        </View>
        <Text style={styles.terms}>
          By continuing you agree to{' '}
          <Text style={styles.link} onPress={handleOpenTerms}>
            Terms and conditions
          </Text>
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    zIndex: 200,
  },
  button: {
    paddingTop: 10,
    paddingBottom: 50,
  },
  content: {
    position: 'absolute',
    alignItems: 'center',
    bottom: 0,
    width: '100%',
    paddingBottom: 30,
  },
  title: {
    color: '#fcdcbaee',
    fontFamily: fontFamily.Lexend.regular,
    fontSize: 50,
    letterSpacing: -3,
  },
  titleSpacing: {
    marginTop: -12,
  },
  subtitle: {
    paddingTop: 10,
    paddingBottom: 10,
    color: '#d0b395ee',
    fontFamily: fontFamily.Lexend.regular,
    fontSize: 16,
    letterSpacing: -0.5,
    marginTop: 4,
    textAlign: 'center',
  },
  terms: {
    color: '#88735cee',
    fontFamily: fontFamily.Lexend.regular,
    fontSize: 12,
    letterSpacing: -0.5,
    marginTop: 4,
  },
  link: {
    color: '#88735cee',
    textDecorationLine: 'underline',
  },
});
