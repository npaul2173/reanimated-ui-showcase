import { View } from 'react-native';
import { PADDING, WATCH_SIZE } from '../screen';
import MainOuterCircleSvg from '../../svgs/watchElements/mainOuterCircle.svg';

export const MainOuterCircle: React.FC = () => {
  return (
    <View
      style={{
        pointerEvents: 'none',
        position: 'absolute',
        top: 0,
        left: PADDING,
        zIndex: 9,
      }}
    >
      <MainOuterCircleSvg width={WATCH_SIZE} height={WATCH_SIZE} />
    </View>
  );
};
