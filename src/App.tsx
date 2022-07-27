import { Route, Routes } from 'react-router-dom'
import ECMAScript from './components/ECMAScript/ECMAScript'
import Footer from './components/Footer/Footer'
import History from './components/History/History'
import HomePage from './components/HomePage/HomePage'
import JavaScriptJava from './components/JavaScriptJava/JavaScriptJava'
import JavaScriptToday from './components/JavaScriptToday/JavaScriptToday'
import Navbar from './components/Navbar/Navbar'
import React from 'react'
import logo from './logo.svg'

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/history' element={<History />} />
        <Route path='/ECMAScript' element={<ECMAScript />} />
        <Route path='/javascript-today' element={<JavaScriptToday />} />
        <Route path='/javascript-java' element={<JavaScriptJava />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
