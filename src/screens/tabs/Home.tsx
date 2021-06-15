import ScaleTouchable from '../../components/Scale';
import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

import { Grid, Buttons, Spaces } from '../../styles';

const Home = ({ navigation }: any) => {
  return (
    <View style={styles.container}>
      <Text>Home</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Settings', { name: 'test props' })}
      />
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
    backgroundColor: 'green',
  },
  button: {
    backgroundColor: 'red',
    ...Spaces.btnMargin,
    ...Buttons.smallRounded,
  },
});

export default Home;
