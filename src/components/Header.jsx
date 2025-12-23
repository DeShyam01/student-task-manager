import React from 'react'
import Logo from './Logo'
import '../styles/components/Header.css'
import userIcon from '../assets/user-icon.webp'
import Searchbar from './Searchbar'

const Header = () => {
  return (
    <div className='header'>
      <Logo />
      <Searchbar />
      <div className="user-info">
        <p className="username">john doe</p>
        <img src={userIcon} alt="user-icon" />
      </div>
    </div>
  )
}

export default Header
