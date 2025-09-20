import { StatusBar } from 'react-native';
import StoryList from '.';

const AppContainer = () => {
  return (
    <>
      <StatusBar backgroundColor={'#111111'} barStyle={'light-content'} />
      <StoryList />
    </>
  );
};

export default AppContainer;
