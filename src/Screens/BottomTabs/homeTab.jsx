import { View, Text, Image } from 'react-native'
import React from 'react'
import { Container, TextStyle } from '../../../styles/style'

const HomeTab = () => {
  return (
    <Container>
      <View>
        <Image
          style={{ width: 400, height: 400 }}
          source={{
            uri: 'https://picsum.photos/400/400?grayscale',
          }}
        />
      </View>
      <TextStyle>Home</TextStyle>
    </Container>
  )
}

export default HomeTab
