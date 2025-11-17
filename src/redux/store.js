import { configureStore } from '@reduxjs/toolkit'
import todoReducer from '../features/Todo'

export default configureStore({
  reducer: {
    todo: todoReducer, 
  }
})