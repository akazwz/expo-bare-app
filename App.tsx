import React from 'react'
import AppLoading from 'expo-app-loading'
import { useFonts as useSansSC, NotoSansSC_500Medium } from '@expo-google-fonts/noto-sans-sc'
import { useFonts as useSerifSC, NotoSerifSC_500Medium } from '@expo-google-fonts/noto-serif-sc'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeScreen from './src/screens/Home'
import VideoScreen from './src/screens/Video'
import { useColorScheme } from 'react-native'

const Tab = createBottomTabNavigator()

export default function App() {
  const isDark = useColorScheme() === 'dark'

  let [fontsSansSCLoaded] = useSansSC({ NotoSansSC_500Medium })
  let [fontsSerifSCLoaded] = useSerifSC({ NotoSerifSC_500Medium })

  // load fonts
  if (!fontsSansSCLoaded || !fontsSerifSCLoaded) {
    return <AppLoading />
  }

  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={({ route }) => ({
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'grey',
        tabBarStyle: {
          backgroundColor: isDark ? 'black' : 'white',
        },
      })}>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerStyle: {
              backgroundColor: isDark ? 'black' : 'white',
            },
            headerTitleStyle: {
              color: isDark ? 'white' : 'black',
            },
          }}
        />
        <Tab.Screen
          name="Video"
          component={VideoScreen}
          options={{
            headerStyle: {
              backgroundColor: isDark ? 'black' : 'white',
            },
            headerTitleStyle: {
              color: isDark ? 'white' : 'black',
            },
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  )
}
