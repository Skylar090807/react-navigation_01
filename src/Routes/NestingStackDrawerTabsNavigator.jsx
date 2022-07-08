/*
  Nesting Navigator 구조 2
  
  Stack.Navigator
    - Drawer Navigator A / Drawer Scrren 1, 2...
      - Tab Navigator A-1
        - Tab Screen A-1-1
        - Tab Screen A-1-2
    - Stack Screen B
    - Stack Screen C
*/
import React from 'react'
import MainScreen from './mainScreen'
import DrawerScreen from './drawerScreen'
import HomeStack from '../Screens/home'

import { createNativeStackNavigator } from '@react-navigation/native-stack'

const Stack = createNativeStackNavigator()

const NestingStackDrawerTabsNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Main" component={DrawerScreen} />
      <Stack.Screen name="Home_Stack" component={HomeStack} />
    </Stack.Navigator>
  )
}

export default NestingStackDrawerTabsNavigator
