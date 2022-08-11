import { H1_HomeHeading } from '../components/MainHeading'
import { RouterLink } from '../components/RouterLink'
import { urls } from '../helpers/urls'
import React from 'react'
import styled from 'styled-components'

export const Home = () => {
  return (
    <Div_StyledHome>
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
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`
