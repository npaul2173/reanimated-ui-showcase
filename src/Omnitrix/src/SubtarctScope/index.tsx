import { View } from 'react-native';
import SubtarctScopeSvg from '../../svgs/watchElements/subtarctScope.svg';
import { WATCH_SIZE } from '../screen';

const SCOPE_SIZE = WATCH_SIZE * 0.7;

export const SubtarctScope: React.FC = () => {
  return (
    <View
      style={{
        pointerEvents: 'none',
        position: 'absolute',
        top: 0,
        left: 0,
        zIndex: 60,
        width: WATCH_SIZE,
        height: WATCH_SIZE,

        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <SubtarctScopeSvg width={SCOPE_SIZE} height={SCOPE_SIZE} />
    </View>
  );
};
