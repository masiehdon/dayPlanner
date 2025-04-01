import { StyleSheet, Text, View, Pressable } from 'react-native'
import { useTaskStore } from '../../store/useTaskStore' // Import Zustand store
import React from 'react'

const TaskItem = ({ task }) => {
  const { deleteTask, toggleTask } = useTaskStore() // Get deleteTask function from Zustand

  return (
    <View style={styles.container}>

  
    <Pressable onPress = {() => toggleTask(task.id)}>
      <Text 
      style={task.completed ? styles.completedTask : styles.task}
      numberOfLines={1} // Prevents text from wrapping
      ellipsizeMode="tail" // Adds ... when text is too long
      >
        {task.text}
        </Text>
    </Pressable>  

    <Pressable onPress={() => deleteTask(task.id)}>
      <Text style={styles.delete}>Delete</Text>
    </Pressable>
    </View>
  )
}
export default TaskItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    margin: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    marginBottom: 10,
    backgroundColor: '#E0FFFF',
  
  },
  task: {
    fontSize: 14,
    maxWidth: '80%', // Limits text width
    overflow: 'hidden', // Hides overflow text
  },
  completedTask: {
    fontSize: 14,
    textDecorationLine: 'line-through',
    maxWidth: '80%',
  },
  delete: {
    fontSize: 16,
    color: 'red',
    margin: 15,
  },
})