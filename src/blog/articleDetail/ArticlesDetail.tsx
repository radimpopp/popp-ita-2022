import { DetailStateContext } from './ArticleDetailContext'
import { Helmet, HelmetProvider } from 'react-helmet-async'
import { Markdown } from '../../components/Markdown'
import { P_BodyTextWhiteEdition } from '../../components/BodyText'
import { P_BodyTextWhiteUnderlined } from '../allArticles/Articles'
import { RouterLink } from '../../components/RouterLink'
import { theme } from '../../helpers/themes'
import { urls } from '../../helpers/urls'
import { useParams } from 'react-router-dom'
import React, { useContext } from 'react'
import styled from 'styled-components'

export const ArticlesDetail = () => {
  const { slug } = useParams()
  const blogLogic = useContext(DetailStateContext)

  const article = blogLogic.articles.find(article => article.slug === slug)
  return (
    <HelmetProvider>
      <Helmet>
        <title>`Radim Popp / Blog / ${article ? article.title : 'Article not found'}`</title>
      </Helmet>
      <Div_ArticleDetailContainer>
        {article ? (
          <>
            <Div_Article>
              <P_BodyTextWhiteUnderlined>{article.title}</P_BodyTextWhiteUnderlined>
              <P_BodyTextWhiteEdition>{article.author}</P_BodyTextWhiteEdition>
              <Markdown>{article.content}</Markdown>
              <P_BodyTextWhiteEdition>{article.date}</P_BodyTextWhiteEdition>
            </Div_Article>
          </>
        ) : (
          <P_BodyTextWhiteEdition>Article not found</P_BodyTextWhiteEdition>
        )}
        <RouterLink to={urls.allArticlesPathUrl}>
          <P_BodyTextWhiteEdition>Back to all articles</P_BodyTextWhiteEdition>
        </RouterLink>
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
  margin: 180px 0 ${theme.spacing.superSize} 0;
  padding: ${theme.spacing.medium};
  border: 2px solid ${theme.color.orangeBright};
  border-radius: 10px;
  word-break: break-word;
  ${theme.mediaQueries.phone} {
    margin-top: 220px;
  }
`
