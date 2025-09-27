import { View } from 'react-native';
import { PADDING, WATCH_SIZE } from '../screen';
import GreenRimSvg from '../../svgs/watchElements/greenRim.svg';

export const GreenRim: React.FC = () => {
  return (
    <View
      style={{
        pointerEvents: 'none',
        position: 'absolute',
        zIndex: 10,
        top: PADDING + 20,
        left: PADDING + 40,
      }}
    >
      <GreenRimSvg width={WATCH_SIZE - 80} height={WATCH_SIZE - 80} />
    </View>
  );
};
