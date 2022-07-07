import 'react-native-gesture-handler'
import React from 'react'

import { NavigationContainer } from '@react-navigation/native'

// import StackNavigation from './src/Routes/stackNavigation'
// import DrawerNavigation from './src/Routes/drawerNavigation'
// import BottomTabsNavigation from './src/Routes/bottomTabsNavigation'
import NestingStackBottomTabNavigator from './src/Routes/nestingStackBottomTabNavigator'

const App = () => {
  return (
    <NavigationContainer>
      {/* <StackNavigation /> */}
      {/* <DrawerNavigation /> */}
      {/* <BottomTabsNavigation /> */}
      <NestingStackBottomTabNavigator />
    </NavigationContainer>
  )
}

export default App
