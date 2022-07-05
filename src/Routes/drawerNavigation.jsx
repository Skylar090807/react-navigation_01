import { Alert, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Home from '../Screens/home'
import User from '../Screens/user'
import GoogleLogo from '../components/googlelogo'
import ImageComponent from '../components/imageComponent'

import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer'

const Drawer = createDrawerNavigator()

const CutomDrawerContent = props => {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      {/*  ERROR  ReferenceError: Can't find variable: Linking */}
      <DrawerItem
        label="Google"
        // 터치 시 해당 URL로 이동
        // onPress={() => Linking.openURL('https://www.google.com')}
        // icon 넣기
        icon={() => <GoogleLogo />}
      />
      <DrawerItem
        label="Info"
        onPress={() => Alert.alert('This is Information')}
      />
    </DrawerContentScrollView>
  )
}

const DrawerNavigation = () => {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      screenOptions={{
        // Drawer Type
        drawerType: 'front',
        // drawerType: "back"
        // drawerType: 'slide',
        // drawerType: 'permanent',

        // Drawer Position 'right' | 'left'
        drawerPosition: 'left',

        // Drawer Style
        drawerStyle: {
          backgroundColor: '#c6cbef',
          width: 200,
        },
        drawerActiveTintColor: '#fff',
        drawerActiveBackgroundColor: 'lightblue',
      }}
      // drawerContent return: Function(React element to render as the content of the drawer)
      drawerContent={props => <CutomDrawerContent {...props} />}
    >
      <Drawer.Screen
        name="Home"
        component={Home}
        options={{
          // icon 넣기
          drawerIcon: () => <ImageComponent />,
        }}
      />
      <Drawer.Screen name="User" component={User} />
    </Drawer.Navigator>
  )
}

export default DrawerNavigation
