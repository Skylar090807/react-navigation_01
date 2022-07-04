import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Home from '../Screens/home'
import User from '../Screens/user'

import { createNativeStackNavigator } from '@react-navigation/native-stack'

const Stack = createNativeStackNavigator()

const StackNavigation = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="User" component={User} />
    </Stack.Navigator>
  )
}

export default StackNavigation

const styles = StyleSheet.create({})
