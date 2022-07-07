import 'react-native-gesture-handler'
import React from 'react'

import { NavigationContainer } from '@react-navigation/native'

// import StackNavigation from './src/Routes/stackNavigation'
// import DrawerNavigation from './src/Routes/drawerNavigation'
import BottomTabsNavigation from './src/Routes/bottomTabsNavigation'

const App = () => {
  return (
    <NavigationContainer>
      {/* <StackNavigation /> */}
      {/* <DrawerNavigation /> */}
      <BottomTabsNavigation />
    </NavigationContainer>
  )
}

export default App
