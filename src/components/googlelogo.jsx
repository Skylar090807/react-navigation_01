import { Image } from 'react-native'
import React from 'react'
import google from '../assets/images/google_512px.png'

const GoogleLogo = ({ sourcePath }) => {
  return <Image style={{ width: 20, height: 20 }} source={google} />
}

export default GoogleLogo
