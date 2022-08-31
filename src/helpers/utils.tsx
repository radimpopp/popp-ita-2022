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

// https://stackoverflow.com/questions/990904/remove-accents-diacritics-in-a-string-in-javascript
export const createSlug = (title: string) =>
  title
    .toLowerCase()
    .trim()
    .normalize('NFD')
    .replace(/ +/g, '-')
    .replace(/[\u0300-\u036f]/g, '')
