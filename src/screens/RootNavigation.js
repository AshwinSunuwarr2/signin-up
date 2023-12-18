import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AuthNavigation from './LoginSignup/authNavigation';

const RootNavigation = () => {
    return (
        <NavigationContainer>
            <AuthNavigation />
        </NavigationContainer>
    )
}

export default RootNavigation