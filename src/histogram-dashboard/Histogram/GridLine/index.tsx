import React from 'react';
import { View, StyleSheet } from 'react-native';

export interface GridLineProps {
    top: number;
    axisColor: string;
}

export const GridLine: React.FC<GridLineProps> = ({ top, axisColor }) => {
    return (
        <View
            style={[
                styles.gridLine,
                {
                    top,
                    backgroundColor: axisColor,
                    opacity: 0.2,
                },
            ]}
        />
    );
};

const styles = StyleSheet.create({
    gridLine: {
        position: 'absolute',
        left: 0,
        right: 0,
        height: 1,
    },
});
