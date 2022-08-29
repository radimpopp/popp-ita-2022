import { BlogStateContext } from './Blog'
import { Helmet, HelmetProvider } from 'react-helmet-async'
import { Markdown } from '../components/Markdown'
import { P_BodyTextWhiteEdition } from '../components/BodyText'
import { P_BodyTextWhiteUnderlined } from './Articles'
import { RouterLink } from '../components/RouterLink'
import { theme } from '../helpers/themes'
import { urls } from '../helpers/urls'
import { useParams } from 'react-router-dom'
import React, { useContext } from 'react'
import styled from 'styled-components'

export const ArticlesDetail = () => {
  const { slug } = useParams()
  const blogLogic = useContext(BlogStateContext)

  const article = blogLogic.articles.find(article => article.slug === slug)
  return article ? (
    <HelmetProvider>
      <Helmet>
        <title>`Radim Popp / Blog / ${article.title}`</title>
      </Helmet>
      <Div_ArticleDetailContainer>
        <Div_Article>
          <P_BodyTextWhiteUnderlined>{article.title}</P_BodyTextWhiteUnderlined>
          <P_BodyTextWhiteEdition>{article.author}</P_BodyTextWhiteEdition>
          <Markdown>{article.content}</Markdown>
          <P_BodyTextWhiteEdition>{article.date}</P_BodyTextWhiteEdition>
        </Div_Article>
        <RouterLink to={`${urls.blogUrl}${urls.blogArticlesUrl}`}>
          <P_BodyTextWhiteEdition>Back to all articles</P_BodyTextWhiteEdition>
        </RouterLink>
      </Div_ArticleDetailContainer>
    </HelmetProvider>
  ) : (
    <HelmetProvider>
      <Helmet>
        <title>`Radim Popp / Blog / Article not found`</title>
      </Helmet>
      <Div_ArticleDetailContainer>
        <P_BodyTextWhiteEdition>Article not found</P_BodyTextWhiteEdition>
      </Div_ArticleDetailContainer>
    </HelmetProvider>
  )
}

const Div_ArticleDetailContainer = styled.div`
  max-width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  overflow: scroll;
  background-color: ${theme.color.black};
  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`

const Div_Article = styled.div`
  width: 80vw;
  padding: ${theme.spacing.medium};
  border: 2px solid ${theme.color.orangeBright};
  border-radius: 10px;
  word-break: break-word;
  ${theme.mediaQueries.phone} {
    margin-top: 220px;
  }
`
