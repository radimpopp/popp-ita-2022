import { Article } from '../Blog'
import { Articles } from './Articles'
import { genericHookContextBuilder } from '../../../helpers/utils'
import { useLocalStorage } from '../../../helpers/hooks'
import React from 'react'

const useArticlesLogicState = () => {
  const [articles, setArticles] = useLocalStorage('localStorageArticle', [] as Article[])

  return {
    articles,
  }
}

export const { ContextProvider: ArticlesContextProvider, Context: ArticlesStateContext } =
  genericHookContextBuilder(useArticlesLogicState)

export const ArticlesContext = () => {
  return (
    <ArticlesContextProvider>
      <Articles />
    </ArticlesContextProvider>
  )
}
