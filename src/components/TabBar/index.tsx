import React, { useMemo } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

import TabShape from './Shape';
import Profile from '../../components/icons/Profile';
import Home from '../../components/icons/Home';
import ScaleTouchable from '../../components/Scale';

import { IRoute } from 'models/navigation';

import { TABS_HEIGHT, width } from '../../utils/constants';

import { Grid } from '../../styles';

const TabBar = ({ state, descriptors, navigation }: any) => {
  const { routes } = state;

  const tabWidth = useMemo(
    () => width / state.routes.length,
    [state.routes.length],
  );

  const getIcon = (name: string) => {
    switch (name) {
      case 'Screen1': {
        return <Profile />;
      }
      case 'Screen2': {
        return <Profile />;
      }
      case 'Screen4': {
        return <Profile />;
      }
      case 'Screen5': {
        return <Home />;
      }
      default:
        break;
    }

    return null;
  };

  const getText = (name: string) => {
    return <Text style={styles.textContainer}>{name}</Text>;
  };

  return (
    <View style={{ width }}>
      <TabShape {...{ tabWidth }} />
      <View style={styles.container}>
        {routes.map((tab: IRoute, index: number) => {
          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: tab.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(tab.name);
            }
          };
          if (index === Math.floor(routes.length / 2)) {
            return (
              <View
                key={index}
                style={styles.buttonWrap}
                pointerEvents="box-none"
              >
                <TouchableOpacity style={styles.button} onPress={onPress} />
              </View>
            );
          }

          return (
            <ScaleTouchable key={index} onPress={onPress}>
              <View style={[styles.tabContent, { width: tabWidth }]}>
                {getIcon(tab.name)}
                {getText(tab.name)}
              </View>
            </ScaleTouchable>
          );
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: width,
    position: 'absolute',
    top: -TABS_HEIGHT,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  buttonWrap: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  button: {
    top: -22.5,
    ...Grid.flex,
    width: 50,
    height: 50,
    borderRadius: 27,
    backgroundColor: '#E94F37',
  },
  textContainer: {
    color: 'black',
  },
  tabContent: {
    ...Grid.flex,
    flexDirection: 'column',
    height: TABS_HEIGHT,
  },
});

export default TabBar;
