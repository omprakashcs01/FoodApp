import { View, Text } from 'react-native'
import React from 'react'

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/Home';
import SearchScreen from './src/screens/SearchScreen';
import ResultShowScreen from './src/screens/ResultShowScreen';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='SearchScreen'>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name='SearchScreen' component={SearchScreen}/>
      <Stack.Screen name='ResultShowScreen' component={ResultShowScreen}/>

      
      
        </Stack.Navigator>
    </NavigationContainer>
  );
}