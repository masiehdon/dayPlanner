import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { ImageBackground, Platform, View, Text } from 'react-native';
import { SafeAreaProvider, useSafeAreaInsets } from 'react-native-safe-area-context';

function LayoutWrapper() {
  const insets = useSafeAreaInsets();
  
  return (
    <View style={{ flex: 1 }}>
        <ImageBackground 
        source={require('../assets/bgImages/darkBg.jpg')}
        resizeMode="cover"
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          justifyContent: 'center',
        }}
      />  



{/* <ImageBackground
  source={require('../assets/bgImages/darkBg.jpg')}
  style={{ flex: 1, justifyContent: 'center' }}
>
  <Text style={{ color: 'white', textAlign: 'center' }}>
    If you see this text but no image, the image exists but isn't displaying correctly
  </Text>
</ImageBackground> */}
      
      <StatusBar 
        style="light" 
        translucent 
        backgroundColor="transparent" 
      />
      
      <View style={{ 
        flex: 1,
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
        paddingLeft: insets.left,
        paddingRight: insets.right
      }}>


        
        <Stack screenOptions={{ headerShown: false }}>
          <Stack.Screen name="index" />
        </Stack>
      </View>
 
    </View>
  );
}

export default function RootLayout() {
  return (
    <SafeAreaProvider>
      <LayoutWrapper />
    </SafeAreaProvider>
  );
}