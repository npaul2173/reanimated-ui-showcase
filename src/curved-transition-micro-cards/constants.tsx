import { ImageSourcePropType } from 'react-native';

export const appColors = {
  white: '#FFFFFF',
  black: '#000000',
  blue001: '#06a0e8ff',
};

export type TravelInfoItems = {
  id: string;
  image: ImageSourcePropType | undefined;
};
export const travelInfoItems = [
  {
    id: '1',
    image: require('./images/image005.jpg'),
  },
  {
    id: '2',
    image: require('./images/image003.jpg'),
  },
  {
    id: '3',
    image: require('./images/image006.jpg'),
  },
];
