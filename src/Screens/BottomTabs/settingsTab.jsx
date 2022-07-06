import { View, Text, Image } from 'react-native'
import React from 'react'
import { Container, TextStyle } from '../../../styles/style'

const SettingsTab = () => {
  return (
    <Container>
      <View>
        <Image
          style={{ width: 400, height: 400 }}
          source={{
            uri: 'https://picsum.photos/400/400?blur=3',
          }}
        />
      </View>
      <TextStyle>Settings</TextStyle>
    </Container>
  )
}

export default SettingsTab
