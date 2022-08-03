import { H1_MainHeading } from '../components/MainHeading'
import { RouterLink } from '../components/RouterLink'
import { urls } from '../helpers/urls'
import React from 'react'
import styled from 'styled-components'

export const Home = () => {
  return (
    <Div_StyledHome>
      <RouterLink to={urls.jsWebUrl}>
        <H1_MainHeading headingText='JS web'></H1_MainHeading>
      </RouterLink>
      <RouterLink to={urls.counterAppUrl}>
        <H1_MainHeading headingText='Counter app'></H1_MainHeading>
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
