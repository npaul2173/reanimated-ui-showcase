export const appColors = {
  orange: '#FF591B',
  orange002: '#FF7B48',
  white: '#FFFFFF',
  black: '#000000',
  wheat: '#fde7daff',
  wheatDark: '#fddfcfff',
};

export type TopLeaderDataProps = {
  id: string;
  name: string;
  points: number;
  position: number;
  profilePicture: any;
};

export type PlayerStat = {
  id: string;
  name: string;
  points: number;
  state: 'down' | 'up';
  position: number;
  profilePicture: any;
};

export const PADDING_HORIZONTAL_CONTAIN = 16;
export const TOTAL_POINTS = 500;

export const weeklyPlayerStats: PlayerStat[] = [
  {
    id: 'msir8274',
    name: 'Lydia Price',
    points: 413,
    position: 4,
    profilePicture: require('./images/user009.png'),
    state: 'up',
  },
  {
    id: 'msir8275',
    name: 'Ethan Cole',
    points: 512,
    position: 5,
    profilePicture: require('./images/user005.png'),
    state: 'down',
  },
  {
    id: 'msir8276',
    name: 'Sophia Turner',
    points: 389,
    position: 6,
    profilePicture: require('./images/user008.png'),
    state: 'up',
  },
  {
    id: 'msir8277',
    name: 'Caleb Scott',
    points: 452,
    position: 7,
    profilePicture: require('./images/user007.png'),
    state: 'down',
  },
  {
    id: 'msir8278',
    name: 'Ava Mitchell',
    points: 367,
    position: 8,
    profilePicture: require('./images/user006.png'),
    state: 'up',
  },
  {
    id: 'msir8279',
    name: 'Noah Davis',
    points: 298,
    position: 9,
    profilePicture: require('./images/user003.png'),
    state: 'down',
  },
  {
    id: 'msir8280',
    name: 'Isabella Reed',
    points: 435,
    position: 10,
    profilePicture: require('./images/user004.png'),
    state: 'up',
  },
  {
    id: 'msir8281',
    name: 'Mason Wright',
    points: 512,
    position: 11,
    profilePicture: require('./images/user001.png'),
    state: 'down',
  },
  {
    id: 'msir8282',
    name: 'Olivia Green',
    points: 478,
    position: 12,
    profilePicture: require('./images/user002.png'),
    state: 'up',
  },
  {
    id: 'msir8283',
    name: 'James Carter',
    points: 354,
    position: 13,
    profilePicture: require('./images/user007.png'),
    state: 'down',
  },
];

export const allTimePlayerStats: PlayerStat[] = [
  {
    id: 'alps9001',
    name: 'William Hughes',
    points: 1820,
    position: 4,
    profilePicture: require('./images/user009.png'),
    state: 'up',
  },
  {
    id: 'alps9002',
    name: 'Emily Bennett',
    points: 1765,
    position: 5,
    profilePicture: require('./images/user001.png'),
    state: 'down',
  },
  {
    id: 'alps9003',
    name: 'Alexander Murphy',
    points: 1652,
    position: 6,
    profilePicture: require('./images/user002.png'),
    state: 'up',
  },
  {
    id: 'alps9004',
    name: 'Charlotte Foster',
    points: 1598,
    position: 7,
    profilePicture: require('./images/user003.png'),
    state: 'up',
  },
  {
    id: 'alps9005',
    name: 'Benjamin Ross',
    points: 1524,
    position: 8,
    profilePicture: require('./images/user004.png'),
    state: 'down',
  },
  {
    id: 'alps9006',
    name: 'Amelia Morgan',
    points: 1487,
    position: 9,
    profilePicture: require('./images/user005.png'),
    state: 'up',
  },
  {
    id: 'alps9007',
    name: 'Daniel Hayes',
    points: 1390,
    position: 10,
    profilePicture: require('./images/user006.png'),
    state: 'down',
  },
  {
    id: 'alps9008',
    name: 'Mia Patterson',
    points: 1312,
    position: 11,
    profilePicture: require('./images/user007.png'),
    state: 'up',
  },
  {
    id: 'alps9009',
    name: 'Henry Ward',
    points: 1278,
    position: 12,
    profilePicture: require('./images/user008.png'),
    state: 'down',
  },
  {
    id: 'alps9010',
    name: 'Grace Phillips',
    points: 1205,
    position: 13,
    profilePicture: require('./images/user009.png'),
    state: 'up',
  },
];

export const yearlyPlayerStats: PlayerStat[] = [
  {
    id: 'llpp3333',
    name: 'Lydia Price',
    points: 225,
    position: 4,
    profilePicture: require('./images/user004.png'),
    state: 'up',
  },
  {
    id: 'hhhh7777',
    name: 'Lydia Price',
    points: 410,
    position: 5,
    profilePicture: require('./images/user005.png'),
    state: 'down',
  },
  {
    id: 'dduu9922',
    name: 'Mary clark',
    points: 311,
    profilePicture: require('./images/user006.png'),
    state: 'up',
    position: 6,
  },
];

export const allTimeTopLeaderData: TopLeaderDataProps[] = [
  {
    id: 'mk98sh73',
    name: 'Lois Parker',
    points: 311,
    position: 2,
    profilePicture: require('./images/user001.png'),
  },
  {
    id: 'msir8274',
    name: 'Lydia Price',
    points: 413,
    position: 1,
    profilePicture: require('./images/user002.png'),
  },
  {
    id: 'pwid9572',
    name: 'Mary clark',
    points: 227,
    position: 3,
    profilePicture: require('./images/user003.png'),
  },
];
export const WeeklyTopLeaderData: TopLeaderDataProps[] = [
  {
    id: 'wkld9831',
    name: 'Ethan Carter',
    points: 300,
    position: 2,
    profilePicture: require('./images/user004.png'),
  },
  {
    id: 'wkld9832',
    name: 'Sophia Johnson',
    points: 450,
    position: 1,
    profilePicture: require('./images/user005.png'),
  },
  {
    id: 'wkld9833',
    name: 'Mason Lee',
    points: 250,
    position: 3,
    profilePicture: require('./images/user006.png'),
  },
];

export const yearlyTopLeaderData: TopLeaderDataProps[] = [
  {
    id: 'yrld1091',
    name: 'Lydia Price',
    points: 399,
    position: 2,
    profilePicture: require('./images/user002.png'),
  },
  {
    id: 'yrld1092',
    name: 'Ethan Carter',
    points: 410,
    position: 1,
    profilePicture: require('./images/user004.png'),
  },
  {
    id: 'yrld1093',
    name: 'Sophia Johnson',
    points: 200,
    position: 3,
    profilePicture: require('./images/user005.png'),
  },
];
