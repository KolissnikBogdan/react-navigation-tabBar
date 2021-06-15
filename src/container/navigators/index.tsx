import { NavigationContainer } from '@react-navigation/native';
import React, { useState } from 'react';

import Drawer from './Drawer';
import Auth from './Auth';

const RootNavigator = () => {
  const [userToken, setUserToken] = useState('a');

  return (
    <NavigationContainer>
      {userToken ? <Drawer /> : <Auth />}
    </NavigationContainer>
  );
};

export default RootNavigator;
