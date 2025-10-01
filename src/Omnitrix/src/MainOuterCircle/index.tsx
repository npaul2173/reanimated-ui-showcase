import { View } from 'react-native';
import MainOuterCircleSvg from '../../svgs/watchElements/mainOuterCircle.svg';
import { WATCH_SIZE } from '../screen';

export const MainOuterCircle: React.FC = () => {
  return (
    <View
      style={{
        pointerEvents: 'none',
        position: 'absolute',

        zIndex: 9,
        backgroundColor: 'wheat',
      }}
    >
      <MainOuterCircleSvg width={WATCH_SIZE} height={WATCH_SIZE} />
    </View>
  );
};
