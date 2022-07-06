import { Text, View } from 'react-native'
import React from 'react'
import HomeTab from '../Screens/BottomTabs/homeTab'
import BookingTab from '../Screens/BottomTabs/bookingTab'
import SettingsTab from '../Screens/BottomTabs/settingsTab'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

const Tab = createBottomTabNavigator()

const BottomTabsNavigation = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home Tab" component={HomeTab} />
      <Tab.Screen name="Booking Tab" component={BookingTab} />
      <Tab.Screen name="Settings Tab" component={SettingsTab} />
    </Tab.Navigator>
  )
}

export default BottomTabsNavigation
