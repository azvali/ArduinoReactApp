import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ActivityIndicator, Modal, Animated, Easing } from 'react-native';

const HomeHeader = () => {
  const [num, setNum] = useState('');
  const [warning, setWarning] = useState('');
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState('');
  const [modalVisible, setModalVisible] = useState(false);

  const handlePress = () => {
    setLoading(true);
    setModalVisible(true);
    setTimeout(() => {
      const numericValue = parseFloat(num);

      if (numericValue > 10) {
        setWarning('Warning: The input value exceeds the allowed limit.');
        setStatus('red');
      } else if (numericValue > 5) {
        setWarning('Meh: The input value is moderate.');
        setStatus('yellow');
      } else {
        setWarning('Everything is good.');
        setStatus('green');
      }

      setLoading(false);
    }, 2000);
  };

  const handleCloseWarning = () => {
    setWarning('');
    setStatus('');
    setModalVisible(false);
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
      <Modal
        transparent={true}
        visible={modalVisible}
        onRequestClose={handleCloseWarning}
      >
        <View style={styles.modal_overlay}>
          <View style={styles.modal_container}>
            {loading ? (
              <ActivityIndicator size="large" color="#0000ff" />
            ) : (
              <View style={styles.result_container}>
                <Text style={styles.warning}>{warning}</Text>
                <BarGraph status={status} />
                <Button title="Close" onPress={handleCloseWarning} />
              </View>
            )}
          </View>
        </View>
      </Modal>
    </View>
  );
};

const BarGraph = ({ status }) => {
  const [barHeight1] = useState(new Animated.Value(0));
  const [barHeight2] = useState(new Animated.Value(0));
  const [barHeight3] = useState(new Animated.Value(0));

  useEffect(() => {
    const animateBars = () => {
      Animated.sequence([
        Animated.timing(barHeight1, { toValue: 100, duration: 500, easing: Easing.ease, useNativeDriver: false }),
        Animated.timing(barHeight1, { toValue: 50, duration: 500, easing: Easing.ease, useNativeDriver: false }),
        Animated.timing(barHeight2, { toValue: 100, duration: 500, easing: Easing.ease, useNativeDriver: false }),
        Animated.timing(barHeight2, { toValue: 50, duration: 500, easing: Easing.ease, useNativeDriver: false }),
        Animated.timing(barHeight3, { toValue: 100, duration: 500, easing: Easing.ease, useNativeDriver: false }),
        Animated.timing(barHeight3, { toValue: 50, duration: 500, easing: Easing.ease, useNativeDriver: false }),
        Animated.parallel([
          Animated.timing(barHeight1, { toValue: status === 'red' ? 100 : 30, duration: 500, easing: Easing.ease, useNativeDriver: false }),
          Animated.timing(barHeight2, { toValue: status === 'yellow' ? 100 : 30, duration: 500, easing: Easing.ease, useNativeDriver: false }),
          Animated.timing(barHeight3, { toValue: status === 'green' ? 100 : 30, duration: 500, easing: Easing.ease, useNativeDriver: false }),
        ]),
      ]).start();
    };

    animateBars();
  }, [status, barHeight1, barHeight2, barHeight3]);

  const colors = {
    green: ['#a8e063', '#56ab2f'], // Gradient for green
    yellow: ['#f6d365', '#fda085'], // Gradient for yellow
    red: ['#f85032', '#e73827'], // Gradient for red
  };

  const renderBar = (height, colors) => (
    <Animated.View style={[styles.bar, { height }, { backgroundColor: colors[0], shadowColor: colors[1] }]}>
      <View style={{ flex: 1, borderRadius: 15, backgroundColor: 'transparent' }} />
    </Animated.View>
  );

  return (
    <View style={styles.bar_graph}>
      {renderBar(barHeight1, colors.red)}
      {renderBar(barHeight2, colors.yellow)}
      {renderBar(barHeight3, colors.green)}
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
  modal_overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modal_container: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
    width: '80%',
  },
  result_container: {
    alignItems: 'center',
  },
  warning: {
    color: 'red',
    fontSize: 16,
    marginBottom: 10,
  },
  bar_graph: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'flex-end',
    height: 100,
    width: '80%',
    marginBottom: 20,
  },
  bar: {
    width: 30,
    borderRadius: 15,
    marginHorizontal: 10,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
  },
});

export default HomeHeader;
