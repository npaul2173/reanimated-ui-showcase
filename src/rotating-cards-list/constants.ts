export const appColors = {
  white: '#FFFFFF',
  black: '#000000',
};

import type { RotatoryListItem } from './src/RotatoryList';

export const singersData: RotatoryListItem[] = [
  { singerName: 'A.R. Rahman', imageSource: require('./assets/images/arRahman.png'), uniqueID: 'rahman', backgroundColor: '#7C9152', fontColor: '#4e5f2fff' },
  { singerName: 'Eminem', imageSource: require('./assets/images/eminem.png'), uniqueID: 'eminem', backgroundColor: '#3B3B3B', fontColor: '#E7E7E7' },
  { singerName: 'Lady Gaga', imageSource: require('./assets/images/ladyGaga.png'), uniqueID: 'gaga', backgroundColor: '#C1A5C4', fontColor: '#2E1730' },
  { singerName: 'Jay Z', imageSource: require('./assets/images/JayZ.png'), uniqueID: 'jayz', backgroundColor: '#6AA2B8', fontColor: '#0F2C35' },
  { singerName: 'ODESZA', imageSource: require('./assets/images/odesza.png'), uniqueID: 'odesza', backgroundColor: '#cb7c47ff', fontColor: '#61422eff' },
  { singerName: 'Pritam', imageSource: require('./assets/images/pritam.png'), uniqueID: 'pritam', backgroundColor: '#9E8E6F', fontColor: '#2F291D' },
  { singerName: 'Tame Impala', imageSource: require('./assets/images/tameImpala.png'), uniqueID: 'tame', backgroundColor: '#7E9A9A', fontColor: '#132020' },
  { singerName: 'Chester', imageSource: require('./assets/images/chester.png'), uniqueID: 'chester', backgroundColor: '#8F8F8F', fontColor: '#1E1E1E' },
  { singerName: 'Charlie Puth', imageSource: require('./assets/images/charliePuth.png'), uniqueID: 'charlie', backgroundColor: '#B1A46A', fontColor: '#282313' },
  { singerName: 'Foster The People', imageSource: require('./assets/images/fosterThePeople.png'), uniqueID: 'ftp', backgroundColor: '#8FA3C6', fontColor: '#1A2433' },
  { singerName: 'DJ Snake', imageSource: require('./assets/images/dJSnake.png'), uniqueID: 'djsnake', backgroundColor: '#6E87B6', fontColor: '#0F1C33' },
  { singerName: 'Kumar Sanu', imageSource: require('./assets/images/kumarSanu.png'), uniqueID: 'sanu', backgroundColor: '#C2A47E', fontColor: '#2F2415' },
];
