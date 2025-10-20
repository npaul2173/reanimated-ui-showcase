import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import Animated, {
    SharedValue,
    interpolate,
    useAnimatedStyle
} from 'react-native-reanimated';
import { appColors } from '../../constants';
import { fontFamily } from '../../../../assets/fonts';
import { extendedData } from '..';

interface CarouselItemProps {
    item: {
        id: number;
        text: string;
        icon: string;
        imageSource: any;
    };
    index: number;
    scrollY: SharedValue<number>;
    itemHeight: number;
}

export const CarouselItem: React.FC<CarouselItemProps> = ({
    item,
    index,
    scrollY,
    itemHeight
}) => {
    const inputRange = [
        (index - 1) * itemHeight,
        index * itemHeight,
        (index + 1) * itemHeight,
    ];

    // const opacity = interpolate(scrollY.value, inputRange, [0.3, 1, 0.3]);
    // const scale = interpolate(scrollY.value, inputRange, [0.8, 1, 0.8]);



    const animatedStyles = useAnimatedStyle(() => {
        const itemPosition = index * 50
        const totalSize = extendedData.length * 100;
        const range =
            ((itemPosition - (scrollY.value + totalSize * 1000)) % totalSize) +
            100 +
            100 / 2;
        return {

            opacity: interpolate(
                range,
                [-itemHeight, (250 - itemHeight) / 2, 250],
                [0, -20, 0],
            ),



        };
    });



    return (
        <Animated.View
            key={`${item.id}-${index}`}
            style={[
                styles.itemContainer,
                animatedStyles,
                {
                    height: itemHeight,
                    // opacity,
                    // transform: [{ scale }],
                },
            ]}
        >
            <Image source={item.imageSource} resizeMode='contain' style={styles.iconImage} />
            <Text style={styles.itemText}>{item.text}</Text>
        </Animated.View>
    );
};

const styles = StyleSheet.create({
    itemContainer: {
        height: 80,
        alignItems: 'center',
        flexDirection: 'row',
        paddingHorizontal: 20,
        // backgroundColor: '#228800'

    },
    iconImage: {
        width: 40,
        height: 40,
        borderRadius: 8,
        marginBottom: 8,
        resizeMode: 'contain',
    },
    itemText: {
        marginTop: -10,
        fontSize: 40,
        color: appColors.black,
        textAlign: 'center',
        letterSpacing: -2,
        fontFamily: fontFamily.manrope.extraBold,
    },
});
