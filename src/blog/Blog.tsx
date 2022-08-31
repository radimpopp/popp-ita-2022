import { ArticleDetailContext } from './articleDetail/ArticleDetailContext'
import { ArticlesContext } from './allArticles/ArticlesContext'
import { CreateArticleContext } from './newArticle/CreateArticleContext'
import { H1_MainHeadingYellow } from '../components/MainHeading'
import { Helmet } from 'react-helmet-async'
import { NavLink } from 'react-router-dom'
import { Route, Routes } from 'react-router-dom'
import { Ul_NavList } from '../components/Navbar'
import { theme } from '../helpers/themes'
import { urls } from '../helpers/urls'
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
      <Nav_Blog>
        <Ul_Nav>
          <Link_NavLink to={urls.blog.allArticlesPath}>
            <H1_NavHeading>All Articles</H1_NavHeading>
          </Link_NavLink>
          <H1_NavHeading>Blog</H1_NavHeading>
          <Link_NavLink to={urls.blog.createNewPath}>
            <H1_NavHeading>Create New</H1_NavHeading>
          </Link_NavLink>
        </Ul_Nav>
      </Nav_Blog>
      <Routes>
        <Route path={urls.blog.articleDetailPath} element={<ArticleDetailContext />} />
        <Route path={urls.blog.articles} element={<ArticlesContext />} />
        <Route path={urls.blog.new} element={<CreateArticleContext />} />
      </Routes>
    </>
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
  &:focus {
    border-bottom: 2px solid ${theme.color.orangeBright};
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
