import Forearms from '../svgs/aliens/forearms.svg';
import Spidermonkey from '../svgs/aliens/spidermonkey.svg';
import Heatblast from '../svgs/aliens/heatblast.svg';
import Alienx from '../svgs/aliens/alienx.svg';
import Bigchill from '../svgs/aliens/bigchill.svg';
import Ripjaws from '../svgs/aliens/ripjaws.svg';
import Swampfire from '../svgs/aliens/swampfire.svg';
import Xlr8 from '../svgs/aliens/xlr8.svg';
import Wildmutt from '../svgs/aliens/wildmutt.svg';
import { SvgProps } from 'react-native-svg';

export type AlienDataProps = {
  name: string;
  icon: React.FC<SvgProps>;
};
export const alienData: AlienDataProps[] = [
  {
    name: 'Forearms',
    icon: Forearms,
  },

  {
    name: 'Wildmutt',
    icon: Wildmutt,
  },

  {
    name: 'Bigchill',
    icon: Bigchill,
  },

  {
    name: 'Heatblast',
    icon: Heatblast,
  },

  {
    name: 'Swampfire',
    icon: Swampfire,
  },

  {
    name: 'Xlr8',
    icon: Xlr8,
  },

  {
    name: 'Ripjaws',
    icon: Ripjaws,
  },

  {
    name: 'Spider monkey',
    icon: Spidermonkey,
  },
  {
    name: 'AlienX',
    icon: Alienx,
  },
];
