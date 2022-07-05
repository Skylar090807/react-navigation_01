import { StyleSheet, Image } from 'react-native'
import React from 'react'
import HomeIcon from '../assets/images/home_black_512px.png'

const ImageComponent = () => {
  return (
    // <Image
    //   style={{ width: 40, height: 40 }}
    //   source={require('../assets/images/home_black_512px.png')}
    // />
    <Image style={{ width: 40, height: 40 }} source={HomeIcon} />
  )
}

export default ImageComponent

const styles = StyleSheet.create({})
