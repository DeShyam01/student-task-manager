import React from 'react'
import '../styles/components/Header.css'
import Searchbar from './Searchbar'
import AccountIcon from './AccountIcon'
import AddTask from './AddTask'
import ToggleTheme from './ToggleTheme'

const Header = () => {
  return (
    <div className='header'>
      <Searchbar />
      <ToggleTheme />
      <AddTask />
      <AccountIcon />
    </div>
  )
}

export default Header
