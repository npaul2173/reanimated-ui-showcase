import { View } from 'react-native';
import MainOuterCircleSvg from '../../svgs/watchElements/mainOuterCircle.svg';
import { WATCH_SIZE } from '../screen';

export const MainOuterCircle: React.FC = () => {
  return (
    <View
      style={{
        pointerEvents: 'none',
        position: 'absolute',
        top: 0,
        left: 0,
        zIndex: 10,
        width: WATCH_SIZE,
        height: WATCH_SIZE,
      }}
    >
      <MainOuterCircleSvg width={WATCH_SIZE} height={WATCH_SIZE} />
    </View>
  );
};
