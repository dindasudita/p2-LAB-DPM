import React from 'react';
import { View, StyleSheet } from 'react-native';

const BoxContainer = () => {
  return (
    <View style={styles.container}>
      <View style={styles.kotak1} />
      <View style={styles.kotak2} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    position: 'absolute', 
  },
  kotak1: {
    width: 100,
    height: 100,
    backgroundColor: '#009625',
  },
  kotak2: {
    width: 100,
    height: 100,
    backgroundColor: '#d976fc',
  },
});

export default BoxContainer;