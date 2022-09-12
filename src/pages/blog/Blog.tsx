import { ArticleDetailContext } from './articleDetail/ArticleDetailContext'
import { ArticlesContext } from './allArticles/ArticlesContext'
import { CreateArticleContext } from './newArticle/CreateArticleContext'
import { H1_MainHeading } from '../../components/MainHeading'
import { Helmet } from 'react-helmet-async'
import { NavLink } from 'react-router-dom'
import { Route, Routes } from 'react-router-dom'
import { theme } from '../../helpers/themes'
import { urls } from '../../helpers/urls'
import React from 'react'
import styled from 'styled-components'

export type Article = {
  id: string
  author: string
  date: string
  content: string
  title: string
  slug: string
}

export const Blog = () => {
  return (
    <>
      <Helmet>
        <title>Radim Popp / Blog</title>
        <meta name='Description' content='Blog app' />
      </Helmet>
      <Div_Blog>
        <Nav_Blog>
          <Ul_Nav>
            <Link_NavLink to={urls.blog.allArticlesPath}>
              <H1_NavHeading>All Articles</H1_NavHeading>
            </Link_NavLink>
            <H1_BlogHeading>Blog</H1_BlogHeading>
            <Link_NavLink to={urls.blog.createNewPath}>
              <H1_NavHeading>Create New</H1_NavHeading>
            </Link_NavLink>
          </Ul_Nav>
        </Nav_Blog>
      </Div_Blog>
      <Routes>
        <Route path={urls.blog.articleDetailPath} element={<ArticleDetailContext />} />
        <Route path={urls.blog.articles} element={<ArticlesContext />} />
        <Route path={urls.blog.new} element={<CreateArticleContext />} />
      </Routes>
    </>
  )
}

const Div_Blog = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
`

const Nav_Blog = styled.nav`
  width: 92%;
  background-color: ${theme.color.black};
  display: flex;
  justify-content: space-evenly;
  border-bottom: 2px solid ${theme.color.salmon};
  border-right: 2px solid ${theme.color.salmon};
  border-left: 2px solid ${theme.color.salmon};
  text-align: center;
  ${theme.mediaQueries.tablet} {
  }
`

const Link_NavLink = styled(NavLink)`
  display: flex;
  justify-content: space-between;
  text-decoration: none;
  white-space: nowrap;
  &:hover {
    transform: scale(1.1);
  }
  ${theme.mediaQueries.phone} {
    &:nth-child(0) {
      order: 1;
    }
  }
`

const Ul_Nav = styled.ul`
  width: 100%;
  min-height: 4vw;
  display: flex;
  justify-content: space-evenly;
  list-style: none;
  align-items: center;
  ${theme.mediaQueries.tablet} {
    flex-direction: column;
  }
`

const H1_NavHeading = styled(H1_MainHeading)`
  padding: unset;
  &:hover {
    color: ${theme.color.salmon};
  }
`

const H1_BlogHeading = styled(H1_MainHeading)`
  padding: unset;
  ${theme.mediaQueries.tablet} {
    display: none;
  }
`
