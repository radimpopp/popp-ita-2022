import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { Task } from './TodoApp'
import { createId } from '../../helpers/utils'

const initialState = [] as Task[]

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: {
      reducer: (state, action: PayloadAction<Task>) => {
        state.push(action.payload)
      },
      prepare: (task: string) => ({
        payload: {
          id: createId(),
          task,
          completed: false,
        } as Task,
      }),
    },
    removeTodo(state, action: PayloadAction<string>) {
      return state.filter(todo => todo.id !== action.payload)
    },
    handleCheck(state, action: PayloadAction<string>) {
      return state.map(todo =>
        action.payload === todo.id ? { ...todo, completed: !todo.completed } : todo
      )
    },

    checkAll(state) {
      return state.map(todo => (todo.completed === false ? { ...todo, completed: true } : todo))
    },

    uncheckAll(state) {
      return state.map(todo => (todo.completed === true ? { ...todo, completed: false } : todo))
    },

    deleteAllChecked(state) {
      return state.filter(todo => todo.completed === false)
    },

    editTodo(state, action: PayloadAction<{ id: string; newTodoItem: string }>) {
      return state.map(todo =>
        action.payload.id === todo.id ? { ...todo, task: action.payload.newTodoItem } : todo
      )
    },

    sortTask: (state, action: PayloadAction<{ dragTask: number; dragOverTask: number }>) => {
      const draggedTask = state.splice(action.payload.dragTask, 1)[0]
      state.splice(action.payload.dragOverTask, 0, draggedTask)
    },
  },
})

export const todoActions = todoSlice.actions
export const todoReducer = todoSlice.reducer
