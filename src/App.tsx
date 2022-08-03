import { CounterApp } from './pages/CounterApp'
import { Home } from './pages/Home'
import { JsWeb } from './pages/JsWeb'
import { Route, Routes } from 'react-router-dom'
import { colors } from './helpers/themes'
import { createGlobalStyle } from 'styled-components'
import { urls } from './helpers/urls'
import React from 'react'
import styled from 'styled-components'

export function App() {
  return (
    <Div_StyledApp>
      <Routes>
        <Route path={urls.homeUrl} element={<Home />} />
        <Route path={`${urls.jsWebUrl}${urls.urlAll}`} element={<JsWeb />} />
        <Route path={urls.counterAppUrl} element={<CounterApp />} />
      </Routes>
      <GlobalStyle />
    </Div_StyledApp>
  )
}

const Div_StyledApp = styled.div`
  width: 100%;
  height: 100%;
`

const GlobalStyle = createGlobalStyle`
* {
  padding: 0;
  margin: 0;
  font-family: 'Roboto', sans-serif;
}

html {
  font-size: 62.5%;
}

body {
  background-color: ${colors.grey100};
  height: 100%;
  min-height: 100vh;
  position: relative;
}
`
