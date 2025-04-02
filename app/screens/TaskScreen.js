import { StyleSheet, Text, View } from 'react-native'
import Layout from '../components/Layout'
import AddTask from '../components/tasks/AddTask'
import {useTaskStore} from '../store/useTaskStore' // Import Zustand store
import TaskList from '../components/tasks/TaskList'
import React from 'react'

const TaskScreen = () => {
    const tasks = useTaskStore((state) => state.tasks); // Get tasks from store
  return (
    <View>
         <Layout>
        <TaskList tasks={tasks} />  {/* Pass tasks as prop */}
       <AddTask />
   
        </Layout>
    </View>
  )
}

export default TaskScreen

const styles = StyleSheet.create({})