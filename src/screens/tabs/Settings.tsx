import React from 'react';
import { Button, Text, View } from 'react-native';

const SettingsScreen = ({ route, navigation }: any) => {
  return (
    <View>
      <Text>Settings screen</Text>
      {route.params.name && <Text>{route.params.name}</Text>}
    </View>
  );
};

export default SettingsScreen;
