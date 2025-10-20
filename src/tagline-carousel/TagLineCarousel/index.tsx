import React, { useEffect, useRef } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import Animated, {
    useAnimatedScrollHandler,
    useSharedValue,
    withRepeat,
    withTiming,
    interpolate,
} from 'react-native-reanimated';
import { data, appColors } from '../constants';
import { fontFamily } from '../../../assets/fonts';

const { width: screenWidth } = Dimensions.get('window');
const ITEM_WIDTH = screenWidth * 0.8;
const ITEM_HEIGHT = 80;

export const TagLineCarousel: React.FC = () => {
    const scrollX = useSharedValue(0);
    const scrollViewRef = useRef<Animated.ScrollView>(null);

    // Create array by duplicating the 3 items 20 times (60 total items)
    const extendedData = Array.from({ length: 20 }, () => data.taglineItems).flat();

    useEffect(() => {
        // Auto-scroll animation
        const startAutoScroll = () => {
            scrollX.value = withRepeat(
                withTiming(extendedData.length * ITEM_WIDTH, {
                    duration: extendedData.length * 2000, // 2 seconds per item
                }),
                -1, // infinite repeat
                false
            );
        };

        startAutoScroll();
    }, []);

    const scrollHandler = useAnimatedScrollHandler({
        onScroll: (event) => {
            scrollX.value = event.contentOffset.x;
        },
    });

    const renderItem = ({ item, index }: { item: any; index: number }) => {
        const inputRange = [
            (index - 1) * ITEM_WIDTH,
            index * ITEM_WIDTH,
            (index + 1) * ITEM_WIDTH,
        ];

        const opacity = interpolate(scrollX.value, inputRange, [0.3, 1, 0.3]);
        const scale = interpolate(scrollX.value, inputRange, [0.8, 1, 0.8]);

        return (
            <Animated.View
                key={`${item.id}-${index}`}
                style={[
                    styles.itemContainer,
                    {
                        opacity,
                        transform: [{ scale }],
                    },
                ]}
            >
                <View style={styles.iconPlaceholder} />
                <Text style={styles.itemText}>{item.text}</Text>
            </Animated.View>
        );
    };

    return (
        <View style={styles.container}>
            <Animated.ScrollView
                ref={scrollViewRef}
                horizontal
                showsHorizontalScrollIndicator={false}
                onScroll={scrollHandler}
                scrollEventThrottle={16}
                style={styles.scrollView}
                contentContainerStyle={styles.scrollContent}
            >
                {extendedData.map((item, index) => renderItem({ item, index }))}
            </Animated.ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        height: ITEM_HEIGHT,
        marginVertical: 20,
    },
    scrollView: {
        flex: 1,
    },
    scrollContent: {
        alignItems: 'center',
    },
    itemContainer: {
        width: ITEM_WIDTH,
        height: ITEM_HEIGHT,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
    },
    iconPlaceholder: {
        width: 40,
        height: 60,
        backgroundColor: appColors.whiteSemiTransparent30,
        borderRadius: 8,
        marginBottom: 8,
    },
    itemText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: appColors.white,
        textAlign: 'center',
        fontFamily: fontFamily.manrope.bold,
    },
});
