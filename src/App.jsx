import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Header from './components/Header.jsx'
import Aside from './components/Aside.jsx'
import About from './pages/About.jsx'
import './App.css'

const App = () => {
  const Content = () => {
    return (
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    )
  }

  return (
    <div className="App">
        <Aside />
        <Header />
        <Content />
    </div>
  )
}

export default App
