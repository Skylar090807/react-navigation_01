import { Image } from 'react-native'
import React from 'react'

const TabBarImageIcon = ({ focused, name }) => {
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

export default TabBarImageIcon
