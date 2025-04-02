import { FlatList, StyleSheet } from 'react-native'
import IdeaItem from './TaskItem'; // Import IdeaItem component
import React from 'react'

const IdeaList = ({ideas}) => {
  return (
    <FlatList 
    data={ideas}
    renderItem={({ item }) => <IdeaItem idea={item} />}
    keyExtractor={(item) => item.id.toString()}
    />
  )
}

export default IdeaList;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
       maxWidth: '90%',
     
    },
})

