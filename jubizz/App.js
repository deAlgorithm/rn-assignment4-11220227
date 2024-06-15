import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import React from 'react';
import User from './components/User';
import LoginHead from './components/LoginHead';
export default function App() {
  return (
    <View style={styles.container}>
      {/* <LoginHead/> */}
      <User />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    top: 50,
    flex: 1,
    backgroundColor: '#E0E7D8'
    
  },
});
