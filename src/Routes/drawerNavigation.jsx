import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Home from '../Screens/home'
import User from '../Screens/user'

import { createDrawerNavigator } from '@react-navigation/drawer'

const Drawer = createDrawerNavigator()

const DrawerNavigation = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="User" component={User} />
    </Drawer.Navigator>
  )
}

export default DrawerNavigation
