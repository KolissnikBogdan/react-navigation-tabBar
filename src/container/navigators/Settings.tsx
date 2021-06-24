import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Settings from '../../screens/tabs/Settings';

const SettingsStackScreen = () => {
  const SettinsStack = createStackNavigator();

  return (
    <SettinsStack.Navigator>
      <SettinsStack.Screen name="Profile" component={Settings} />
    </SettinsStack.Navigator>
  );
};

export default SettingsStackScreen;
