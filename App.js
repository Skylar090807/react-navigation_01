import 'react-native-gesture-handler'
import React from 'react'
import { StyleSheet, Text, useColorScheme, View } from 'react-native'

const App = () => {
  const isDarkMode = useColorScheme() === 'dark'

  return (
    <View>
      <Text>App.js</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
})

export default App
