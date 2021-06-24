import ScaleTouchable from '../../components/Scale';
import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

import { Grid, Buttons, Spaces } from '../../styles';

const Home = ({ navigation }: any) => {
  return (
    <View style={styles.container}>
      <ScaleTouchable
        onPress={() => navigation.navigate('Settings', { name: 'test props' })}
      >
        <View style={styles.button}>
          <Text>Settings with props</Text>
        </View>
      </ScaleTouchable>
      <ScaleTouchable onPress={() => navigation.toggleDrawer()}>
        <View style={styles.button}>
          <Text>Open drawer</Text>
        </View>
      </ScaleTouchable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...Grid.defaltContainer,
  },
  button: {
    backgroundColor: 'orange',
    ...Spaces.btnMargin,
    ...Buttons.smallRounded,
  },
});

export default Home;
