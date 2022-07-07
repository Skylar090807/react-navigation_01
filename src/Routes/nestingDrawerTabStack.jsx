/*
  Nesting Navigator 구조
    - Drawer Navigator A
      - Tab Navigator A-1
        - Tab Screen A-1-1
        - Tab Screen A-1-2
    - Stack Screen B
    - Stack Screen C
*/
import React from 'react'
import MainScreen from './mainScreen'
import HomeStack from '../Screens/home'

import { createNativeStackNavigator } from '@react-navigation/native-stack'

const Stack = createNativeStackNavigator()

const NestingDrawerTabNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Main" component={MainScreen} />
      <Stack.Screen name="Home_Stack" component={HomeStack} />
    </Stack.Navigator>
  )
}

export default NestingDrawerTabNavigator
