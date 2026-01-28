import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/pages/Landing.css'

const Landing = () => {
  return (
    <div className='landing'>
      <h1>Welcome to Student Task Manager</h1>
      <p>Your personal task management solution for students.</p>
      <Link className='login-link' to="/login">Login</Link>
    </div>
  )
}

export default Landing
