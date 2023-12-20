import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './login';
import WelcomeScreen from './welcome';
import SignupScreen from './signup';
import Home from '../../Home';

const Stack = createNativeStackNavigator();

const AuthNavigation = () => {
    return (
        <Stack.Navigator initialRouteName='welcomePage'>
            <Stack.Screen name='welcomePage' component={WelcomeScreen} options={{ headerShown: false }} />
            <Stack.Screen name='loginPage' component={LoginScreen} options={{ headerShown: false }} />
            <Stack.Screen name='signupPage' component={SignupScreen} options={{ headerShown: false }} />

            <Stack.Screen name='homePage' component={Home} options={{ headerShown: false }} />
        </Stack.Navigator>
    )
}
export default AuthNavigation;