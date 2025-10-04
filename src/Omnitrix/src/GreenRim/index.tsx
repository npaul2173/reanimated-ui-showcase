import { View } from 'react-native';
import GreenRimSvg from '../../svgs/watchElements/greenRim.svg';
import { WATCH_SIZE } from '../screen';

const GREEN_RIM_SIZE = WATCH_SIZE * 0.75;
export const GreenRim: React.FC = () => {
  return (
    <View
      style={{
        pointerEvents: 'none',
        position: 'absolute',
        zIndex: 20,
        top: 0,
        left: 0,
        width: WATCH_SIZE,
        height: WATCH_SIZE,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <GreenRimSvg width={GREEN_RIM_SIZE} height={GREEN_RIM_SIZE} />
    </View>
  );
};
