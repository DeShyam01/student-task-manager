import React from 'react'
import logoImage from '../assets/logo.webp'
import '../styles/components/Logo.css'

const Logo = () => {
  return (
    <div className="logo">
      <img src={logoImage} alt="logo" />
    </div>
  )
}

export default Logo
