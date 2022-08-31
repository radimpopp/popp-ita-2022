import { H1_MainHeadingYellow } from '../components/MainHeading'
import { H2_SubHeading } from '../components/SubHeading'
import { Img_Image } from '../components/Image'
import { RouterLink } from '../components/RouterLink'
import { theme } from '../helpers/themes'
import { urls } from '../helpers/urls'
import React from 'react'
import styled from 'styled-components'
import underConstruction from '../images/under-construction.jpg'

export const Home = () => {
  return (
    <Div_StyledHome>
      <H1_NameHeadingYellow>Radim Popp</H1_NameHeadingYellow>
      <H2_SubHeadingYellow>Portfolio in progress</H2_SubHeadingYellow>
      <Div_HomeImage>
        <Img_Image src={underConstruction} alt='Under Construction' />
      </Div_HomeImage>
      <RouterLink to={urls.jsweb.jsWeb}>
        <H1_HomeHeadingYellow>JS web</H1_HomeHeadingYellow>
      </RouterLink>
      <RouterLink to={urls.counterApp}>
        <H1_HomeHeadingYellow>Counter app</H1_HomeHeadingYellow>
      </RouterLink>
      <RouterLink to={urls.todoList}>
        <H1_HomeHeadingYellow>Todo list</H1_HomeHeadingYellow>
      </RouterLink>
      <RouterLink to={urls.hackerTyper}>
        <H1_HomeHeadingYellow>HackerTyper</H1_HomeHeadingYellow>
      </RouterLink>
      <RouterLink to={urls.memoryGame}>
        <H1_HomeHeadingYellow>Memory game</H1_HomeHeadingYellow>
      </RouterLink>
      <RouterLink to={urls.mortgageCalculator}>
        <H1_HomeHeadingYellow>Mortgage calculator</H1_HomeHeadingYellow>
      </RouterLink>
      <RouterLink to={urls.blog.allArticlesPath}>
        <H1_HomeHeadingYellow>Blog</H1_HomeHeadingYellow>
      </RouterLink>
    </Div_StyledHome>
  )
}

const Div_StyledHome = styled.div`
  width: 100vw;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: ${theme.color.black};
`

const Div_HomeImage = styled.div`
  width: 27vw;
  padding-bottom: ${theme.spacing.small};
  ${theme.mediaQueries.tablet} {
    width: 40vw;
  }
  ${theme.mediaQueries.phone} {
    width: 65vw;
  }
`

const H1_HomeHeadingYellow = styled(H1_MainHeadingYellow)`
  width: 25vw;
  padding: ${theme.spacing.small};
  border: ${theme.spacing.extraSmall} inset ${theme.color.orangeBright};
  ${theme.mediaQueries.tablet} {
    text-align: center;
    width: 40vw;
  }
  ${theme.mediaQueries.phone} {
    width: 60vw;
  }
`

const H1_NameHeadingYellow = styled(H1_HomeHeadingYellow)`
  border: unset;
  margin-top: ${theme.spacing.medium};
`

const H2_SubHeadingYellow = styled(H2_SubHeading)`
  color: ${theme.color.yellowBright};
`
