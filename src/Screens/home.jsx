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
      <Button
        title="Change the Title!"
        // navigation.setOptions에 title을 설정. onPress 이벤트가 발생하면 title 변경.
        onPress={() => {
          navigation.setOptions({
            title: 'Changed Title -> Home',
            // Header Bar Style
            headerStyle: { backgroundColor: 'purple' },
            headerTintColor: '#fff',
          })
        }}
      />
    </Container>
  )
}

export default Home

const styles = StyleSheet.create({})
