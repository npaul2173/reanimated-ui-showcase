import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { RotatoryListItem } from './RotatoryList';
import { appColors } from '../constants';

type ItemProps = {
    item: RotatoryListItem;
};

export const Item: React.FC<ItemProps> = ({ item }) => {
    return (
        <View style={[styles.card, { backgroundColor: item.backgroundColor }]}>
            <View style={styles.textBlock}>
                <Text numberOfLines={2} style={[styles.title, { color: item.fontColor }]}>
                    {item.singerName}
                </Text>
            </View>
            <Image source={item.imageSource} style={styles.image} resizeMode="cover" />
        </View>
    );
};

const styles = StyleSheet.create({
    card: {

        height: 90,
        width: 300,
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 18,
        paddingLeft: 16,
        paddingRight: 8,
        marginRight: 16,
    },
    textBlock: {
        flex: 1,
        paddingRight: 12,
    },
    title: {
        lineHeight: 40,
        fontSize: 40,
        fontWeight: '700',
        letterSpacing: -0.5,
    },
    image: {
        width: 72,
        height: 72,
        borderRadius: 12,
        overflow: 'hidden',
    },
});

export default Item;


