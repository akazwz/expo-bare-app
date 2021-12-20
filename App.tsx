import React from 'react'
import AppLoading from 'expo-app-loading'
import { useFonts as useSansSC, NotoSansSC_500Medium } from '@expo-google-fonts/noto-sans-sc'
import { useFonts as useSerifSC, NotoSerifSC_500Medium } from '@expo-google-fonts/noto-serif-sc'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeScreen from './src/screens/Home'
import VideoScreen from './src/screens/Video'

const Tab = createBottomTabNavigator()

export default function App() {
  let [fontsSansSCLoaded] = useSansSC({ NotoSansSC_500Medium })
  let [fontsSerifSCLoaded] = useSerifSC({ NotoSerifSC_500Medium })

  if (!fontsSansSCLoaded || !fontsSerifSCLoaded) {
    return <AppLoading />
  }

  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Video" component={VideoScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}
