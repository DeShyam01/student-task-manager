import React from 'react'
import Logo from './Logo'
import '../styles/components/Header.css'
import Searchbar from './Searchbar'
import Statbar from './Statbar'
import AccountIcon from './AccountIcon'

const Header = () => {
  return (
    <div className='header'>
      <Logo />
      <Searchbar />
      <Statbar />
      <AccountIcon />
    </div>
  )
}

export default Header
