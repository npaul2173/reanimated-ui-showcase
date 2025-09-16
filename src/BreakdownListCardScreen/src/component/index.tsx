import { useEffect, useState } from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';
import { useSharedValue } from 'react-native-reanimated';
import { BreakDownDataProps } from '../constants';
import { Body } from './body';
import { Header } from './header';
const { width: appWidth } = Dimensions.get('screen');

export const AnimatedBreakdownList: React.FC<{
  data: BreakDownDataProps[];
}> = ({ data }) => {
  // This shared value is the core value that handles the state of the animation.
  const sharedExpanded = useSharedValue(0);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    sharedExpanded.value = expanded ? 1 : 0;
  }, [expanded, sharedExpanded]); // runs after every expanded change

  const toggle = () => setExpanded(prev => !prev);
  //   Determines the total width that it will be using
  const uiViewWidth = appWidth * 0.85;

  return (
    <View
      style={[
        styles.container,
        {
          width: uiViewWidth,
        },
      ]}
    >
      <Header expanded={expanded} toggle={toggle} />
      <Body
        sharedExpanded={sharedExpanded}
        uiViewWidth={uiViewWidth}
        data={data}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
  },
});
