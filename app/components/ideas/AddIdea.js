import { useState } from 'react';
import { View, TextInput, Button } from 'react-native';
import { useIdeaStore } from '../../store/useIdeaStore';

export default function AddIdea() {
  const [idea, setIdea] = useState('');
  const addIdea = useIdeaStore((state) => state.addIdea);

  const handleSubmit = () => {
    if (idea.trim()) {
      addIdea(text); // Save to Zustand
      setIdea(''); // Clear input
    }
  };

  return (
    <View style={{ padding: 16 }}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
         <TextInput
        placeholder="Enter Idea"
        value={text}
        onChangeText={setIdea}
        style={{ borderWidth: 1, padding: 8, marginBottom: 8, color: '#000', backgroundColor: '#fff', }}
      />
      </View>
     
      <View>
      <Button title="Add Idea" onPress={handleSubmit} />
    </View>
    </View>
    
  );
} 

