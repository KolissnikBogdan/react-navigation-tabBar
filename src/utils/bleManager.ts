import { BleManager } from 'react-native-ble-plx';
import { BleError, Device } from 'react-native-ble-plx';
import { Base64 } from 'js-base64';

import { DeviceCharacteristic, servise } from '../utils/constants';

export class bluManager {
  ble: BleManager = new BleManager();
  onChangeStatus;
  onErr;

  constructor({
    onChangeStatus,
    onErr,
  }: {
    onChangeStatus(status: string): void;
    onErr(err: string): void;
  }) {
    this.onChangeStatus = onChangeStatus;
    this.onErr = onErr;
  }

  change = () => {
    this.ble.onStateChange(() => {
      const subscription = this.ble.onStateChange((state) => {
        this.onChangeStatus(state);
        if (state === 'PoweredOn') {
          subscription.remove();
        }
      }, true);
    }, true);
  };

  create = () => {
    this.ble = new BleManager();
  };

  restart = () => {
    this.ble.destroy();
    this.create();
  };

  scan = () => {
    this.ble.startDeviceScan(
      [servise],
      { allowDuplicates: false },
      (error: BleError | null, device: Device | null) => {
        if (error) {
          this.onErr(error.message);
          return;
        }
        this.onChangeStatus('Start scan');
        if (device && device.name === 'CELL_BLE') {
          this.ble.stopDeviceScan();
          this.onChangeStatus('Device is connected');
          device
            .connect({ timeout: 10000 })
            .then((needDevice) => {
              return needDevice.discoverAllServicesAndCharacteristics();
            })
            .then((res) => {
              res.characteristicsForService(servise).then((s) => {
                const device_characteristic = s.find(
                  (c) => c.uuid === DeviceCharacteristic,
                );
                if (device_characteristic) {
                  res.monitorCharacteristicForService(
                    device_characteristic.serviceUUID,
                    device_characteristic.uuid,
                    (error, charList) => {
                      if (error) {
                        this.onErr('Device is disconnect');
                      }
                      if (charList && charList.value) {
                        console.log(Base64.decode(charList.value));
                      }
                    },
                  );
                }
              });
            })
            .catch((err) => {
              this.onErr(err);
            });
        }
      },
    );
  };
}
