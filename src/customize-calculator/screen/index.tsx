import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { appColors, colorSchemes } from '../constants';
import { Calculator } from '../Calculator';

const { width: screenWidth } = Dimensions.get('window');

export const Screen: React.FC = () => {
    const [selectedScheme, setSelectedScheme] = useState(colorSchemes[0]);

    const handleSchemeSelect = (scheme: typeof colorSchemes[0]) => {
        setSelectedScheme(scheme);
    };

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
                {/* Calculator */}
                <View style={styles.calculatorContainer}>
                    <Calculator
                        backgroundColor={selectedScheme.backgroundColor}
                        buttonColor={selectedScheme.buttonColor}
                        operatorColor={selectedScheme.operatorColor}
                        textColor={appColors.white}
                    />
                </View>

                {/* Color Slider */}
                <View style={styles.sliderContainer}>
                    <ScrollView
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        contentContainerStyle={styles.sliderContent}
                    >
                        {colorSchemes.map((scheme) => (
                            <TouchableOpacity
                                key={scheme.id}
                                style={[
                                    styles.colorSwatch,
                                    {
                                        backgroundColor: scheme.backgroundColor,
                                        borderColor: selectedScheme.id === scheme.id ? appColors.white : 'transparent',
                                        borderWidth: selectedScheme.id === scheme.id ? 3 : 0,
                                    },
                                ]}
                                onPress={() => handleSchemeSelect(scheme)}
                            />
                        ))}
                    </ScrollView>
                </View>

                {/* Title and Subtitle */}
                <View style={styles.textContainer}>
                    <Text style={styles.title}>Customize your calculator</Text>
                    <Text style={styles.subtitle}>Swipe the slider to pick colors you love.</Text>
                </View>

                {/* Continue Button */}
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.continueButton}>
                        <Text style={styles.continueButtonText}>Continue</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: appColors.creamBackground,
    },
    scrollView: {
        flex: 1,
    },
    calculatorContainer: {
        paddingHorizontal: 20,
        paddingTop: 40,
        paddingBottom: 20,
    },
    sliderContainer: {
        paddingHorizontal: 20,
        paddingVertical: 20,
    },
    sliderContent: {
        paddingHorizontal: 10,
    },
    colorSwatch: {
        width: 50,
        height: 50,
        borderRadius: 8,
        marginHorizontal: 5,
        shadowColor: appColors.black,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    textContainer: {
        paddingHorizontal: 20,
        paddingVertical: 20,
        alignItems: 'center',
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: appColors.darkGray,
        marginBottom: 8,
        textAlign: 'center',
    },
    subtitle: {
        fontSize: 16,
        color: appColors.lightGray,
        textAlign: 'center',
    },
    buttonContainer: {
        paddingHorizontal: 20,
        paddingVertical: 30,
        paddingBottom: 40,
    },
    continueButton: {
        backgroundColor: appColors.darkGray,
        borderRadius: 12,
        paddingVertical: 16,
        alignItems: 'center',
        shadowColor: appColors.black,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    continueButtonText: {
        color: appColors.white,
        fontSize: 18,
        fontWeight: '600',
    },
});
