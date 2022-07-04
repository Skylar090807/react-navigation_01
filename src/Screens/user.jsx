import { StyleSheet, Text, Button } from 'react-native'
import React from 'react'
import { Container } from '../../styles/style'

const User = ({ navigation, route }) => {
  const { params } = route
  const userIdx = params ? params.userIdx : null
  const userName = params ? params.userName : null
  const userLastName = params ? params.userLastName : null

  return (
    <Container>
      <Text>User Screen</Text>
      <Button
        title="Go To Home Screen"
        onPress={() => {
          navigation.navigate('Home')
        }}
      />
      <Text>User Index : {JSON.stringify(userIdx)}</Text>
      <Text>User Name : {userName}</Text>
      <Text>User Last Name : {userLastName}</Text>
    </Container>
  )
}

export default User

const styles = StyleSheet.create({})
