import 'react-native-gesture-handler'
import React from 'react'
import { StyleSheet, Text, useColorScheme, View } from 'react-native'

import { NavigationContainer } from '@react-navigation/native'

import StackNavigation from './src/Routes/stackNavigation'

const App = () => {
  return (
    <NavigationContainer>
      <StackNavigation />
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({})

export default App
