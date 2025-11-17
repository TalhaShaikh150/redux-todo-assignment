import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
  name: "todo",
  initialState: {
    value: []
  },
  reducers: {
    addTodo: (state, action) => {
      state.value.push({
        id: Date.now(),
        text: action.payload,
        completed: false
      });
    },
    removeTodo: (state, action) => {
      state.value = state.value.filter(todo => todo.id !== action.payload);
    },
   
   
    setTodos: (state, action) => {
      state.value = action.payload;
    }
  }
});

export const { 
  addTodo, 
  removeTodo, 
  clearCompleted,
  setTodos 
} = todoSlice.actions;

export default todoSlice.reducer;