import React from 'react'
import { StatusBar, Text, View, useColorScheme } from 'react-native'

const HomeScreen = () => {
  const isDark = useColorScheme() === 'dark'
  return (
    <View style={{ flex: 1, backgroundColor: isDark ? 'black' : 'white' }}>
      <StatusBar translucent={true} barStyle={isDark ? 'dark-content' : 'light-content'} />
      <Text style={{ color: isDark ? 'white' : 'black', fontFamily: 'NotoSerifSC_500Medium', fontSize: 40 }}>主页
        Home</Text>
    </View>
  )
}

export default HomeScreen
