import { StatusBar } from 'expo-status-bar';
import { StyleSheet, SafeAreaView } from 'react-native';
import React, { useState } from 'react';
import User from './components/User';
import LoginHead from './components/LoginHead';

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <SafeAreaView style={styles.container}>
      {isLoggedIn ? <User /> : <LoginHead onLogin={handleLogin} />}
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    flex: 1,
    backgroundColor: '#E0E7D8',
  },
});
