import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import EmptyScreen from '../../screens/tabs/EmptyScreen';

import TabBar from '../../components/TabBar';
import HomeStackScreen from './Home';
import ProfileStackScreen from './Profile';

const BottomBar = createBottomTabNavigator();

const Tab = () => (
  <BottomBar.Navigator
    tabBarOptions={{
      showLabel: false,
    }}
    tabBar={(props) => <TabBar {...props} />}
  >
    <BottomBar.Screen name="Screen1" component={HomeStackScreen} />
    <BottomBar.Screen name="Screen2" component={ProfileStackScreen} />
    <BottomBar.Screen name="Screen3" component={EmptyScreen} />
    <BottomBar.Screen name="Screen4" component={EmptyScreen} />
    <BottomBar.Screen name="Screen5" component={EmptyScreen} />
  </BottomBar.Navigator>
);

export default Tab;
