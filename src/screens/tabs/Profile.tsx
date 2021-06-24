import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import CircularSlider from '../../components/CircularSlider';

import { Grid } from '../../styles';

const Profile = () => {
  const [value, setValue] = useState(50);

  return (
    <View style={styles.container}>
      <View>
        <CircularSlider
          value={value}
          onChange={(value: any) => setValue(value)}
          contentContainerStyle={styles.contentContainerStyle}
          buttonBorderColor="blue"
          buttonFillColor="orange"
          buttonStrokeWidth={10}
          buttonRadius={10}
          linearGradient={[
            { stop: '0%', color: 'blue' },
            { stop: '100%', color: 'orange' },
          ]}
        >
          <Text style={styles.value}>{value}</Text>
        </CircularSlider>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...Grid.defaltContainer,
  },
  contentContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  value: {
    fontWeight: '500',
    fontSize: 32,
    color: '#3FE3EB',
  },
});

export default Profile;
