import { ECMAScript } from '../hw1/ECMAScript'
import { Footer } from '../components/Footer'
import { History } from '../hw1/History'
import { JavaScript } from '../hw1/HomePage'
import { JavaScriptJava } from '../hw1/JavaScriptJava'
import { JavaScriptToday } from '../hw1/JavaScriptToday'
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
