
import { StyleSheet, Text, View, SafeAreaView, Platform, StatusBar } from 'react-native';
import AddTask from './app/components/tasks/AddTask';
import TaskLayout from './app/components/TaskLayout';
import TaskList from './app/components/tasks/TaskList';
import { useTaskStore } from './app/store/useTaskStore'; // Import Zustand store

export default function App() {
  const tasks = useTaskStore((state) => state.tasks); // Get tasks from store
  return (
    <View style={styles.container}>
      <StatusBar translucent={true} />
      {Platform.OS === 'android' && (
        <View style={{ height: StatusBar.currentHeight }} />
      )}
      <SafeAreaView style={styles.safeArea}>
        <TaskLayout>
        <TaskList tasks={tasks} />  {/* Pass tasks as prop */}
       <AddTask />
   
        </TaskLayout>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({  
  safeArea: {
    flex: 1,
    backgroundColor: "#fff",
    //  paddingTop: Platform.OS === "android" ? StatusBar.currentHeight || 25 : 0,
   
  },
  container: {
    flex: 1,
   
  },
  
});