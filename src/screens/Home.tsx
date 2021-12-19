import { Text, View } from 'react-native'
import { Video } from 'expo-av'

const HomeScreen = () => {
  return (
    <View>
      <Text>Home</Text>
      <Video
        source={{ uri: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4' }}
        rate={1.0}
        volume={1.0}
        isMuted={false}
        resizeMode="cover"
        shouldPlay
        isLooping
        style={{ width: 300, height: 300 }}
      />
    </View>
  )
}

export default HomeScreen
