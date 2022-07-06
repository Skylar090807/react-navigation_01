import 'react-native-gesture-handler'
import React from 'react'
import { StyleSheet, Text, useColorScheme, View } from 'react-native'

import { NavigationContainer } from '@react-navigation/native'

import StackNavigation from './src/Routes/stackNavigation'
import DrawerNavigation from './src/Routes/drawerNavigation'
import BottomTabsNavigation from './src/Routes/bottomTabsNavigation'

const App = () => {
  return (
    <NavigationContainer>
      {/* <StackNavigation /> */}
      {/* <DrawerNavigation /> */}
      <BottomTabsNavigation />
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({})

export default App
