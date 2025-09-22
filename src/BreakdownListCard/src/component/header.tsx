import { Pressable, Text, View } from 'react-native';
import { Feather } from '@react-native-vector-icons/feather';

export const Header: React.FC<{ toggle: () => void; expanded: boolean }> = ({
  toggle,
  expanded,
}) => {
  return (
    <View
      style={{
        padding: 16,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
      }}
    >
      <View>
        <Text>October 2024</Text>
        <Text
          style={{
            fontSize: 30,
            fontWeight: 700,
            color: '#222222',
            letterSpacing: -2,
          }}
        >
          $4,763
        </Text>
        <Text style={{ color: '#278c3cff', fontSize: 14, fontWeight: 500 }}>
          You spent 22% less than last month
        </Text>
      </View>
      <Pressable
        onPress={toggle}
        hitSlop={{ top: 40, left: 40, bottom: 40, right: 40 }}
      >
        <Feather name={expanded ? 'chevron-up' : 'chevron-down'} size={25} />
      </Pressable>
    </View>
  );
};
