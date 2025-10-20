import React, { useEffect, useRef } from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import Animated, {
    useAnimatedScrollHandler,
    useSharedValue,
    withRepeat,
    withTiming,
    runOnJS,
} from 'react-native-reanimated';
import { data } from '../constants';
import { CarouselItem } from './CarouselItem';

const { width: screenWidth } = Dimensions.get('window');
export const extendedData = Array.from({ length: 20 }, (_, outerIndex) =>
    data.taglineItems.map((item, innerIndex) => ({
        ...item,
        id: outerIndex * 3 + innerIndex + 1
    }))
).flat();
export const TagLineCarousel: React.FC = () => {
    const scrollX = useSharedValue(0);
    const scrollViewRef = useRef<Animated.ScrollView>(null);

    // Create array by duplicating the 3 items 20 times (60 total items) with unique IDs


    // useEffect(() => {
    //     // Auto-scroll animation with pagination using setInterval
    //     const interval = setInterval(() => {
    //         const currentX = scrollX.value;
    //         const currentIndex = Math.round(currentX / ITEM_WIDTH);
    //         const nextIndex = (currentIndex + 1) % extendedData.length;
    //         const targetX = nextIndex * ITEM_WIDTH;
    //         console.log("called");

    //         scrollViewRef.current?.scrollTo({ y: targetX, animated: true })
    //         // scrollX.value = withTiming(targetX, {
    //         //     duration: 2000, // 2 seconds per page
    //         // });
    //     }, 2000);

    //     return () => clearInterval(interval);
    // }, []);

    const scrollHandler = useAnimatedScrollHandler({
        onScroll: (event) => {
            scrollX.value = event.contentOffset.y;
        },
    });

    console.log(extendedData);


    return (
        <View style={styles.container}>
            <Animated.ScrollView
                ref={scrollViewRef}
                showsHorizontalScrollIndicator={false}
                onScroll={scrollHandler}
                pagingEnabled
                decelerationRate={'fast'}
                snapToInterval={100}
                scrollEventThrottle={16}
                // style={styles.scrollView}
                contentContainerStyle={styles.scrollContent}
            >
                {extendedData.map((item, index) => (
                    <CarouselItem
                        key={`${item.id}-${index}`}
                        item={item}
                        index={index}
                        scrollY={scrollX}
                        itemHeight={100}
                    />
                ))}
            </Animated.ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        height: 250,
        marginVertical: 20,
        backgroundColor: 'wheat'
    },
    scrollView: {
        // flex: 1,
        // backgroundColor: 'red'
    },
    scrollContent: {
        // flexDirection: 'row',
    },
});
