import { ArticleDetailContext } from './articleDetail/ArticleDetailContext'
import { ArticlesContext } from './allArticles/ArticlesContext'
import { CreateArticleContext } from './newArticle/CreateArticleContext'
import { H1_MainHeadingYellow } from '../components/MainHeading'
import { Helmet, HelmetProvider } from 'react-helmet-async'
import { NavLink, useLocation, useNavigate } from 'react-router-dom'
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
  const location = useLocation()

  return (
    <HelmetProvider>
      <Nav_Blog>
        <Ul_Nav>
          <Link_NavLink
            to={urls.allArticlesPathUrl}
            style={{
              borderBottom:
                location.pathname === `${urls.allArticlesPathUrl}`
                  ? `2px solid ${theme.color.orangeBright}`
                  : 'none',
            }}
          >
            <H1_NavHeading>All Articles</H1_NavHeading>
          </Link_NavLink>
          <H1_NavHeading>Blog</H1_NavHeading>
          <Link_NavLink
            to={urls.createNewPathUrl}
            style={{
              borderBottom:
                location.pathname === `${urls.createNewPathUrl}`
                  ? `2px solid ${theme.color.orangeBright}`
                  : 'none',
            }}
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
        <Route path={urls.articleDetailPathUrl} element={<ArticleDetailContext />} />
        <Route path={urls.blogArticlesUrl} element={<ArticlesContext />} />
        <Route path={urls.blogCreateUrl} element={<CreateArticleContext />} />
      </Routes>
    </HelmetProvider>
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
