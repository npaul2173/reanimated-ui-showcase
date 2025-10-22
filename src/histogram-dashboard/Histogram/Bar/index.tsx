import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export interface BarProps {
    item: {
        label: string;
        value: number;
    };
    index: number;
    barWidth: number;
    barHeight: number;
    barColor: string;
    textColor: string;
    barSpacing: number;
    dataLength: number;
    showValues: boolean;
}

export const Bar: React.FC<BarProps> = ({
    item,
    index,
    barWidth,
    barHeight,
    barColor,
    textColor,
    barSpacing,
    dataLength,
    showValues,
}) => {
    return (
        <View style={styles.barContainer}>
            <View
                style={[
                    styles.bar,
                    {
                        width: barWidth,
                        height: barHeight,
                        backgroundColor: barColor,
                        marginRight: index < dataLength - 1 ? barSpacing : 0,
                    },
                ]}
            />
            {showValues && (
                <Text style={[styles.barValue, { color: textColor }]}>
                    {item.value}
                </Text>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    barContainer: {
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    bar: {
        borderRadius: 2,
    },
    barValue: {
        fontSize: 10,
        fontWeight: '500',
        marginTop: 4,
        textAlign: 'center',
    },
});
