import React from 'react';
import { ListRenderItem, ViewStyle } from 'react-native';
import Animated from 'react-native-reanimated';
import Item from './Item';

export type RotatoryListItem = {
    singerName: string;
    imageSource: any; // require(...) result is a number for RN packager; keep flexible
    uniqueID: string;
    backgroundColor: string;
    fontColor: string;
};

type RotatoryListProps = {
    data: RotatoryListItem[];
    contentContainerStyle?: ViewStyle | ViewStyle[];
};

export const RotatoryList: React.FC<RotatoryListProps> = ({
    data,
    contentContainerStyle,
}) => {
    const renderItem: ListRenderItem<RotatoryListItem> = ({ item }) => (
        <Item item={item} />
    );

    return (
        <Animated.FlatList
            data={data}
            scrollToOverflowEnabled
            pagingEnabled
            decelerationRate="fast"
            showsVerticalScrollIndicator={false}
            snapToInterval={260}
            keyExtractor={(it) => it.uniqueID}
            renderItem={renderItem}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={contentContainerStyle}
        />
    );
};

export default RotatoryList;


