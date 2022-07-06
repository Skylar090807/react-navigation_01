import { View, Text, Image } from 'react-native'
import React from 'react'
import { Container, TextStyle } from '../../../styles/style'

const BookingTab = () => {
  return (
    <Container>
      <View>
        <Image
          style={{ width: 400, height: 400 }}
          source={{
            uri: 'https://picsum.photos/400/400?grayscale?blur=3',
          }}
        />
      </View>
      <TextStyle>Booking</TextStyle>
    </Container>
  )
}

export default BookingTab
