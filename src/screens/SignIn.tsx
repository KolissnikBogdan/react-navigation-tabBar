import React from 'react';
import { Text, View, Button, StyleSheet } from 'react-native';

import { Grid } from '../styles';

const SignIn = ({ navigation }: any) => {
  console.log(navigation);
  return (
    <View style={styles.container}>
      <View>
        <Text>Login</Text>
      </View>
      <View>
        <Text>Password</Text>
      </View>

      <Button
        title="Go to Home sub screen"
        onPress={() => {
          navigation.navigate('Home', {
            screen: 'Settings',
            params: { name: 'test sub screen' },
          });
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...Grid.defaltContainer,
  },
});

export default SignIn;
