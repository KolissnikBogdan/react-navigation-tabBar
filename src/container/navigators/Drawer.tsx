import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Profile from '../../screens/tabs/Profile';
import Tab from './Tab';
import DrawerContent from '../../components/DrawerContent';
import SignIn from '../../screens/SignIn';
import Settings from '../../screens/tabs/Settings';

const Drawer = () => {
  const SideMenu = createDrawerNavigator();

  return (
    <SideMenu.Navigator drawerContent={(props) => <DrawerContent {...props} />}>
      <SideMenu.Screen name="Profile" component={Profile} />
      <SideMenu.Screen name="Home" component={Tab} />
      <SideMenu.Screen name="Settings" component={Settings} />
      <SideMenu.Screen
        name="SingOut"
        component={SignIn}
        options={{ swipeEnabled: false }}
      />
    </SideMenu.Navigator>
  );
};

export default Drawer;
