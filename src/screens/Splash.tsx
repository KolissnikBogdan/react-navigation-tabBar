import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import LottieView from 'lottie-react-native';
import { Grid } from '../styles';

interface ISplash {
  loading: boolean;
}

const Splash = ({ loading }: ISplash) => {
  return (
    <View style={styles.container}>
      <Text style={{ flex: 1 }}>Loading...</Text>
      <LottieView
        style={styles.lottie}
        source={require('./loading.json')}
        autoPlay
        autoSize
        loop
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...Grid.defaltContainer,
  },
  lottie: {
    width: 200,
    height: 200,
    alignSelf: 'center',
  },
});

export default Splash;
