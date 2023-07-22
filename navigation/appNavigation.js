import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomeScreen from '../screens/OnBoarding/WelcomeScreen';
import LoginScreen from '../screens/OnBoarding/LoginScreen';
import SignUpScreen from '../screens/OnBoarding/SignUpScreen';
import OTPScreen from '../screens/OnBoarding/OTPScreen';
import VerificationScreen from '../screens/Verification/VerificationScreen';
import Address from '../screens/Verification/address';
import UploadDoc from '../screens/Verification/uploadDoc';
import Identity from '../screens/Verification/identity';
import Success from '../screens/Verification/success';
import HomeScreen from '../screens/Tabs/HomeScreen';
import TabNavigation from './tabNavigation';

const Stack = createNativeStackNavigator();


export default function AppNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Tab'>
        
        <Stack.Screen name="Welcome" options={{headerShown: false}} component={WelcomeScreen} />
        <Stack.Screen name="Login" options={{headerShown: false}} component={LoginScreen} />
        <Stack.Screen name="SignUp" options={{headerShown: false}} component={SignUpScreen} />
        <Stack.Screen name="OTP" options={{headerShown: false}} component={OTPScreen} />
        <Stack.Screen name="Verification" options={{headerShown: false}} component={VerificationScreen} />
        <Stack.Screen name="Address" options={{headerShown: false}} component={Address}  />
        <Stack.Screen name="Identity" options={{headerShown: false}} component={Identity} />
        <Stack.Screen name="UploadDoc" options={{headerShown: false}} component={UploadDoc}  />
        <Stack.Screen name="Success" options={{headerShown: false}} component={Success}  />
        <Stack.Screen name="Tab" options={{headerShown: false}} component={TabNavigation}  />
      </Stack.Navigator>
    </NavigationContainer>
  )
}