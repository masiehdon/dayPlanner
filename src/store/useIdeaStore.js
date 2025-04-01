// src/store/useTaskStore.js
import { create } from 'zustand';

export const useIdeaStore = create((set) => ({
  ideas: [],
  addIdea: (text) => 
    set((state) => ({
      ideas: [...state.ideas, { id: Date.now(), text, completed: false }],
    })),
  deleteIdea: (id) =>
    set((state) => ({
      tasks: state.tasks.filter((idea) => idea.id !== id),
    })),
  toggleIdea: (id) =>
    set((state) => ({
      ideas: state.idea.map((idea) =>
       idea.id === id ? { ...idea, completed: !idea.completed } : idea
      ),
    })),
}));

