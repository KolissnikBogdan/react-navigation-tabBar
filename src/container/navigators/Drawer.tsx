import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Profile from '../../screens/tabs/Profile';
import Tab from './Tab';

const Drawer = () => {
  const SideMenu = createDrawerNavigator();

  return (
    <SideMenu.Navigator>
      <SideMenu.Screen name="Profile" component={Profile} />
      <SideMenu.Screen name="Home" component={Tab} />
    </SideMenu.Navigator>
  );
};

export default Drawer;
