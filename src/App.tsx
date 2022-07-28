import { ECMAScript } from './components/ECMAScript/ECMAScript'
import { Footer } from './components/Footer/Footer'
import { History } from './components/History/History'
import { HomePage } from './components/HomePage/HomePage'
import { JavaScriptJava } from './components/JavaScriptJava/JavaScriptJava'
import { JavaScriptToday } from './components/JavaScriptToday/JavaScriptToday'
import { Navbar } from './components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import { urls } from './helpers/urls'
import React from 'react'
import logo from './logo.svg'

export function App() {
  return (
    <div className='App'>
      <Navbar />
      <Routes>
        <Route path={urls.homeUrl} element={<HomePage />} />
        <Route path={urls.historyUrl} element={<History />} />
        <Route path={urls.ecmaUrl} element={<ECMAScript />} />
        <Route path={urls.jstUrl} element={<JavaScriptToday />} />
        <Route path={urls.jsxjUrl} element={<JavaScriptJava />} />
      </Routes>
      <Footer />
    </div>
  )
}
