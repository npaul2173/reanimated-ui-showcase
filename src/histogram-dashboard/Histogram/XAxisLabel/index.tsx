import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export interface XAxisLabelProps {
    item: {
        label: string;
        value: number;
    };
    textColor: string;
}

export const XAxisLabel: React.FC<XAxisLabelProps> = ({ item, textColor }) => {
    return (
        <View style={styles.xAxisLabelContainer}>
            <Text style={[styles.xAxisLabel, { color: textColor }]}>
                {item.label}
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    xAxisLabelContainer: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    xAxisLabel: {
        fontSize: 12,
        fontWeight: '500',
        textAlign: 'center',
    },
});
