import React from 'react'
import HomeTab from '../Screens/BottomTabs/homeTab'
import BookingTab from '../Screens/BottomTabs/bookingTab'
import SettingsTab from '../Screens/BottomTabs/settingsTab'
import Ionicons from 'react-native-vector-icons/dist/Ionicons'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

const Tab = createBottomTabNavigator()

const TabBarVectorIcon = (focused, name) => {
  let IconName
  if (name === 'Home Tab') {
    IconName = focused ? 'home-sharp' : 'home-outline'
  } else if (name === 'Booking Tab') {
    IconName = focused ? 'calendar' : 'calendar-outline'
  } else if (name === 'Settings Tab') {
    IconName = focused ? 'settings' : 'settings-outline'
  }

  const iconSize = focused ? 30 : 20

  return <Ionicons name={IconName} size={iconSize} />
}

const MainScreen = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home Tab"
      screenOptions={({ route }) => ({
        tabBarLabel: route.name,
        // icon 전역으로 적용
        tabBarIcon: ({ focused }) => TabBarVectorIcon(focused, route.name),
        // Bottom Tabs Common Style
        tabBarActiveBackgroundColor: '#b3b0bb',
        tabBarInactiveBackgroundColor: '#fff',
        tabBarActiveTintColor: '#fff',
        tabBarInactiveTintColor: '#c2c2c2',
        tabBarStyle: {
          height: 100,
          backgroundColor: '#b3b0bb',
        },
        // tabBarLabelPosition: 'beside-icon',
      })}
    >
      <Tab.Screen name="Home Tab" component={HomeTab} />
      <Tab.Screen name="Booking Tab" component={BookingTab} />
      <Tab.Screen name="Settings Tab" component={SettingsTab} />
    </Tab.Navigator>
  )
}

export default MainScreen
