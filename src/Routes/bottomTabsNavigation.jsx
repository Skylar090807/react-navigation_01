import { Image } from 'react-native'
import React from 'react'
import HomeTab from '../Screens/BottomTabs/homeTab'
import BookingTab from '../Screens/BottomTabs/bookingTab'
import SettingsTab from '../Screens/BottomTabs/settingsTab'
import HomeWhite from '../assets/images/home_white_512px.png'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

const Tab = createBottomTabNavigator()

const TabBarImageIcon = (focused, name) => {
  let ImageIconPath

  if (name === 'Home Tab') {
    ImageIconPath = focused
      ? require('../assets/images/home_black_512px.png')
      : require('../assets/images/home_white_512px.png')
  } else if (name === 'Booking Tab') {
    ImageIconPath = focused
      ? require('../assets/images/booking_black_512px.png')
      : require('../assets/images/booking_white_512px.png')
  } else if (name === 'Settings Tab') {
    ImageIconPath = focused
      ? require('../assets/images/settings_black_512px.png')
      : require('../assets/images/settings_white_512px.png')
  }

  return (
    <Image
      source={ImageIconPath}
      style={{ width: focused ? 30 : 20, height: focused ? 30 : 20 }}
    />
  )
}

const BottomTabsNavigation = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home Tab"
      screenOptions={({ route }) => ({
        tabBarLabel: route.name,
        // icon 전역으로 적용
        tabBarIcon: ({ focused }) => TabBarImageIcon(focused, route.name),
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
      <Tab.Screen
        name="Home Tab"
        component={HomeTab}
        options={
          {
            // 개별 icon 적용
            // tabBarIcon: () => (
            //   <Image source={HomeWhite} style={{ width: 20, height: 20 }} />
            // ),
          }
        }
      />
      <Tab.Screen name="Booking Tab" component={BookingTab} />
      <Tab.Screen name="Settings Tab" component={SettingsTab} />
    </Tab.Navigator>
  )
}

export default BottomTabsNavigation
