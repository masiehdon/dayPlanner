import { Stack } from 'expo-router';
import { View, ImageBackground, StyleSheet, Platform, StatusBar } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export default function TaskLayout() {
  const insets = useSafeAreaInsets();

  return (
    <ImageBackground
      source={require("../../assets/bgImages/brightBg.jpg")}
      style={styles.background}
      resizeMode="cover"
    >
      {/* Handle notch area */}
      <View style={[
        styles.container,
        { paddingTop: Platform.OS === 'android' ? insets.top : 0 }
      ]}>
        <Stack
          screenOptions={{
            headerShown: false,
            contentStyle: { backgroundColor: 'transparent' }
          }}
        >
          <Stack.Screen name="index" />
          {/* Add other task screens here if needed */}
        </Stack>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  container: {
    flex: 1,
    backgroundColor: 'transparent',
  },
});