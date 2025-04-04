import { StyleSheet, Text, View, ImageBackground } from 'react-native'
import AddTask from './AddTask'
import {useTaskStore} from '../../store/useTaskStore' // Import Zustand store
import TaskList from './TaskList'
import React from 'react'


const tasks = () => {
    const tasks = useTaskStore((state) => state.tasks); // Get tasks from store
  return (
    <View style={{ flex: 1 }}>
        
          <View style={styles.overlay}>
          <TaskList tasks={tasks} /> 
          <AddTask />
        </View>
      
  
        
    </View>
  )
}

export default tasks;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
    opacity: 0.9,
  },
  overlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
})