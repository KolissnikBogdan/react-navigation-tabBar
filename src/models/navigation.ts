import { DrawerNavigationProp } from '@react-navigation/drawer';
import { StackNavigationProp } from '@react-navigation/stack';

type StackParamList = {
  default: undefined;
  Intro: { userId: string };
  Temp: undefined;
  StackNavigator: undefined;
  DrawerNavigator: undefined;
  BottomTabNavigator: undefined;
  MaterialBottomTabNavigator: undefined;
  MaterialTopTabNavigator: undefined;
};

export type DefaultNavigationProps<T extends keyof StackParamList> =
  StackNavigationProp<StackParamList, T>;

export type DefaultDrawerNavigationProps<T extends keyof StackParamList> =
  DrawerNavigationProp<StackParamList, T>;

export interface IRoute {
  key: string;
  name: string;
  params: any;
  state?: IRouteState;
}

interface IRouteState {
  index: number;
  key: string;
  routeNames: string[];
  routes: IRouteState[];
  stale: boolean;
  type: string;
}
