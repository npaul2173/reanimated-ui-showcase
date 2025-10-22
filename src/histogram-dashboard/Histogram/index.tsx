import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { YAxisLabel } from './YAxisLabel';
import { GridLine } from './GridLine';
import { Bar } from './Bar';
import { XAxisLabel } from './XAxisLabel';

export interface HistogramData {
    label: string;
    value: number;
}

export interface HistogramProps {
    data: HistogramData[];
    width: number;
    height: number;
    barColor: string;
    textColor: string;
    axisColor: string;
    maxValue?: number;
    showValues?: boolean;
    barSpacing?: number;
}

export const Histogram: React.FC<HistogramProps> = ({
    data,
    width,
    height,
    barColor,
    textColor,
    axisColor,
    maxValue,
    showValues = true,
    barSpacing = 8,
}) => {
    // Calculate the maximum value if not provided
    const calculatedMaxValue = maxValue || Math.max(...data.map(item => item.value));

    // Calculate dimensions
    const chartWidth = width - 60; // Leave space for Y-axis labels
    const chartHeight = height - 60; // Leave space for X-axis labels
    const barWidth = (chartWidth - (data.length - 1) * barSpacing) / data.length;

    // Calculate Y-axis scale
    const yAxisSteps = 5;
    const yStepValue = calculatedMaxValue / yAxisSteps;

    // Generate Y-axis labels
    const yAxisLabels = Array.from({ length: yAxisSteps + 1 }, (_, i) =>
        Math.round((yAxisSteps - i) * yStepValue)
    );

    return (
        <View style={[styles.container, { width, height }]}>
            {/* Y-axis labels */}
            <View style={styles.yAxisContainer}>
                {yAxisLabels.map((value, index) => (
                    <YAxisLabel
                        key={index}
                        value={value}
                        textColor={textColor}
                    />
                ))}
            </View>

            {/* Chart area */}
            <View style={[styles.chartContainer, { width: chartWidth, height: chartHeight }]}>
                {/* Y-axis grid lines */}
                {yAxisLabels.map((_, index) => (
                    <GridLine
                        key={index}
                        top={(index * chartHeight) / yAxisSteps}
                        axisColor={axisColor}
                    />
                ))}

                {/* Bars */}
                <View style={styles.barsContainer}>
                    {data.map((item, index) => {
                        const barHeight = (item.value / calculatedMaxValue) * chartHeight;
                        return (
                            <Bar
                                key={index}
                                item={item}
                                index={index}
                                barWidth={barWidth}
                                barHeight={barHeight}
                                barColor={barColor}
                                textColor={textColor}
                                barSpacing={barSpacing}
                                dataLength={data.length}
                                showValues={showValues}
                            />
                        );
                    })}
                </View>
            </View>

            {/* X-axis labels */}
            <View style={styles.xAxisContainer}>
                {data.map((item, index) => (
                    <XAxisLabel
                        key={index}
                        item={item}
                        textColor={textColor}
                    />
                ))}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'flex-end',
    },
    yAxisContainer: {
        width: 50,
        height: '100%',
        justifyContent: 'space-between',
        paddingVertical: 10,
    },
    chartContainer: {
        position: 'relative',
        justifyContent: 'flex-end',
    },
    barsContainer: {
        flexDirection: 'row',
        alignItems: 'flex-end',
        height: '100%',
        justifyContent: 'space-between',
    },
    xAxisContainer: {
        position: 'absolute',
        bottom: -40,
        left: 50,
        right: 0,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 0,
    },
});
