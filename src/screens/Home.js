import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import Layout from '../components/Layout'

import React from 'react'

const Home = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Home</Text>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
    
    text: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'red',
        margin: 10,

    }
})