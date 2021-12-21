import { Text, useColorScheme, View } from 'react-native'

const SettingScreen = () => {
  const isDark = useColorScheme() === 'dark'
  return (
    <View style={{ flex: 1, backgroundColor: isDark ? 'black' : 'white' }}>
      <Text
        style={{ color: isDark ? 'white' : 'black', fontFamily: 'NotoSerifSC_500Medium', fontSize: 40 }}>
        设置 Setting
      </Text>
    </View>
  )
}

export default SettingScreen
