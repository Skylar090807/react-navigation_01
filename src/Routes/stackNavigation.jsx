import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Home from '../Screens/home'
import User from '../Screens/user'

import { createNativeStackNavigator } from '@react-navigation/native-stack'

const Stack = createNativeStackNavigator()

const StackNavigation = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={Home}
        // Screen Title Init
        options={{
          title: 'Home Screen Init',
        }}
      />
      <Stack.Screen
        name="User"
        component={User}
        // Stack.Navigator에서 initialRouteName="User"로 설정 후 route 생성 시 initialParams를 사용해 Params를 초기화
        initialParams={{
          userIdx: 200,
          userName: 'Alexis',
          userLastName: 'Joe',
        }}
      />
    </Stack.Navigator>
  )
}

export default StackNavigation

const styles = StyleSheet.create({})
