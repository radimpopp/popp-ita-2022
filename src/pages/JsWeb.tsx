import { ECMAScript } from '../jshistory/ECMAScript'
import { Footer } from '../components/Footer'
import { History } from '../jshistory/History'
import { JavaScript } from '../jshistory/HomePage'
import { JavaScriptJava } from '../jshistory/JavaScriptJava'
import { JavaScriptToday } from '../jshistory/JavaScriptToday'
import { Navbar } from '../components/Navbar'
import { Route, Routes } from 'react-router-dom'
import { urls } from '../helpers/urls'
import React from 'react'

export const JsWeb = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path={urls.homeUrl} element={<JavaScript />} />
        <Route path={urls.historyUrl} element={<History />} />
        <Route path={urls.ecmaUrl} element={<ECMAScript />} />
        <Route path={urls.jstUrl} element={<JavaScriptToday />} />
        <Route path={urls.jsxjUrl} element={<JavaScriptJava />} />
      </Routes>
      <Footer />
    </>
  )
}
