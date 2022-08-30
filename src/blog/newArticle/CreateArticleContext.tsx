import { Article } from '../Blog'
import { CreateArticle } from './CreateArticle'
import { createId, createSlug, genericHookContextBuilder } from '../../helpers/utils'
import { urls } from '../../helpers/urls'
import { useLocalStorage } from '../../helpers/hooks'
import { useNavigate } from 'react-router-dom'
import React, { useState } from 'react'

const newDate = () => new Date().toLocaleDateString('cs-CZ')

const useCreateArticleLogicState = () => {
  const [articles, setArticles] = useLocalStorage('localStorageArticle', [] as Article[])
  const [author, setAuthor] = useState('')
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [authorErr, setAuthorErr] = useState<string | null>(null)
  const [titleErr, setTitleErr] = useState<string | null>(null)
  const [contentErr, setContentErr] = useState<string | null>(null)

  const navigate = useNavigate()

  const newArticle = () => {
    setAuthorErr(null)
    setTitleErr(null)
    setContentErr(null)

    if (author === '') {
      setAuthorErr('Error: Author required!')
      return
    }
    if (title === '') {
      setTitleErr('Error: Title required!')
      return
    } else if (articles.some(article => article.slug === createSlug(title))) {
      setTitleErr('Error: The title already exists!')
      return
    }

    if (content === '') {
      setContentErr('Error: Content required!')
      return
    }
    setArticles([
      {
        id: createId(),
        title: title,
        author: author,
        date: newDate(),
        content: content,
        slug: createSlug(title),
      },
      ...articles,
    ])
    setTitle('')
    setAuthor('')
    setContent('')
    navigate(`${urls.allArticlesPathUrl}`)
  }

  return {
    articles,
    setArticles,
    title,
    setTitle,
    titleErr,
    setTitleErr,
    author,
    setAuthor,
    authorErr,
    setAuthorErr,
    content,
    setContent,
    contentErr,
    setContentErr,
    newArticle,
  }
}

export const { ContextProvider: CreateContextProvider, Context: CreateStateContext } =
  genericHookContextBuilder(useCreateArticleLogicState)

export const CreateArticleContext = () => {
  return (
    <CreateContextProvider>
      <CreateArticle />
    </CreateContextProvider>
  )
}
