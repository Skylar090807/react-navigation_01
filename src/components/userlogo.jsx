import { Image } from 'react-native'
import React from 'react'
import user from '../assets/images/user_512px.png'

const UserLogo = ({ sourcePath }) => {
  return <Image style={{ width: 20, height: 20 }} source={user} />
}

export default UserLogo
