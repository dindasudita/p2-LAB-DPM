import React from 'react';
import { View, StyleSheet } from 'react-native';
import CenterText from './src/components/CenterText';
import BoxContainer from './src/components/BoxContainer';

const App = () => {
  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <CenterText />
        <BoxContainer />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
  contentContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
