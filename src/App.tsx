import { Blog } from './blog/Blog'
import { CounterApp } from './pages/CounterApp'
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
          <Route path={urls.home} element={<Home />} />
          <Route path={urls.jsweb.jsWebPath} element={<JsWeb />} />
          <Route path={urls.counterApp} element={<CounterApp />} />
          <Route path={urls.todoList} element={<TodoListApp />} />
          <Route path={urls.hackerTyper} element={<HackerTyper />} />
          <Route path={urls.memoryGame} element={<MemoryGame />} />
          <Route path={urls.mortgageCalculator} element={<MortgageCalculator />} />
          <Route path={urls.blog.blogPath} element={<Blog />} />
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
