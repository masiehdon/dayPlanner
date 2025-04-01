import { StyleSheet, Text, View, Pressable } from 'react-native'
import { useTaskStore } from '../../store/useTaskStore' // Import Zustand store
import React from 'react'

const IdeaItem = ({ task }) => {
  const { deleteIdea, toggleIdea } = useIdeaStore() // Get deleteIdea function from Zustand

  return (
    <View style={styles.container}>

  
    {/* <Pressable onPress = {() => toggleIdea(task.id)}>
      <Text 
      style={idea.completed ? styles.completedIdea : styles.idea}
      numberOfLines={1} // Prevents text from wrapping
      ellipsizeMode="tail" // Adds ... when text is too long
      >
        {idea.text}
        </Text>
    </Pressable>   */}

    <Pressable onPress={() => deleteIdea(idea.id)}>
      <Text style={styles.delete}>Delete</Text>
    </Pressable>
    </View>
  )
}
export default IdeaItem;

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
  idea: {
    fontSize: 14,
    maxWidth: '80%', // Limits text width
    overflow: 'hidden', // Hides overflow text
  },
  completedIdea: {
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