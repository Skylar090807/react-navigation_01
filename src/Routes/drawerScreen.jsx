import React from 'react'

import { createDrawerNavigator } from '@react-navigation/drawer'
import SlideDrawer from './slideDrawer'
import MainScreen from './mainScreen'

const Drawer = createDrawerNavigator()

const DrawerScreen = () => {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      screenOptions={{
        drawerType: 'front',
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
      drawerContent={props => <SlideDrawer {...props} />}
    >
      <Drawer.Screen name="Route" component={MainScreen} />
    </Drawer.Navigator>
  )
}

export default DrawerScreen
