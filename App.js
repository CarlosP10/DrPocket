/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import {
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import Navigator from '@routes';
import React from 'react';

const App = () => {
  return (
    <SafeAreaView style={styles.style}>
      <StatusBar translucent barStyle="light-content" />
      <Navigator />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  style: {
    flex: 1,
    backgroundColor:'black',
    height: StatusBar.currentHeight,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
});

export default App;
