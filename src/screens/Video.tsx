import React from 'react'
import { Text, View } from 'react-native'
import { Video } from 'expo-av'

const VideoScreen = () => {
  return (
    <View>
      <Text style={{ fontSize: 40 }}>视频 Video</Text>
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
    </View>
  )
}

export default VideoScreen
