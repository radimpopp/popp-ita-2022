import { Provider } from 'react-redux'
import { TodoList } from './TodoList'
import { debounce } from 'ts-debounce'
import { saveState } from './localStorage'
import { store } from './store'
import React from 'react'

export type Task = {
  task: string
  id: string
  completed: boolean
}

//https://dev.to/igorovic/simplest-way-to-persist-redux-state-to-localstorage-e67
store.subscribe(
  debounce(() => {
    saveState(store.getState())
  }, 800)
)

export const TodoApp = () => {
  return (
    <Provider store={store}>
      <TodoList />
    </Provider>
  )
}
