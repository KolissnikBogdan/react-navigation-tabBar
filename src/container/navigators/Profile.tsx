import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Profile from '../../screens/tabs/Profile';

const ProfileStackScreen = () => {
  const ProfileStack = createStackNavigator();

  return (
    <ProfileStack.Navigator>
      <ProfileStack.Screen name="Profile" component={Profile} />
    </ProfileStack.Navigator>
  );
};

export default ProfileStackScreen;
