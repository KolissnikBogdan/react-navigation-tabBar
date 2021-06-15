import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import SignIn from '../../screens/SignIn';

const Auth = () => {
  const AuthStack = createStackNavigator();

  return (
    <AuthStack.Navigator>
      <AuthStack.Screen name="SignIn" component={SignIn} />
      <AuthStack.Screen name="SignUp" component={SignIn} />
    </AuthStack.Navigator>
  );
};

export default Auth;
