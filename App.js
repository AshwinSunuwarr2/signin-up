import React from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity, StatusBar, TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import LoginScreen from './src/screens/LoginSignup/login';
import RootNavigation from './src/screens/RootNavigation';
import SignupScreen from './src/screens/LoginSignup/signup';

export default function App() {
  return (
    <RootNavigation />
  )
}

const styles = StyleSheet.create({

})