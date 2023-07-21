import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomeScreen from '../screens/OnBoarding/WelcomeScreen';
import LoginScreen from '../screens/OnBoarding/LoginScreen';
import SignUpScreen from '../screens/OnBoarding/SignUpScreen';
import OTPScreen from '../screens/OnBoarding/OTPScreen';
import VerificationScreen from '../screens/Verification/VerificationScreen';

const Stack = createNativeStackNavigator();


export default function AppNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Welcome'>
        <Stack.Screen name="Verification" options={{headerShown: false}} component={VerificationScreen} />
        <Stack.Screen name="Welcome" options={{headerShown: false}} component={WelcomeScreen} />
        <Stack.Screen name="Login" options={{headerShown: false}} component={LoginScreen} />
        <Stack.Screen name="SignUp" options={{headerShown: false}} component={SignUpScreen} />
        <Stack.Screen name="OTP" options={{headerShown: false}} component={OTPScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}