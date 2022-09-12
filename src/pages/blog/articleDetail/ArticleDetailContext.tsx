import { Article } from '../Blog'
import { ArticlesDetail } from './ArticlesDetail'
import { genericHookContextBuilder } from '../../../helpers/utils'
import { useLocalStorage } from '../../../helpers/hooks'
import React from 'react'

const useDetailLogicState = () => {
  const [articles, setArticles] = useLocalStorage('localStorageArticle', [] as Article[])

  return {
    articles,
  }
}

export const { ContextProvider: DetailContextProvider, Context: DetailStateContext } =
  genericHookContextBuilder(useDetailLogicState)

export const ArticleDetailContext = () => {
  return (
    <DetailContextProvider>
      <ArticlesDetail />
    </DetailContextProvider>
  )
}
