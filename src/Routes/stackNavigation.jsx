import React from 'react'
import { Button, Alert } from 'react-native'
import Home from '../Screens/home'
import User from '../Screens/user'
import ImageComponent from '../components/imageComponent'

import { createNativeStackNavigator } from '@react-navigation/native-stack'

const Stack = createNativeStackNavigator()

const StackNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerStyle: { backgroundColor: '#ececec' },
        headerTintColor: '#000',
        headerTitleStyle: {
          fontWeight: 'bold',
          color: '#000',
        },
      }}
    >
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          // Screen Title Init
          title: 'Home Screen Init',

          // ImageComponent에 선언 된 image headerTitle에 삽입
          headerTitle: () => <ImageComponent />,

          // Header Bar Style Init
          headerStyle: { backgroundColor: 'lightpink' },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
            color: '#fff',
          },

          // Add Button
          headerRight: () => (
            <Button
              title="info"
              onPress={() => Alert.alert('This is Information')}
              color="#fff"
            />
          ),
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
