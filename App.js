import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import * as SplashScreen from 'expo-splash-screen'
// import SplashScreen from './components/splash/';
SplashScreen.preventAutoHideAsync()
setTimeout(SplashScreen.hideAsync, 500);

export default function App() {
  return (
    
    <View style={styles.container}>

      {/* <SplashScreen />   */}

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
