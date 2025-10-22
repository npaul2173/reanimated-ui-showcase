import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export interface CalculatorProps {
    backgroundColor?: string;
    buttonColor?: string;
    operatorColor?: string;
    textColor?: string;
}

export const Calculator: React.FC<CalculatorProps> = ({
    backgroundColor = '#E8D5F2',
    buttonColor = '#E8D5F2',
    operatorColor = '#A8E6CF',
    textColor = '#FFFFFF',
}) => {
    const buttons = [
        ['AC', '7', '8', '9', '÷'],
        ['%', '4', '5', '6', '×'],
        ['%', '1', '2', '3', '-'],
        ['0', '.', '=', '+'],
    ];

    const renderButton = (text: string, index: number, rowIndex: number) => {
        const isOperator = ['÷', '×', '-', '+', '='].includes(text);
        const isZero = text === '0';
        const isAC = text === 'AC';

        return (
            <TouchableOpacity
                key={`${rowIndex}-${index}`}
                style={[
                    styles.button,
                    {
                        backgroundColor: isOperator ? operatorColor : buttonColor,
                        width: isZero ? styles.button.width * 2 + 8 : styles.button.width,
                    },
                ]}
                disabled
            >
                <Text style={[styles.buttonText, { color: textColor }]}>
                    {text}
                </Text>
            </TouchableOpacity>
        );
    };

    return (
        <View style={[styles.container, { backgroundColor }]}>
            {/* Display Area */}
            <View style={styles.displayContainer}>
                <Text style={[styles.displayText, { color: textColor }]}>0</Text>
                <View style={[styles.memoryIcon, { backgroundColor: buttonColor }]} />
            </View>

            {/* Button Grid */}
            <View style={styles.buttonGrid}>
                {buttons.map((row, rowIndex) => (
                    <View key={rowIndex} style={styles.buttonRow}>
                        {row.map((button, index) => renderButton(button, index, rowIndex))}
                    </View>
                ))}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 400,
        borderRadius: 20,
        padding: 20,
        justifyContent: 'space-between',
    },
    displayContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        paddingHorizontal: 10,
        paddingVertical: 20,
    },
    displayText: {
        fontSize: 48,
        fontWeight: '300',
        marginRight: 10,
    },
    memoryIcon: {
        width: 20,
        height: 20,
        borderRadius: 4,
    },
    buttonGrid: {
        flex: 1,
        justifyContent: 'space-between',
        paddingTop: 20,
    },
    buttonRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 12,
    },
    button: {
        width: 70,
        height: 70,
        borderRadius: 35,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        fontSize: 24,
        fontWeight: '500',
    },
});
