/*
  Nesting Navigator 구조 1
  
  Stack.Navigator
    - Tab Navigator A
      - Tab Screen A-1
      = Tab Screen A-2
      - Tab Screen A-3
    - Stack Screen B
    - Stack Screen C
*/

import React from 'react'
import MainScreen from './mainScreen'
import HomeStack from '../Screens/home'

import { createNativeStackNavigator } from '@react-navigation/native-stack'

const Stack = createNativeStackNavigator()

const NestingStackBottomTabNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Main" component={MainScreen} />
      <Stack.Screen name="Home_Stack" component={HomeStack} />
    </Stack.Navigator>
  )
}

export default NestingStackBottomTabNavigator
