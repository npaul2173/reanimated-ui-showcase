import React from 'react';
import { View, Text, StyleSheet, ScrollView, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import {
    appColors,
    sampleData,
    salesData,
    userEngagementData,
    chartConfigs
} from '../constants';
import { Histogram } from '../Histogram';

const { width: screenWidth } = Dimensions.get('window');

export const Screen: React.FC = () => {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
                <View style={styles.header}>
                    <Text style={styles.title}>Histogram Dashboard</Text>
                    <Text style={styles.subtitle}>Interactive data visualization</Text>
                </View>

                <View style={styles.chartContainer}>
                    <Text style={styles.chartTitle}>{chartConfigs.monthlySales.title}</Text>
                    <Histogram
                        data={sampleData}
                        width={screenWidth - 40}
                        height={chartConfigs.monthlySales.height}
                        barColor={chartConfigs.monthlySales.barColor}
                        textColor={chartConfigs.monthlySales.textColor}
                        axisColor={chartConfigs.monthlySales.axisColor}
                        showValues={chartConfigs.monthlySales.showValues}
                    />
                </View>




            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: appColors.white,
    },
    scrollView: {
        flex: 1,
    },
    header: {
        paddingHorizontal: 20,
        paddingVertical: 20,
        alignItems: 'center',
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: appColors.darkGray,
        marginBottom: 8,
    },
    subtitle: {
        fontSize: 16,
        color: appColors.lightGray,
    },
    chartContainer: {
        backgroundColor: appColors.white,
        borderRadius: 12,
    },
    chartTitle: {
        fontSize: 18,
        fontWeight: '600',
        color: appColors.darkGray,
        marginBottom: 16,
        textAlign: 'center',
    },
});
