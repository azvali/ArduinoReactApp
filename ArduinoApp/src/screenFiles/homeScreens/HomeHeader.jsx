import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const HomeHeader = () => {
  const [num, setNum] = useState('');
  const [warning, setWarning] = useState('');

  const handlePress = () => {
    const numericValue = parseFloat(num);

    if (numericValue > 10) {
      setWarning('Warning: The input value exceeds the allowed limit.');
    } else {
      setWarning('Everything is good.');
    }
  };

  const handleCloseWarning = () => {
    setWarning('');
  };

  return (
    <View style={styles.page_container}>
      <View style={styles.header_container}>
        <Text style={styles.text_container}>Enter a number below:</Text>
      </View>
      <View style={styles.button_container}>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          value={num}
          onChangeText={(value) => setNum(value)}
        />
        <Button title="Enter" onPress={handlePress} />
      </View>
      {warning ? (
        <View style={styles.warning_overlay}>
          <View style={styles.warning_container}>
            <Text style={styles.warning}>{warning}</Text>
            <Button title="Close" onPress={handleCloseWarning} />
          </View>
        </View>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  page_container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header_container: {
    marginBottom: 20,
  },
  text_container: {
    fontSize: 18,
  },
  button_container: {
    width: '80%',
    alignItems: 'center',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    width: '100%',
  },
  warning_overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  warning_container: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  warning: {
    color: 'red',
    fontSize: 16,
    marginBottom: 10,
  },
});

export default HomeHeader;
