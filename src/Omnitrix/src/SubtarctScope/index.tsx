import { View } from 'react-native';
import { PADDING, WATCH_SIZE } from '../screen';
import SubtarctScopeSvg from '../../svgs/watchElements/subtarctScope.svg';

export const SubtarctScope: React.FC = () => {
  return (
    <View
      style={{
        pointerEvents: 'none',
        position: 'absolute',
        top: PADDING + 25,
        left: PADDING + 45,
        zIndex: 12,
      }}
    >
      <SubtarctScopeSvg width={WATCH_SIZE - 90} height={WATCH_SIZE - 90} />
    </View>
  );
};
