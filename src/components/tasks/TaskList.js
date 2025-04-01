import { FlatList, StyleSheet, Text, View } from 'react-native'
import TaskItem from './TaskItem'; // Import TaskItem component
import React from 'react'

const TaskList = ({tasks}) => {
  return (
    <FlatList 
    data={tasks}
    renderItem={({ item }) => <TaskItem task={item} />}
    keyExtractor={(item) => item.id.toString()}
    />
  )
}

export default TaskList;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
       maxWidth: '90%',
     
    },
})

