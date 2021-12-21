import { useColorScheme } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import AppLoading from 'expo-app-loading'
import { Ionicons } from '@expo/vector-icons'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { useFonts as useSansSC, NotoSansSC_500Medium } from '@expo-google-fonts/noto-sans-sc'
import { useFonts as useSerifSC, NotoSerifSC_500Medium } from '@expo-google-fonts/noto-serif-sc'
import HomeScreen from './src/screens/Home'
import VideoScreen from './src/screens/Video'
import SettingScreen from './src/screens/Setting'

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
      <StatusBar
        translucent={true}
        style={isDark ? 'light' : 'dark'}
      />
      <Tab.Navigator screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName
          switch (route.name) {
            case 'Home':
              iconName = focused
                ? 'ios-home'
                : 'ios-home-outline'
              break
            case 'Video':
              iconName = focused
                ? 'ios-videocam'
                : 'ios-videocam-outline'
              break
            case 'Setting':
              iconName = focused
                ? 'ios-settings'
                : 'ios-settings-outline'
              break
          }
          return <Ionicons name={iconName} size={size} color={color} />
        },
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
        <Tab.Screen
          name="Setting"
          component={SettingScreen}
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
