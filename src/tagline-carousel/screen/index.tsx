import MaterialDesignIcons from '@react-native-vector-icons/material-design-icons';
import React from 'react';
import { ImageBackground, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { fontFamily } from '../../../assets/fonts';
import { appColors, } from '../constants';
import { TagLineCarousel } from '../TagLineCarousel/index';

const PADDING = 30;

export const Screen: React.FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        backgroundColor={appColors.transparent}
        barStyle={'light-content'}
        translucent
      />
      <ImageBackground
        source={require('../assets/images/background.png')}
        style={styles.backgroundImage}
        resizeMode="cover"
      >
        <View style={styles.content}>


          <TagLineCarousel />

          <View  >
            {/* Logo placeholder */}
            <View style={styles.logoPlaceholder} >
              <MaterialDesignIcons name='alphabet-aurebesh' size={40} color={appColors.black} />
            </View>

            <Text style={styles.title}>{`Your money,\nupgraded`}</Text>
            <Text style={styles.subtitle}>Save, earn and invest with stablecoins and digital assets.</Text>

            {/* Buttons */}
            <View style={styles.buttonContainer}>
              <TouchableOpacity style={styles.appleButton}>
                <MaterialDesignIcons name='apple' size={24} color={appColors.black} />
                <Text style={styles.appleButtonText}>Continue with Apple</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.walletButton}>
                <MaterialDesignIcons name='restart' size={24} color={appColors.white} />
                <Text style={styles.walletButtonText}>Recover existing wallet</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  content: {
    flex: 1,
    paddingHorizontal: PADDING,
    paddingTop: 60,
    paddingBottom: 40,
    justifyContent: 'space-between',
  },
  logoPlaceholder: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 70,
    height: 70,
    backgroundColor: appColors.white,
    borderRadius: 12,
    marginVertical: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: appColors.white,
    textAlign: 'left',
    marginBottom: 12,
    fontFamily: fontFamily.manrope.bold,
  },
  subtitle: {
    fontSize: 16,
    color: appColors.white,
    textAlign: 'left',
    opacity: 0.9,
    marginBottom: 40,
    fontFamily: fontFamily.manrope.regular,

  },
  buttonContainer: {
    gap: 16,
  },
  appleButton: {
    backgroundColor: appColors.white,
    paddingVertical: 16,
    paddingHorizontal: 24,
    borderRadius: 12,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
  },
  appleButtonText: {
    color: appColors.black,
    fontSize: 16,
    fontWeight: '600',
    fontFamily: fontFamily.manrope.semiBold,
  },
  walletButton: {
    backgroundColor: appColors.whiteSemiTransparent20,
    paddingVertical: 16,
    paddingHorizontal: 24,
    borderRadius: 12,
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: appColors.whiteSemiTransparent30,
  },
  walletButtonText: {
    color: appColors.white,
    fontSize: 16,
    fontWeight: '600',
    fontFamily: fontFamily.manrope.semiBold,
  },
});
