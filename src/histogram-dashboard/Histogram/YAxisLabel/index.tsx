import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export interface YAxisLabelProps {
    value: number;
    textColor: string;
}

export const YAxisLabel: React.FC<YAxisLabelProps> = ({ value, textColor }) => {
    return (
        <View style={styles.yAxisLabelContainer}>
            <Text style={[styles.yAxisLabel, { color: textColor }]}>
                {value}
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    yAxisLabelContainer: {
        alignItems: 'flex-end',
        justifyContent: 'center',
        height: 20,
    },
    yAxisLabel: {
        fontSize: 12,
        fontWeight: '500',
    },
});
