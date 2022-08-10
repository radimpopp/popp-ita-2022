import { ECMAScript } from '../JSHistory/ECMAScript'
import { Footer } from '../components/Footer'
import { History } from '../JSHistory/History'
import { JavaScript } from '../JSHistory/HomePage'
import { JavaScriptJava } from '../JSHistory/JavaScriptJava'
import { JavaScriptToday } from '../JSHistory/JavaScriptToday'
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
