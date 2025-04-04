import { View, Text, StyleSheet, Platform, StatusBar, TouchableOpacity, ImageBackground } from 'react-native';
import { Link } from 'expo-router';

export default function Home() {
  return (
    <View style={styles.androidContainer}>

      <Text style={styles.title}>DayPlanner App</Text>
      <Link href="/tasks" asChild>
        <TouchableOpacity style={styles.linkButton}>
          <Text style={styles.linkText}>Go to Tasks</Text>
        </TouchableOpacity>
      </Link>
   
    </View>
  );
}

const styles = StyleSheet.create({
  androidContainer: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    backgroundColor: "transparent",
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    fontSize: 24,
    marginBottom: 20
  },
  linkButton: {
    padding: 12,
    backgroundColor: 'blue',
    borderRadius: 8
  },
  linkText: {
    color: 'white',
    fontSize: 16
  }
});