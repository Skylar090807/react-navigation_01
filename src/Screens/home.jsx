import { StyleSheet, Text, Button } from 'react-native'
import React from 'react'
import { Container } from '../../styles/style'

const Home = ({ navigation }) => {
  return (
    <Container>
      <Text>Home Screen</Text>
      <Button
        title="Go To User Screen"
        onPress={() => {
          navigation.navigate('User', {
            userIdx: 100,
            userName: 'Skylar',
            userLastName: 'Choe',
          })
        }}
      />
    </Container>
  )
}

export default Home

const styles = StyleSheet.create({})
