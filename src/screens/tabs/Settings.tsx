import React, { useEffect, useState, useRef } from 'react';
import { StyleSheet, TouchableWithoutFeedback } from 'react-native';
import { Text, View } from 'react-native';
import LottieView from 'lottie-react-native';

import ScaleTouchable from '../../components/Scale';
import PanComponent from '../../components/PanComponent';
import Toast from '../../components/Toast';

import { Buttons, Grid } from '../../styles';

import { bluManager } from '../../utils/bleManager';

const Settings = ({ route, navigation }: any) => {
  const [status, setStatus] = useState<string>('');
  const [err, setErr] = useState('');

  const ref = useRef<any>();
  const panRef = useRef<any>(null);

  const [manager] = useState(
    new bluManager({
      onChangeStatus: (value) => {
        setStatus(value);
        if (value === 'Device is connected') {
          setErr('');
          hideToast();
          ref.current.play();
        } else if (value === 'PoweredOff') {
          ref.current.reset();
        }
      },
      onErr: (error) => {
        setErr(error);
        showToast();
      },
    }),
  );

  const showToast = () => {
    panRef.current?.show();
  };
  const hideToast = () => {
    panRef.current?.hide();
  };

  const init = async () => {
    const res = await manager.ble.state();
    manager.change();
    if (res) {
      if (res === 'PoweredOff') {
        setErr('BluetoothLE is powered off ');
      }
      setStatus(res);
    }
  };

  useEffect(() => {
    init();
  }, []);

  const scanAndConnect = () => {
    manager.scan();
  };

  return (
    <View style={styles.container}>
      <PanComponent ref={panRef}>
        <Toast text={err} hide={hideToast} />
      </PanComponent>
      <ScaleTouchable outputRange={0.5} onPress={scanAndConnect}>
        <LottieView
          ref={ref}
          style={styles.lottie}
          source={require('./bluetooth.json')}
          autoSize
          loop
        />
      </ScaleTouchable>

      <View style={styles.textWrap}>
        <Text>{status}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...Grid.defaltContainer,
    backgroundColor: '#b8eeff',
  },
  button: {
    ...Buttons.smallRounded,
    backgroundColor: 'blue',
  },
  textWrap: {
    borderRadius: 50,
    borderWidth: 2,
    width: 300,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  lottie: {
    width: 200,
    height: 200,
    flexShrink: 1,
    padding: 0,
    margin: 0,
  },
});

export default Settings;
