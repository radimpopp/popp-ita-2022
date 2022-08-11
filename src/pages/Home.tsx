import { Div_ImagesContainer } from '../components/Container'
import { H1_HomeHeading, H1_MainHeading } from '../components/MainHeading'
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
      <H1_MainHeading>Radim Popp</H1_MainHeading>
      <H2_SubHeading>Portfolio in progress</H2_SubHeading>
      <Div_HomeImage>
        <Img_Image src={underConstruction} alt='Under Construction' />
      </Div_HomeImage>
      <RouterLink to={urls.jsWebUrl}>
        <H1_HomeHeading>JS web</H1_HomeHeading>
      </RouterLink>
      <RouterLink to={urls.counterAppUrl}>
        <H1_HomeHeading>Counter app</H1_HomeHeading>
      </RouterLink>
      <RouterLink to={urls.todoListUrl}>
        <H1_HomeHeading>Todo list</H1_HomeHeading>
      </RouterLink>
      <RouterLink to={urls.hackerTyperUrl}>
        <H1_HomeHeading>HackerTyper</H1_HomeHeading>
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
`

const Div_HomeImage = styled.div`
  width: 27vw;
  padding-bottom: ${theme.spacing.small};
  ${theme.mediaQueries.phone} {
    width: 65vw;
  }
`
