import { RootState } from './store'

const localStorageKey = 'redux'
export const loadState = () => {
  try {
    const serializedState = localStorage.getItem(localStorageKey)
    if (!serializedState) return undefined
    return JSON.parse(serializedState)
  } catch (e) {
    return undefined
  }
}

export const saveState = async (state: RootState) => {
  try {
    const serializedState = JSON.stringify(state)
    localStorage.setItem(localStorageKey, serializedState)
  } catch (e) {}
}
