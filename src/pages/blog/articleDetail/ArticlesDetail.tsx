import { DetailStateContext } from './ArticleDetailContext'
import { Helmet } from 'react-helmet-async'
import { Markdown } from '../../../components/Markdown'
import { P_BodyTextWhiteEdition } from '../../../components/BodyText'
import { P_BodyTextWhiteUnderlined } from '../allArticles/Articles'
import { theme } from '../../../helpers/themes'
import { useParams } from 'react-router-dom'
import React, { useContext } from 'react'
import styled from 'styled-components'

export const ArticlesDetail = () => {
  const params = useParams()
  const blogLogic = useContext(DetailStateContext)

  const article = blogLogic.articles.find(article => article.slug === params.slug)
  return (
    <Div_ArticleDetailContainer>
      <Helmet>
        <title>`Radim Popp / Blog / ${article ? article.title : 'Article not found'}`</title>
      </Helmet>
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
    </Div_ArticleDetailContainer>
  )
}

const Div_ArticleDetailContainer = styled.div`
  max-width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  background-color: ${theme.color.black};
`

const Div_Article = styled.div`
  width: 90vw;
  margin-top: ${theme.spacing.medium};
  padding: ${theme.spacing.medium};
  border: 2px solid ${theme.color.salmon};
  border-radius: 10px;
  word-break: break-word;
`
