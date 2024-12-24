import React from 'react';
import { Text, StyleSheet } from 'react-native';

const CenterText = () => {
  return (
    <Text style={styles.text}>DINDA</Text>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 24,
    color: 'blue',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default CenterText;