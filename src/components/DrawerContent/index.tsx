import React from 'react';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import {
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
  Switch,
  Image,
} from 'react-native';

import Section from '../Section';

import { IRoute } from 'models/navigation';

import Home from '../icons/Home';
import { Typography } from '../../styles';
import { onPress } from '../../utils/functions';
import SignOut from '../../components/icons/SignOut';

const DrawerContent = ({ state, navigation, descriptors }: any) => {
  const { routes } = state;
  return (
    <View style={styles.container}>
      <DrawerContentScrollView>
        <View style={[styles.flexWrap, styles.padding]}>
          <Image
            source={require('../../assets/images/avatar.png')}
            style={styles.image}
          />
          <View>
            <Text>Bohdan Kolisnuk</Text>
            <Text style={styles.colorOpaity}>@bohdanKolisnuk</Text>
          </View>
        </View>
        <View style={[styles.padding, styles.flexWrap]}>
          <View style={{ flexDirection: 'row' }}>
            <Text style={{ ...Typography.defaltBoldFont }}>80</Text>
            <Text style={styles.colorOpaity}> Following</Text>
          </View>
          <View style={{ flexDirection: 'row' }}>
            <Text style={{ ...Typography.defaltBoldFont }}>100</Text>
            <Text style={styles.colorOpaity}> Followers</Text>
          </View>
        </View>
        <Section borderStyle={styles.border}>
          {routes
            .filter((el: IRoute) => el.name !== 'SingOut')
            .map((el: IRoute, index: number) => {
              const isFocused = state.index === index;

              return (
                <TouchableWithoutFeedback
                  key={el.key}
                  onPress={() => onPress(navigation, el, isFocused)}
                >
                  <DrawerItem
                    label={el.name}
                    onPress={() => onPress(navigation, el, isFocused)}
                    pressColor="white"
                    icon={() => <Home />}
                    labelStyle={{ ...Typography.defaltBoldFont }}
                  />
                </TouchableWithoutFeedback>
              );
            })}
        </Section>
        <Section
          borderStyle={styles.bottomBorder}
          containerStyle={styles.padding}
        >
          <Text style={[styles.colorOpaity, { ...Typography.defaltBoldFont }]}>
            Preferences
          </Text>
          <View style={styles.switch}>
            <Text style={{ ...Typography.defaltBoldFont }}>Dark Theme</Text>
            <Switch />
          </View>
        </Section>
      </DrawerContentScrollView>
      <Section borderStyle={styles.border}>
        <DrawerItem
          label="Sing Out"
          onPress={() =>
            onPress(
              navigation,
              routes.find((el: IRoute) => el.name === 'SingOut'),
              false,
            )
          }
          icon={() => <SignOut />}
          pressColor="red"
          labelStyle={{ ...Typography.defaltBoldFont }}
        />
      </Section>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    paddingVertical: 5,
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 100,
    marginRight: 10,
  },
  flexWrap: { flexDirection: 'row', alignItems: 'center' },
  padding: {
    paddingHorizontal: 20,
    paddingVertical: 8,
  },
  topBorder: {
    borderTopWidth: 1,
  },
  colorOpaity: {
    color: 'rgba(0, 0, 0, 0.4)',
    marginRight: 10,
  },
  switch: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    paddingVertical: 5,
  },
  bottomBorder: {
    borderBottomWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.1)',
  },
  border: {
    borderColor: 'rgba(0, 0, 0, 0.1)',
    borderBottomWidth: 1,
    borderTopWidth: 1,
  },
});

export default DrawerContent;
