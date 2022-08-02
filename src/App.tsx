import { ECMAScript } from './hw1/ECMAScript'
import { Footer } from './components/Footer'
import { History } from './hw1/History'
import { HomePage } from './hw1/HomePage'
import { JavaScriptJava } from './hw1/JavaScriptJava'
import { JavaScriptToday } from './hw1/JavaScriptToday'
import { Navbar } from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import { createGlobalStyle } from 'styled-components'
import { urls } from './helpers/urls'
import React from 'react'
import styled from 'styled-components'

export function App() {
  return (
    <Div_StyledApp>
      <Navbar />
      <Routes>
        <Route path={urls.homeUrl} element={<HomePage />} />
        <Route path={urls.historyUrl} element={<History />} />
        <Route path={urls.ecmaUrl} element={<ECMAScript />} />
        <Route path={urls.jstUrl} element={<JavaScriptToday />} />
        <Route path={urls.jsxjUrl} element={<JavaScriptJava />} />
      </Routes>
      <Footer />
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
  background-color: #c1c1c1;
  height: 100%;
  min-height: 100vh;
  position: relative;
}
`
