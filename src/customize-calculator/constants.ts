export const appColors = {
  white: '#FFFFFF',
  black: '#000000',
  // Text colors
  darkGray: '#333333',
  lightGray: '#666666',
  // Background colors
  creamBackground: '#F5F5DC',
};

export const BUTTON_SIZE = 55;

export type CalculatorThemeKey = 'base' | 'secondary' | 'tertiary';

export interface ThemePalette {
  backgroundColor: string;
  buttonColor: string;
  buttonTextColor: string;
  buttonBorderColor: string | null;
}

export interface CalculatorTheme {
  id: string;
  name: string;
  theme: {
    base: ThemePalette;
    secondary: ThemePalette;
    tertiary: ThemePalette;
    textColor: string;
  };
}

export const calculatorThemes: CalculatorTheme[] = [
  {
    id: 'marine',
    name: 'Marine',
    theme: {
      base: {
        backgroundColor: '#01425D',
        buttonColor: '#0A5C7A',
        buttonTextColor: '#FFFFFF',
        buttonBorderColor: null,
      },
      secondary: {
        backgroundColor: '#0F4C5C',
        buttonColor: '#127C8D',
        buttonTextColor: '#FFFFFF',
        buttonBorderColor: '#0B2C3D',
      },
      tertiary: {
        backgroundColor: '#1A8F90',
        buttonColor: '#20B2AA',
        buttonTextColor: '#FFFFFF',
        buttonBorderColor: null,
      },
      textColor: '#E7F6F2',
    },
  },
  {
    id: 'ice-burst',
    name: 'Ice Burst',
    theme: {
      base: {
        backgroundColor: '#E0FBFC',
        buttonColor: '#CBF3F0',
        buttonTextColor: '#005662',
        buttonBorderColor: null,
      },
      secondary: {
        backgroundColor: '#98C1D9',
        buttonColor: '#8EC2F5',
        buttonTextColor: '#0F1C3F',
        buttonBorderColor: '#6DAED9',
      },
      tertiary: {
        backgroundColor: '#3D5A80',
        buttonColor: '#2F3E64',
        buttonTextColor: '#FFFFFF',
        buttonBorderColor: '#1D2C45',
      },
      textColor: '#1D2D44',
    },
  },
  {
    id: 'lava',
    name: 'Lava',
    theme: {
      base: {
        backgroundColor: '#3D0000',
        buttonColor: '#5C0000',
        buttonTextColor: '#FFB347',
        buttonBorderColor: null,
      },
      secondary: {
        backgroundColor: '#7E0000',
        buttonColor: '#C21807',
        buttonTextColor: '#FFE9C6',
        buttonBorderColor: '#9F1D16',
      },
      tertiary: {
        backgroundColor: '#F6511D',
        buttonColor: '#FFB400',
        buttonTextColor: '#3D0000',
        buttonBorderColor: '#CC5801',
      },
      textColor: '#FFE9C6',
    },
  },
  {
    id: 'game-boy',
    name: 'Game Boy',
    theme: {
      base: {
        backgroundColor: '#CBD18F',
        buttonColor: '#A3B18A',
        buttonTextColor: '#2E2F2F',
        buttonBorderColor: null,
      },
      secondary: {
        backgroundColor: '#6B705C',
        buttonColor: '#4A4E69',
        buttonTextColor: '#F2E9E4',
        buttonBorderColor: null,
      },
      tertiary: {
        backgroundColor: '#22223B',
        buttonColor: '#9B9B7A',
        buttonTextColor: '#F2E9E4',
        buttonBorderColor: null,
      },
      textColor: '#22223B',
    },
  },
  {
    id: 'sunset',
    name: 'Sunset',
    theme: {
      base: {
        backgroundColor: '#FFE1A8',
        buttonColor: '#FFD4A1',
        buttonTextColor: '#7B3F00',
        buttonBorderColor: '#FFBB70',
      },
      secondary: {
        backgroundColor: '#FF9F1C',
        buttonColor: '#FF7F11',
        buttonTextColor: '#FFFFFF',
        buttonBorderColor: '#D16002',
      },
      tertiary: {
        backgroundColor: '#FF6F59',
        buttonColor: '#D94E41',
        buttonTextColor: '#FFECD6',
        buttonBorderColor: '#B52A2A',
      },
      textColor: '#7B3F00',
    },
  },
  {
    id: 'neon-night',
    name: 'Neon Night',
    theme: {
      base: {
        backgroundColor: '#1F1D36',
        buttonColor: '#2E294E',
        buttonTextColor: '#E0DEF7',
        buttonBorderColor: '#5A4E7A',
      },
      secondary: {
        backgroundColor: '#541388',
        buttonColor: '#9039D0',
        buttonTextColor: '#FFFFFF',
        buttonBorderColor: '#341050',
      },
      tertiary: {
        backgroundColor: '#FF6F91',
        buttonColor: '#FF9671',
        buttonTextColor: '#1F1D36',
        buttonBorderColor: '#E15F82',
      },
      textColor: '#E0DEF7',
    },
  },
  {
    id: 'forest-glow',
    name: 'Forest Glow',
    theme: {
      base: {
        backgroundColor: '#2D4739',
        buttonColor: '#4C8C4A',
        buttonTextColor: '#F6FFF8',
        buttonBorderColor: '#1E2D24',
      },
      secondary: {
        backgroundColor: '#6BA368',
        buttonColor: '#9BD77A',
        buttonTextColor: '#1E2D24',
        buttonBorderColor: '#3C6D3A',
      },
      tertiary: {
        backgroundColor: '#F0F757',
        buttonColor: '#F9F871',
        buttonTextColor: '#2D4739',
        buttonBorderColor: '#E3E445',
      },
      textColor: '#EFF6E0',
    },
  },
  {
    id: 'polar',
    name: 'Polar',
    theme: {
      base: {
        backgroundColor: '#F7FBFF',
        buttonColor: '#D6E8EE',
        buttonTextColor: '#2F4858',
        buttonBorderColor: '#ADCEDC',
      },
      secondary: {
        backgroundColor: '#8ECAE6',
        buttonColor: '#219EBC',
        buttonTextColor: '#FFFFFF',
        buttonBorderColor: '#126782',
      },
      tertiary: {
        backgroundColor: '#023047',
        buttonColor: '#035477',
        buttonTextColor: '#E0FBFC',
        buttonBorderColor: '#011B2E',
      },
      textColor: '#023047',
    },
  },
  {
    id: 'candy',
    name: 'Candy',
    theme: {
      base: {
        backgroundColor: '#FFE5F1',
        buttonColor: '#FFB3C6',
        buttonTextColor: '#7F1D1D',
        buttonBorderColor: '#FF8FAB',
      },
      secondary: {
        backgroundColor: '#FFC6FF',
        buttonColor: '#CC99FF',
        buttonTextColor: '#3A0CA3',
        buttonBorderColor: '#B769E2',
      },
      tertiary: {
        backgroundColor: '#90F1EF',
        buttonColor: '#56CBF9',
        buttonTextColor: '#042A2B',
        buttonBorderColor: '#2BB5F7',
      },
      textColor: '#711F39',
    },
  },
  {
    id: 'charcoal',
    name: 'Charcoal',
    theme: {
      base: {
        backgroundColor: '#2B2D42',
        buttonColor: '#4B4E6D',
        buttonTextColor: '#EDF2F4',
        buttonBorderColor: '#1C1E32',
      },
      secondary: {
        backgroundColor: '#8D99AE',
        buttonColor: '#ADB5BD',
        buttonTextColor: '#2B2D42',
        buttonBorderColor: '#6C757D',
      },
      tertiary: {
        backgroundColor: '#EF233C',
        buttonColor: '#FF5964',
        buttonTextColor: '#FFFFFF',
        buttonBorderColor: '#C1121F',
      },
      textColor: '#EDF2F4',
    },
  },
  {
    id: 'aurora',
    name: 'Aurora',
    theme: {
      base: {
        backgroundColor: '#0D1B2A',
        buttonColor: '#1B263B',
        buttonTextColor: '#E0FBFC',
        buttonBorderColor: '#415A77',
      },
      secondary: {
        backgroundColor: '#415A77',
        buttonColor: '#778DA9',
        buttonTextColor: '#0D1B2A',
        buttonBorderColor: '#E0FBFC',
      },
      tertiary: {
        backgroundColor: '#F4D35E',
        buttonColor: '#EE964B',
        buttonTextColor: '#0D1B2A',
        buttonBorderColor: '#F95738',
      },
      textColor: '#E0FBFC',
    },
  },
  {
    id: 'retro-wave',
    name: 'Retro Wave',
    theme: {
      base: {
        backgroundColor: '#0B0033',
        buttonColor: '#1F005C',
        buttonTextColor: '#F7F7FF',
        buttonBorderColor: '#5D0E8B',
      },
      secondary: {
        backgroundColor: '#7A04EB',
        buttonColor: '#B91372',
        buttonTextColor: '#0B0033',
        buttonBorderColor: '#FF5DA2',
      },
      tertiary: {
        backgroundColor: '#FF3F81',
        buttonColor: '#FF7EB3',
        buttonTextColor: '#0B0033',
        buttonBorderColor: '#FFB5E8',
      },
      textColor: '#F7F7FF',
    },
  },
  {
    id: 'desert-rose',
    name: 'Desert Rose',
    theme: {
      base: {
        backgroundColor: '#F4E1D2',
        buttonColor: '#F1C0B9',
        buttonTextColor: '#8C4646',
        buttonBorderColor: '#C38E70',
      },
      secondary: {
        backgroundColor: '#C38E70',
        buttonColor: '#B36A5E',
        buttonTextColor: '#F4E1D2',
        buttonBorderColor: '#8C4646',
      },
      tertiary: {
        backgroundColor: '#6B2737',
        buttonColor: '#A23E48',
        buttonTextColor: '#F4E1D2',
        buttonBorderColor: '#44191E',
      },
      textColor: '#6B2737',
    },
  },
  {
    id: 'fresh-mint',
    name: 'Fresh Mint',
    theme: {
      base: {
        backgroundColor: '#E2FADB',
        buttonColor: '#C4F1BE',
        buttonTextColor: '#1B4332',
        buttonBorderColor: '#95D5B2',
      },
      secondary: {
        backgroundColor: '#95D5B2',
        buttonColor: '#74C69D',
        buttonTextColor: '#0B3B2E',
        buttonBorderColor: '#40916C',
      },
      tertiary: {
        backgroundColor: '#52B788',
        buttonColor: '#40916C',
        buttonTextColor: '#E2FADB',
        buttonBorderColor: '#1B4332',
      },
      textColor: '#1B4332',
    },
  },
  {
    id: 'velvet-night',
    name: 'Velvet Night',
    theme: {
      base: {
        backgroundColor: '#1E152A',
        buttonColor: '#3D1E6D',
        buttonTextColor: '#F1E3F3',
        buttonBorderColor: '#5C2E7E',
      },
      secondary: {
        backgroundColor: '#5C2E7E',
        buttonColor: '#7F4D9A',
        buttonTextColor: '#F8F0FB',
        buttonBorderColor: '#A06CD5',
      },
      tertiary: {
        backgroundColor: '#D499B9',
        buttonColor: '#EFC3E6',
        buttonTextColor: '#1E152A',
        buttonBorderColor: '#B56576',
      },
      textColor: '#F1E3F3',
    },
  },
  {
    id: 'citrus-zest',
    name: 'Citrus Zest',
    theme: {
      base: {
        backgroundColor: '#FFF4E0',
        buttonColor: '#FFE0AC',
        buttonTextColor: '#5A3412',
        buttonBorderColor: '#FFC26F',
      },
      secondary: {
        backgroundColor: '#FFB347',
        buttonColor: '#FF8C42',
        buttonTextColor: '#FFF4E0',
        buttonBorderColor: '#E8751A',
      },
      tertiary: {
        backgroundColor: '#FF5E00',
        buttonColor: '#FF9500',
        buttonTextColor: '#1B0B02',
        buttonBorderColor: '#CC4E00',
      },
      textColor: '#5A3412',
    },
  },
  {
    id: 'midnight-teal',
    name: 'Midnight Teal',
    theme: {
      base: {
        backgroundColor: '#001219',
        buttonColor: '#005F73',
        buttonTextColor: '#E9D8A6',
        buttonBorderColor: '#0A9396',
      },
      secondary: {
        backgroundColor: '#0A9396',
        buttonColor: '#94D2BD',
        buttonTextColor: '#001219',
        buttonBorderColor: '#E9D8A6',
      },
      tertiary: {
        backgroundColor: '#BB3E03',
        buttonColor: '#CA6702',
        buttonTextColor: '#FFF3B0',
        buttonBorderColor: '#AE2012',
      },
      textColor: '#E9D8A6',
    },
  },
  {
    id: 'pearl-slate',
    name: 'Pearl Slate',
    theme: {
      base: {
        backgroundColor: '#F5F5F5',
        buttonColor: '#E0E0E0',
        buttonTextColor: '#2F2F2F',
        buttonBorderColor: '#B0B0B0',
      },
      secondary: {
        backgroundColor: '#C5C5C5',
        buttonColor: '#9E9E9E',
        buttonTextColor: '#FFFFFF',
        buttonBorderColor: '#7E7E7E',
      },
      tertiary: {
        backgroundColor: '#4A4A4A',
        buttonColor: '#2C2C2C',
        buttonTextColor: '#FFFFFF',
        buttonBorderColor: '#1A1A1A',
      },
      textColor: '#2F2F2F',
    },
  },
  {
    id: 'hibiscus',
    name: 'Hibiscus',
    theme: {
      base: {
        backgroundColor: '#FFF0F6',
        buttonColor: '#FFC2E0',
        buttonTextColor: '#7A1E48',
        buttonBorderColor: '#FF8EC7',
      },
      secondary: {
        backgroundColor: '#FF66B2',
        buttonColor: '#E64398',
        buttonTextColor: '#FFF0F6',
        buttonBorderColor: '#C02276',
      },
      tertiary: {
        backgroundColor: '#6A0572',
        buttonColor: '#3E065F',
        buttonTextColor: '#FFE6F7',
        buttonBorderColor: '#2B0342',
      },
      textColor: '#3E065F',
    },
  },
];

export type ButtonType = 'operator' | 'digit' | 'null';

export type CalculatorButton = {
  type: ButtonType;
  themeType: CalculatorThemeKey;
  value: string;
};

export const buttonLayout: CalculatorButton[][] = [
  [
    { type: 'operator', themeType: 'secondary', value: 'AC' },
    { type: 'digit', themeType: 'base', value: '7' },
    { type: 'digit', themeType: 'base', value: '8' },
    { type: 'digit', themeType: 'base', value: '9' },
    { type: 'operator', themeType: 'tertiary', value: '÷' },
  ],
  [
    { type: 'operator', themeType: 'secondary', value: '%' },
    { type: 'digit', themeType: 'base', value: '4' },
    { type: 'digit', themeType: 'base', value: '5' },
    { type: 'digit', themeType: 'base', value: '6' },
    { type: 'operator', themeType: 'tertiary', value: '×' },
  ],
  [
    { type: 'operator', themeType: 'secondary', value: '±' },
    { type: 'digit', themeType: 'base', value: '1' },
    { type: 'digit', themeType: 'base', value: '2' },
    { type: 'digit', themeType: 'base', value: '3' },
    { type: 'operator', themeType: 'tertiary', value: '-' },
  ],
  [
    { type: 'digit', themeType: 'base', value: '0' },
    { type: 'null', themeType: 'base', value: '' },
    { type: 'digit', themeType: 'base', value: '.' },
    { type: 'operator', themeType: 'secondary', value: '=' },
    { type: 'operator', themeType: 'tertiary', value: '+' },
  ],
];
