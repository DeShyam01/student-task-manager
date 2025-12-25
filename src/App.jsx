import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header.jsx'
import Aside from './components/Aside.jsx'
import Dashboard from './pages/Dashboard.jsx'
import Tasks from './pages/Tasks.jsx'
import './App.css'

const App = () => {
  const Content = () => {
    return (
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/tasks" element={<Tasks />} />
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
