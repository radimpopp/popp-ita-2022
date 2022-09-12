import { Article } from '../Blog'
import { CreateArticle } from './CreateArticle'
import { createId, createSlug, genericHookContextBuilder } from '../../../helpers/utils'
import { urls } from '../../../helpers/urls'
import { useLocalStorage } from '../../../helpers/hooks'
import { useNavigate } from 'react-router-dom'
import React, { useState } from 'react'

const newDate = () => new Date().toLocaleDateString('cs-CZ')

const useCreateArticleLogicState = () => {
  const [articles, setArticles] = useLocalStorage('localStorageArticle', [] as Article[])
  const [author, setAuthor] = useState('')
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [authorErr, setAuthorErr] = useState(null as string | null)
  const [titleErr, setTitleErr] = useState(null as string | null)
  const [contentErr, setContentErr] = useState(null as string | null)

  const navigate = useNavigate()

  const validateInputs = () => {
    setAuthorErr(null)
    setTitleErr(null)
    setContentErr(null)

    let isValid = true

    if (author.trim().length === 0) {
      setAuthorErr('Error: Author required!')
      isValid = false
    }
    if (title.trim().length === 0) {
      setTitleErr('Error: Title required!')
      isValid = false
    } else if (articles.some(article => article.slug === createSlug(title))) {
      setTitleErr('Error: The title already exists!')
      isValid = false
    }
    if (content.trim().length === 0) {
      setContentErr('Error: Content required!')
      isValid = false
    }

    return isValid
  }

  const newArticle = () => {
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
    navigate(urls.blog.allArticlesPath)
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
    validateInputs,
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
