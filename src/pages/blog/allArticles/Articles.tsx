import { ArticlesStateContext } from './ArticlesContext'
import { Helmet } from 'react-helmet-async'
import { RouterLink } from '../../../components/RouterLink'
import { getArticleDetail } from '../../../helpers/urls'
import { theme } from '../../../helpers/themes'
import React, { useContext } from 'react'
import styled from 'styled-components'

export const Articles = () => {
  const blogLogic = useContext(ArticlesStateContext)
  return (
    <Div_PageContainer>
      <Helmet>
        <title>Radim Popp / Blog / Articles</title>
      </Helmet>
      <Div_ArticleContainer>
        {blogLogic?.articles.map(article => (
          <RouterLink to={getArticleDetail(article.slug)} key={article.id}>
            <Div_ArticleInfo>
              <P_BodyTextWhiteUnderlined>{article.title}</P_BodyTextWhiteUnderlined>
              <P_BodyTextBlogWhite>by {article.author}</P_BodyTextBlogWhite>
              <P_BodyTextBlogWhite>{article.date}</P_BodyTextBlogWhite>
              <P_BodyTextBlogWhite>Read more...</P_BodyTextBlogWhite>
            </Div_ArticleInfo>
          </RouterLink>
        ))}
      </Div_ArticleContainer>
    </Div_PageContainer>
  )
}

const Div_ArticleContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  ${theme.mediaQueries.tablet} {
    margin-top: ${theme.spacing.superSize};
  }
`

const Div_ArticleInfo = styled.div`
  width: 41.5vw;
  margin: ${theme.spacing.large};
  padding: ${theme.spacing.medium};
  border: 2px solid ${theme.color.salmon};
  border-radius: 10px;
  ${theme.mediaQueries.phone} {
    width: 60vw;
    margin: ${theme.spacing.small};
  }
`

const Div_PageContainer = styled.div`
  max-width: 100vw;
  background-color: ${theme.color.black};
  display: flex;
  flex-direction: column;
  align-items: center;
`

const P_BodyTextBlogWhite = styled.p`
  font-size: ${theme.fontSize.small};
  color: ${theme.color.white};
  &:not(:last-child) {
    padding-bottom: ${theme.spacing.medium};
  }
`

export const P_BodyTextWhiteUnderlined = styled(P_BodyTextBlogWhite)`
  font-size: ${theme.fontSize.large};
  text-decoration: underline;
`
