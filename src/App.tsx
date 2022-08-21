import { CounterApp } from './pages/CounterApp'
import { GetUserData } from './pages/GetUserData'
import { HackerTyper } from './hackertyper/Hackertyper'
import { Helmet, HelmetProvider } from 'react-helmet-async'
import { Home } from './pages/Home'
import { JsWeb } from './pages/JsWeb'
import { MemoryGame } from './pages/MemoryGame'
import { MortgageCalculator } from './pages/MortgageCalculator'
import { Route, Routes } from 'react-router-dom'
import { TodoListApp } from './todolist/TodoList'
import { createGlobalStyle } from 'styled-components'
import { serviceLayers } from './helpers/serviceLayers'
import { theme } from './helpers/themes'
import { urls } from './helpers/urls'
import React from 'react'
import styled from 'styled-components'

export function App() {
  return (
    <HelmetProvider>
      <Div_StyledApp>
        <Helmet>
          <title>Radim Popp/Portfolio</title>
          <meta
            name='Description'
            content='Interactive CV of a React frontend developer Radim Popp'
          />
        </Helmet>
        <Routes>
          <Route path={urls.homeUrl} element={<Home />} />
          <Route path={`${urls.jsWebUrl}${urls.urlAll}`} element={<JsWeb />} />
          <Route path={urls.counterAppUrl} element={<CounterApp />} />
          <Route path={urls.todoListUrl} element={<TodoListApp />} />
          <Route path={urls.hackerTyperUrl} element={<HackerTyper />} />
          <Route path={urls.memoryGameUrl} element={<MemoryGame />} />
          <Route path={urls.mortgageCalculatorUrl} element={<MortgageCalculator />} />
          <Route path={serviceLayers.backendUrl} element={<GetUserData />} />
        </Routes>
        <GlobalStyle />
      </Div_StyledApp>
    </HelmetProvider>
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
  background-color: ${theme.color.greyBright};
  height: 100%;
  min-height: 100vh;
  position: relative;
}
`
