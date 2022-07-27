import { Route, Routes } from 'react-router-dom'
import Footer from './components/Footer/Footer'
import HomePage from './components/HomePage/HomePage'
import Navbar from './components/Navbar/Navbar'
import React from 'react'
import logo from './logo.svg'

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/history' />
        <Route path='/ECMAScript' />
        <Route path='/javascript-today' />
        <Route path='/javascript-java' />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
