import { useState } from 'react';
import { View, TextInput, Button } from 'react-native';
import { useTaskStore } from '../../store/useTaskStore';

export default function AddTask() {
  const [text, setText] = useState('');
  const addTask = useTaskStore((state) => state.addTask);

  const handleSubmit = () => {
    if (text.trim()) {
      addTask(text); // Save to Zustand
      setText(''); // Clear input
    }
  };

  return (
    <View style={{ padding: 16 }}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
         <TextInput
        placeholder="Enter task"
        value={text}
        onChangeText={setText}
        style={{ borderWidth: 1, padding: 8, marginBottom: 8, color: '#000', backgroundColor: '#fff', }}
      />
      </View>
     
      <View>
      <Button title="Add Task" onPress={handleSubmit} />
    </View>
    </View>
    
  );
} 

