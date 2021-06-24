import React from 'react';
import { StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native';

import { Danger, Close } from '../components/icons';

const Toast = ({ hide, text }: any) => {
  return (
    <View style={styles.toast}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginRight: 15,
        }}
      >
        <Danger />
        <Text style={{ marginLeft: 10, color: '#fff' }}>{text}</Text>
      </View>
      <TouchableWithoutFeedback onPress={hide}>
        <Close />
      </TouchableWithoutFeedback>
    </View>
  );
};

const styles = StyleSheet.create({
  toast: {
    flexDirection: 'row',
    paddingHorizontal: 10,
    paddingVertical: 10,
    justifyContent: 'center',
    alignSelf: 'center',
    backgroundColor: '#da2244',
    marginHorizontal: 20,
    borderRadius: 5,
    overflow: 'hidden',
    alignItems: 'center',

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.4,
    shadowRadius: 15,
    elevation: 2,
    opacity: 0.99,
  },
});

export default Toast;
