import { Articles } from './Articles'
import { ArticlesDetail } from './ArticlesDetail'
import { CreateArticle } from './CreateArticle'
import { H1_MainHeadingYellow } from '../components/MainHeading'
import { Helmet, HelmetProvider } from 'react-helmet-async'
import { NavLink, useLocation, useNavigate } from 'react-router-dom'
import { Route, Routes } from 'react-router-dom'
import { Ul_NavList } from '../components/Navbar'
import { createId, createSlug, genericHookContextBuilder } from '../helpers/utils'
import { theme } from '../helpers/themes'
import { urls } from '../helpers/urls'
import { useLocalStorage } from '../helpers/hooks'
import React, { useState } from 'react'
import styled from 'styled-components'

type Article = {
  id: string
  author: string
  date: string
  content: string
  title: string
  slug: string
}

const newDate = () => new Date().toLocaleDateString('cs-CZ')

const useBlogLogicState = () => {
  const [articles, setArticles] = useLocalStorage('localStorageArticle', [] as Article[])
  const [author, setAuthor] = useState('')
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [authorErr, setAuthorErr] = useState('')
  const [titleErr, setTitleErr] = useState('')
  const [contentErr, setContentErr] = useState('')

  const navigate = useNavigate()

  const newArticle = () => {
    setAuthorErr('')
    setTitleErr('')
    setContentErr('')

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
    navigate(`${urls.blogUrl}${urls.blogArticlesUrl}`)
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

export const { ContextProvider: BlogContextProvider, Context: BlogStateContext } =
  genericHookContextBuilder(useBlogLogicState)

export const Blog = () => {
  const location = useLocation()

  return (
    <BlogContextProvider>
      <HelmetProvider>
        <Nav_Blog>
          <Ul_Nav>
            <Link_NavLink
              to={`${urls.blogUrl}${urls.blogArticlesUrl}`}
              style={
                location.pathname === `${urls.blogUrl}${urls.blogArticlesUrl}`
                  ? { borderBottom: `2px solid ${theme.color.orangeBright}` }
                  : { borderBottom: 'none' }
              }
            >
              <H1_NavHeading>All Articles</H1_NavHeading>
            </Link_NavLink>
            <H1_NavHeading>Blog</H1_NavHeading>
            <Link_NavLink
              to={`${urls.blogUrl}${urls.blogCreateUrl}`}
              style={
                location.pathname === `${urls.blogUrl}${urls.blogCreateUrl}`
                  ? { borderBottom: `2px solid ${theme.color.orangeBright}` }
                  : { borderBottom: 'none' }
              }
            >
              <H1_NavHeading>Create New</H1_NavHeading>
            </Link_NavLink>
          </Ul_Nav>
        </Nav_Blog>
        <Helmet>
          <title>Radim Popp / Blog</title>
          <meta name='Description' content='Blog app' />
        </Helmet>
        <Routes>
          <Route path={`${urls.blogArticleDetailUrl}:slug`} element={<ArticlesDetail />} />
          <Route path={urls.blogArticlesUrl} element={<Articles />} />
          <Route path={urls.blogCreateUrl} element={<CreateArticle />} />
        </Routes>
      </HelmetProvider>
    </BlogContextProvider>
  )
}

const Nav_Blog = styled.nav`
  background-color: ${theme.color.black};
  display: flex;
  justify-content: space-evenly;
  border-bottom: 2px solid ${theme.color.orangeBright};
  text-align: center;
  padding-bottom: ${theme.spacing.large};
  position: fixed;
  top: 0;
  ${theme.mediaQueries.phone} {
    padding: unset;
  }
`

const Link_NavLink = styled(NavLink)`
  display: flex;
  justify-content: space-between;
  text-decoration: none;
  color: ${theme.color.yellowBright};
  white-space: nowrap;
  &:hover {
    transform: scale(1.1);
  }
  ${theme.mediaQueries.phone} {
    &:nth-child(1) {
      order: 1;
    }
  }
`

const Ul_Nav = styled(Ul_NavList)`
  width: 100vw;
  min-height: 10vh;
`

const H1_NavHeading = styled(H1_MainHeadingYellow)`
  ${theme.mediaQueries.phone} {
    padding: unset;
  }
`
