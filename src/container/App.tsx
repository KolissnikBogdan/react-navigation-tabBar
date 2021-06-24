import React, { useEffect, useState } from 'react';
import { StatusBar } from 'react-native';

import Splash from '../screens/Splash';

import RootNavigator from './navigators';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  return isLoading ? (
    <Splash loading={isLoading} />
  ) : (
    <>
      <StatusBar />
      <RootNavigator />
    </>
  );
};

export default App;
