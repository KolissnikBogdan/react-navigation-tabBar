import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import Home from '../../screens/tabs/Home';
import Settings from '../../screens/tabs/Settings';

const HomeStackScreen = () => {
  const HomeStack = createStackNavigator();

  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Home" component={Home} />
      <HomeStack.Screen name="Settings" component={Settings} />
    </HomeStack.Navigator>
  );
};

export default HomeStackScreen;
