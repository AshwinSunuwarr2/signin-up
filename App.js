import React from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity, StatusBar, TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import LoginScreen from './src/screens/LoginSignup/login';
import RootNavigation from './src/screens/RootNavigation';

export default function App() {
  return (
    // <WelcomeScreen />
    <RootNavigation />
  )
}

const styles = StyleSheet.create({

})