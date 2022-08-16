import { idText } from 'typescript'
import React from 'react'

export const createId = () => Math.random().toString()

type Props = {
  children: React.ReactNode
}

export const genericHookContextBuilder = <T, P>(hook: () => T) => {
  const Context = React.createContext<T>(undefined as never)

  return {
    Context,
    ContextProvider: (props: Props & P) => {
      const value = hook()

      return <Context.Provider value={value}>{props.children}</Context.Provider>
    },
  }
}

export const shuffleArray = <T,>(arr: T[]) => {
  return arr.sort(() => Math.random() - 0.5)
}
