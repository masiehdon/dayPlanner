import React from "react";
import { View, Text, ImageBackground, StyleSheet, SafeAreaView } from "react-native";

const Layout = ({ children }) => {
  return (
   
    <ImageBackground
      source={require("../../assets/bgImages/brightBg.jpg")}
      style={styles.background}
      resizeMode="cover" // Ensures image scales properly
    >
      <View style={styles.overlay}>
        {children}
      </View>
    </ImageBackground>
    
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1, 
    width: '100%',
    height: '100%',  },
  
  overlay: {
    flex: 1,
   
    justifyContent: "center",
    alignItems: "center",
 
  },
});

export default Layout;
