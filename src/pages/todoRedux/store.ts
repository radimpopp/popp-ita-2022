import { configureStore } from '@reduxjs/toolkit'
import { loadState } from './localStorage'
import { todoReducer } from './todoSlice'

export const store = configureStore({
  reducer: todoReducer,
  preloadedState: loadState(),
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
