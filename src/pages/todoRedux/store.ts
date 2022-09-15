import { configureStore } from '@reduxjs/toolkit'
import { loadState, localStorageKey } from './localStorage'
import { todoReducer } from './todoSlice'

export const store = configureStore({
  reducer: todoReducer,
  preloadedState: loadState(localStorageKey),
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
