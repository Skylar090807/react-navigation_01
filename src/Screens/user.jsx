import { StyleSheet, Text, Button, Alert, Linking } from 'react-native'
import React from 'react'
import { Container } from '../../styles/style'
import UserLogo from '../components/userlogo'

const User = ({ navigation, route }) => {
  const { params } = route
  const userIdx = params ? params.userIdx : null
  const userName = params ? params.userName : null
  const userLastName = params ? params.userLastName : null

  const headerBarStyle = () => {
    navigation.setOptions({
      title: 'User Screen in User.jsx',
      // Header Bar Style
      headerStyle: { backgroundColor: 'lightblue' },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
        color: '#fff',
      },

      // Add Button (버튼을 터치하면 router가 이동된다)
      headerRight: () => (
        <Button
          title="Go Home"
          onPress={() => navigation.navigate('Home')}
          color="#fff"
        />
      ),
      // icon 넣기
      drawerIcon: () => <UserLogo />,
    })
  }

  headerBarStyle()
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
