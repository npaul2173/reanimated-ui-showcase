import { ImageSourcePropType } from 'react-native';

export const appColors = {
  white: '#FFFFFF',
  black: '#000000',
  blue001: '#06a0e8ff',
  yellow001: '#e6a31fff',
  redOrange: '#87261bff',
  sand: '#ebd05cff',
  green001: '#49ae3cff',
  grey001: '#566470ff',
  purple001: '#6b4cb9ff',
};

export type TravelInfoItemProps = {
  id: number;
  title: string;
  title2: string;
  gallery: TravelImageItem[];
  accentColor: string;
  description: string;
};

export type TravelImageItem = {
  id: number;
  image: ImageSourcePropType | undefined;
};

export const travelInfoItems: TravelInfoItemProps[] = [
  {
    id: 1,
    title: 'Mountain',
    title2: 'Trek',
    accentColor: appColors.redOrange,

    description:
      'Hiking on a mountain blends physical challenge with natural beauty, offering sweeping views.',

    gallery: [
      { id: 1, image: require('./images/image003.jpg') },
      { id: 2, image: require('./images/image006.jpg') },
      { id: 3, image: require('./images/image002.jpg') },
    ],
  },
  {
    id: 2,
    title: 'Beach',
    title2: 'Surf',
    accentColor: appColors.blue001,
    description:
      'Relaxing on a beach combines calm and fun, letting you soak up the sun and feel the waves.',

    gallery: [
      { id: 1, image: require('./images/beach001.jpg') },
      { id: 2, image: require('./images/beach002.jpg') },
      { id: 3, image: require('./images/beach003.jpg') },
    ],
  },
  {
    id: 3,
    title: 'City',
    title2: 'Buzz',
    accentColor: appColors.purple001,
    description:
      'Exploring a city immerses you in culture and energy, with lively streets and endless sights.',

    gallery: [
      { id: 1, image: require('./images/city001.jpg') },
      { id: 2, image: require('./images/city002.jpg') },
      { id: 3, image: require('./images/city003.jpg') },
    ],
  },
  {
    id: 4,
    title: 'Desert',
    title2: 'Dune',
    accentColor: appColors.yellow001,
    description:
      'Venturing into the desert offers adventure and solitude, with vast sands and golden sunsets.',

    gallery: [
      { id: 1, image: require('./images/desert001.jpg') },
      { id: 2, image: require('./images/desert002.jpg') },
      { id: 3, image: require('./images/desert003.jpg') },
    ],
  },
  {
    id: 5,
    title: 'Forest',
    title2: 'Path',
    accentColor: appColors.green001,
    description:
      'Walking through a forest connects you with nature, revealing hidden trails and lush greenery.',

    gallery: [
      { id: 1, image: require('./images/forest001.jpg') },
      { id: 2, image: require('./images/forest002.jpg') },
      { id: 3, image: require('./images/forest003.jpg') },
    ],
  },
];
