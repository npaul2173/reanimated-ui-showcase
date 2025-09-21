import { StatusBar } from 'react-native';
import LeaderBoardScreen from './LeaderBoardScreen';
import { appColors } from './constants';

const AppContainer = () => {
  return (
    <>
      <StatusBar
        backgroundColor={appColors.orange}
        barStyle={'light-content'}
      />
      <LeaderBoardScreen />
    </>
  );
};

export default AppContainer;
