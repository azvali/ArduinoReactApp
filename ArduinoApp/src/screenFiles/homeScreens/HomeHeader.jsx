import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { BleManager } from 'react-native-ble-plx';
import { PermissionsAndroid } from 'react-native';


const manager = new BleManager();


async function requestBluetoothPermission() {
  const granted = await PermissionsAndroid.request(
    PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
    {
      'title': 'Bluetooth Permission',
      'message': 'This app needs access to your location for Bluetooth scanning.'
    }
  );

  if (granted === PermissionsAndroid.RESULTS.GRANTED) {
    console.log('You can use the Bluetooth features');
  } else {
    console.log('Bluetooth permission denied');
  }
}

// Call this function before starting the BLE scan



function HomeHeader() {
    const [textPlaceholder, setTextPlaceholder] = useState('');

    useEffect(() => {
        // Place any initialization code for BLE here, if needed

        // Return a cleanup function to stop scanning and destroy the manager
        return () => {
            manager.stopDeviceScan();
            manager.destroy();
        };
    }, []);

    function connectArduino() {

        requestBluetoothPermission();

        
        const serviceUUID = '12345678-1234-1234-1234-123456789012';
        const characteristicUUID = '87654321-4321-4321-4321-210987654321';

        // Start scanning for devices with the specified service UUID
        manager.startDeviceScan([serviceUUID], null, (error, device) => {
            if (error) {
                console.error(error);
                return;
            }

            if (device) {
                console.log(`Device found: ${device.name}`);
                manager.stopDeviceScan();

                device.connect()
                    .then(device => {
                        console.log("Successfully connected to the device!");
                        return device.discoverAllServicesAndCharacteristics();
                    })
                    .then(device => {
                        console.log("Services and characteristics discovered!");
                        return device.services();
                    })
                    .then(services => {
                        const service = services.find(s => s.uuid === serviceUUID);
                        return service.characteristics();
                    })
                    .then(characteristics => {
                        const characteristic = characteristics.find(c => c.uuid === characteristicUUID);
                        if (!characteristic) {
                            throw new Error('Characteristic not found');
                        }
                        return characteristic.monitor((error, characteristic) => {
                            if (error) {
                                console.error(error);
                                return;
                            }
                            if (characteristic?.value) {
                                const value = Buffer.from(characteristic.value, 'base64').toString('utf-8');
                                console.log('Received:', value);
                                setTextPlaceholder(value); // Display the received value
                            }
                        });
                    })
                    .catch(error => {
                        console.error('Connection error:', error);
                    });
            }
        });
    }

    return (
        <View style={styles.page_container}>
            <View style={styles.header_container}>
                <Text style={styles.text_container}>{textPlaceholder}</Text>
            </View>
            <View style={styles.button_container}>
                <Button title="Connect" onPress={connectArduino} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    page_container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    header_container: {
        width: '100%',
        height: '30%',
        backgroundColor: '#a3ffb4',
        justifyContent: 'center',
        alignItems: 'center',
    },
    text_container: {
        fontSize: 36,
        color: '#000000',
        fontWeight: 'bold',
    },
    button_container: {
        marginTop: 20,
    }
});

export default HomeHeader;
