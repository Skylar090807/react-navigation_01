import { View, Text, Image, Button } from 'react-native'
import React from 'react'
import { Container, TextStyle } from '../../../styles/style'

const HomeTab = ({ navigation, route }) => {
  // params passing 확인
  // console.warn(route)
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
      <Button
        title="Go To Stack Navigation Home"
        onPress={() => {
          navigation.navigate('Home_Stack')
        }}
      />
    </Container>
  )
}

export default HomeTab
