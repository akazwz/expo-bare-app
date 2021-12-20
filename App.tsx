import React from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import { Video } from 'expo-av'
import AppLoading from 'expo-app-loading'
import { useFonts as useSansSC, NotoSansSC_500Medium } from '@expo-google-fonts/noto-sans-sc'
import { useFonts as useSerifSC, NotoSerifSC_500Medium } from '@expo-google-fonts/noto-serif-sc'
import HomeScreen from './src/screens/Home'
import VideoScreen from './src/screens/Video'

export default function App() {
  let [fontsSansSCLoaded] = useSansSC({ NotoSansSC_500Medium })
  let [fontsSerifSCLoaded] = useSerifSC({ NotoSerifSC_500Medium })

  if (!fontsSansSCLoaded || !fontsSerifSCLoaded) {
    return <AppLoading />
  }

  return (
    <ScrollView style={styles.container}>
      <Text>Let us watch tv!</Text>
      <Text style={{ fontFamily: 'NotoSansSC_500Medium', fontSize: 40 }}>一起看电视</Text>
      <Text style={{ fontFamily: 'NotoSerifSC_500Medium', fontSize: 40 }}>一起看电视</Text>
      <Video
        source={{ uri: 'https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4' }}
        rate={1.0}
        volume={1.0}
        isMuted={false}
        resizeMode="cover"
        shouldPlay
        isLooping
        style={{ width: '100%', height: 300 }}
      />
      <HomeScreen />
      <VideoScreen />
      <StatusBar style="auto" />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
})
